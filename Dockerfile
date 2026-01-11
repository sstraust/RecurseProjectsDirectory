# --- Stage 2: Run Backend (Clojure Source) ---
FROM clojure:tools-deps
WORKDIR /app

# 1. Cache Clojure dependencies
COPY deps.edn ./
RUN clojure -P

# 2. Copy your backend source and resources
COPY src ./src
COPY rcprojectsdirjs ./rcprojectsdirjs


# 3. Copy compiled JS from Stage 1 into your web server's resource path
# IMPORTANT: I am placing them in 'resources/public/js'. 
# Ensure your Ring handler looks in "public" for static files.
# COPY --from=frontend-builder /app/prod_js ./resources/public/js

# 4. Start the app using your exact -X command
# Disco will provide the PORT env var; make sure your 'run-web-server' function reads it!
CMD ["clj", "-X", "rcprojectsdir.run-web-server/run-web-server", ":arg1", ":prod"]
