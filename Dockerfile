# --- Stage 1: Build Frontend (ClojureScript) ---
FROM node:18-alpine AS frontend-builder
WORKDIR /app

# 1. Copy frontend config files from rcprojectsdirjs
# Note: shadow-cljs needs deps.edn because you have ":deps true"
COPY rcprojectsdirjs/package.json ./
COPY rcprojectsdirjs/shadow-cljs.edn rcprojectsdirjs/deps.edn ./
RUN npm ci

# 2. Copy frontend source from rcprojectsdirjs
COPY rcprojectsdirjs/src ./src

# 3. Build the ':prod' version defined in your shadow-cljs.edn
RUN npx shadow-cljs release prod

# --- Stage 2: Run Backend (Clojure Source) ---
FROM clojure:tools-deps
WORKDIR /app

# 1. Cache Clojure dependencies
COPY deps.edn ./
RUN clojure -P

# 2. Copy your backend source
COPY src ./src

# 3. Create resources directory structure and copy static files
RUN mkdir -p resources/public/js resources/user_images
COPY rcprojectsdirjs/resources/ ./resources/

# 4. Copy compiled JS from Stage 1 into resources directory
COPY --from=frontend-builder /app/prod_js ./resources/public/js

# 5. Start the app using your exact -X command
# Disco will provide the PORT env var; make sure your 'run-web-server' function reads it!
CMD ["clj", "-X", "rcprojectsdir.run-web-server/run-web-server", ":arg1", ":prod"]