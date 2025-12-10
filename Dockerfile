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

WORKDIR /app

# Install Encore CLI
RUN npm install -g encore.dev

# Copy root files
COPY encore.app package.json ./

# Copy backend code
COPY backend/ ./backend/

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/backend/frontend/dist ./backend/frontend/dist

# Install backend dependencies
WORKDIR /app/backend
RUN npm install --legacy-peer-deps

# Build Encore app
WORKDIR /app
RUN encore build

# Expose port
EXPOSE 8080

# Set environment for production
ENV NODE_ENV=production
ENV PORT=8080

# Start Encore in production mode
CMD ["node", "dist/backend/main.js"]
