# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install all dependencies (including devDeps for build)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the React frontend
RUN npm run build

# Expose Cloud Run's default port
EXPOSE 8080

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the Express server
CMD ["node", "server.js"]
