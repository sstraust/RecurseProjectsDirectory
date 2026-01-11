#!/bin/sh
set -e

echo "Compiling ClojureScript with shadow-cljs..."
cd /app/rcprojectsdirjs
npx shadow-cljs release app

echo "Starting web server..."
cd /app
exec clj -X rcprojectsdir.run-web-server/run-web-server :arg1 :prod
