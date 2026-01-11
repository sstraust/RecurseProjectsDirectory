# --- Stage 1: Build Frontend (ClojureScript) ---
FROM node:18-alpine AS frontend-builder
WORKDIR /app

# 1. Copy config files 
# Note: shadow-cljs needs deps.edn because you have ":deps true"
COPY package.json package-lock.json shadow-cljs.edn deps.edn ./
RUN npm ci

# 2. Copy all source folders (Clojure and ClojureScript)
COPY src ./src
COPY rcprojectsdirjs ./rcprojectsdirjs

# 3. Build the ':prod' version defined in your shadow-cljs.edn
RUN npx shadow-cljs release prod

# --- Stage 2: Run Backend (Clojure Source) ---
FROM clojure:tools-deps
WORKDIR /app

# 1. Cache Clojure dependencies
COPY deps.edn ./
RUN clojure -P

# 2. Copy your backend source and resources
COPY src ./src
COPY resources ./resources

# 3. Copy compiled JS from Stage 1 into your web server's resource path
# IMPORTANT: I am placing them in 'resources/public/js'. 
# Ensure your Ring handler looks in "public" for static files.
COPY --from=frontend-builder /app/prod_js ./resources/public/js

# 4. Start the app using your exact -X command
# Disco will provide the PORT env var; make sure your 'run-web-server' function reads it!
CMD ["clj", "-X", "rcprojectsdir.run-web-server/run-web-server", ":arg1", ":prod"]