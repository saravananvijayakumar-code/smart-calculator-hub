# Multi-stage build for Encore + React app
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend package files
COPY frontend/package*.json ./
COPY .npmrc ./

# Install frontend dependencies
RUN npm install --legacy-peer-deps

# Copy frontend source
COPY frontend/ ./

# Build frontend
RUN npx vite build --outDir=../backend/frontend/dist

# Backend stage
FROM node:20-alpine AS backend

WORKDIR /workspace

# Install Encore CLI
RUN npm install -g encore.dev

# Copy entire project (needed for encore.app)
COPY . ./

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/backend/frontend/dist ./backend/frontend/dist

# Install backend dependencies
WORKDIR /workspace/backend
RUN npm install --legacy-peer-deps

# Expose port
EXPOSE 8080

# Set working directory back to root
WORKDIR /workspace

# Start Encore
CMD ["encore", "run", "--port", "8080"]
