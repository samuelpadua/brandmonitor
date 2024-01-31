# Use the official Go image as a base
FROM golang:1.17-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Go modules files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the source code into the container
COPY . .

# Build the Go app
RUN go build -o search-job .

# Start a new stage from scratch
FROM alpine:latest  

WORKDIR /app

# Copy the binary from the previous stage
COPY --from=build /app/search-job .

# Command to run the executable
CMD ["./search-job"]
