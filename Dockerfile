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
FROM encoredev/encore:latest AS backend

WORKDIR /workspace

# Copy backend code
COPY backend/ ./

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/backend/frontend/dist ./frontend/dist

# Expose port
EXPOSE 8080

# Start Encore
CMD ["encore", "run", "--port", "8080"]
