# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /app

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run your NestJS application
CMD ["npm", "run", "start:prod"]
