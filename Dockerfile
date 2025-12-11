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

# Backend stage - Use full Node image for Encore
FROM node:20 AS backend

WORKDIR /workspace

# Install Encore CLI globally
RUN npm install -g encore.dev@latest

# Copy entire project for Encore
COPY . ./

# Copy built frontend
COPY --from=frontend-builder /app/backend/frontend/dist ./backend/frontend/dist

# Install backend dependencies
WORKDIR /workspace/backend
RUN npm install --legacy-peer-deps

# Expose port
EXPOSE 8080

# Set working directory back to root
WORKDIR /workspace

# Set environment variables for Encore
ENV PORT=8080
ENV ENCORE_LISTEN_ADDR=0.0.0.0:8080

# Start Encore
CMD ["encore", "run"]
