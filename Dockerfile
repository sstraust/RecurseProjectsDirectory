# Use Clojure base image with Java 21
FROM clojure:temurin-21-tools-deps-alpine

# Install Python and pip
RUN apk add --no-cache \
    python3 \
    py3-pip \
    python3-dev \
    build-base \
    nodejs \
    npm

# Install Python dependencies for libpython-clj
RUN pip3 install --break-system-packages requests-oauthlib

# Set working directory
WORKDIR /app

# Copy package.json files and install npm dependencies
COPY package.json ./
COPY rcprojectsdirjs/package.json ./rcprojectsdirjs/

# Install npm dependencies
RUN cd /app && npm install
RUN cd /app/rcprojectsdirjs && npm install

# Install shadow-cljs globally
RUN npm install -g shadow-cljs

# Copy the rest of the application
COPY . .

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose the port
EXPOSE 8001

# Set the entrypoint
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
