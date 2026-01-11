# Multi-stage build for compiling ClojureScript and running the application

# Stage 1: Build ClojureScript production bundle
FROM node:20-alpine AS cljs-builder

# Install Java (required for shadow-cljs)
RUN apk add --no-cache openjdk17-jre

WORKDIR /app

# Copy ClojureScript project files
COPY rcprojectsdirjs/package.json rcprojectsdirjs/package-lock.json* ./rcprojectsdirjs/
COPY rcprojectsdirjs/deps.edn rcprojectsdirjs/shadow-cljs.edn ./rcprojectsdirjs/

# Install npm dependencies
WORKDIR /app/rcprojectsdirjs
RUN npm install

# Copy ClojureScript source files
COPY rcprojectsdirjs/src ./src

# Build production ClojureScript bundle
RUN npx shadow-cljs release prod

# Stage 2: Runtime environment
FROM clojure:temurin-21-tools-deps-alpine

WORKDIR /app

# Copy project dependencies files
COPY deps.edn ./

# Download dependencies (this layer will be cached)
RUN clojure -P

# Copy the entire application
COPY src ./src
COPY --from=cljs-builder /app/rcprojectsdirjs/prod_js ./rcprojectsdirjs/prod_js
COPY rcprojectsdirjs/deps.edn rcprojectsdirjs/shadow-cljs.edn ./rcprojectsdirjs/

# Expose the application port
EXPOSE 8001

# Set environment variables for production
ENV MODE=prod

# Run the application
CMD ["clojure", "-M", "-e", "(require '[rcprojectsdir.run-web-server :as server]) (server/run-web-server :prod) @(promise)"]
