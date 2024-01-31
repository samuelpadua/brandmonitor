# Use the official Node.js image as base
FROM node:latest AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Start a new stage from scratch
FROM node:latest

# Set working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules

# Expose port 3000
EXPOSE 3000

# Command to run your Next.js application
CMD ["npm", "start"]
