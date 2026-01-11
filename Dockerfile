# Stage 1: Install NPM dependencies
FROM node:20-alpine AS install_npm

WORKDIR /app/rcprojectsdirjs
COPY ./rcprojectsdirjs/package.json ./
RUN npm install

# Stage 2: Build ClojureScript and compile Clojure
FROM clojure:temurin-21-alpine AS build_clj

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

# Copy and install Python dependencies
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install --no-cache-dir -r /app/requirements.txt --break-system-packages

# Copy NPM dependencies from previous stage
COPY --from=install_npm /app/rcprojectsdirjs/node_modules /app/rcprojectsdirjs/node_modules

# Copy project files
COPY ./deps.edn /app/deps.edn
COPY ./rcprojectsdirjs /app/rcprojectsdirjs
COPY ./src /app/src

WORKDIR /app

# Build ClojureScript for production
RUN cd rcprojectsdirjs && npx shadow-cljs release app

# Stage 3: Create final runtime image
FROM clojure:temurin-21-alpine

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

# Copy and install Python dependencies
COPY ./requirements.txt ./requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt --break-system-packages

# Copy application code and built assets
COPY --from=build_clj /app/deps.edn ./deps.edn
COPY --from=build_clj /app/src ./src
COPY --from=build_clj /app/rcprojectsdirjs/prod_js ./rcprojectsdirjs/prod_js

# Pre-download dependencies to cache them in the image
RUN clojure -P

# Expose HTTP port
EXPOSE 8001

# Run the web server
CMD ["clojure", "-M", "-m", "rcprojectsdir.run-web-server"]
