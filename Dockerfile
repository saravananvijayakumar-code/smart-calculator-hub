# React/Vite Frontend Dockerfile for Smart Calculator Hub
FROM node:20 as build

WORKDIR /app

# Copy all package files
COPY package.json ./
COPY frontend/ ./frontend/

# Install all dependencies including dev dependencies
RUN npm install
RUN cd frontend && npm install
RUN npm install -g vite @vitejs/plugin-react

# Copy vite config
COPY vite.config.lowmem.ts ./

# Build the React application
RUN cd frontend && npx vite build --config ../vite.config.lowmem.ts

# Production stage with nginx
FROM nginx:alpine

# Copy the built app to nginx
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]