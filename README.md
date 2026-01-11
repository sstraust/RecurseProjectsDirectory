# rcprojectsdir

A Clojure library designed to ... well, that part is up to you.

## Usage

### Docker Setup (Recommended)

The easiest way to run the project is with Docker Compose, which starts the backend, frontend, and database together.

**Start all services:**

```bash
docker compose up
```

Or run in the background:

```bash
docker compose up -d
```

This will start:
- **Backend** (Clojure): http://localhost:8001
- **Frontend** (shadow-cljs): http://localhost:9630 (UI)
- **PostgreSQL**: localhost:5432
- **nREPL ports**: 7000 (backend), 7002 (frontend)

**Note**: The backend service automatically installs Python 3 and dependencies from `requirements.txt` on startup. This is required for OAuth functionality via `libpython-clj2`.

**Stop all services:**

```bash
docker compose down
```

**View logs:**

```bash
docker compose logs -f
```

### Manual Setup (Without Docker)

Install Python dependencies (required for OAuth via libpython-clj2):

```bash
pip3 install -r requirements.txt
```

Install JavaScript dependencies:

```bash
cd rcprojectsdirjs
npm install
cd ..
```

### Starting the Database (Manual)

Start the PostgreSQL container:

```bash
docker compose up -d postgres
```

Check the database is running:

```bash
docker compose ps
```

Stop the database:

```bash
docker compose down
```

### Setting up Auth with RC
Follow the instructions at https://www.recurse.com/settings/apps to register your app for recurse.

To develop locally, create an oauth application, and set the redirect URI to "http://localhost:8001/handleRedirectResponse"  You can name it anything you want.

Then copy the generated id and secret to your .env file

RECURSE_CLIENT_ID= _the client id_
RECURSE_CLIENT_SECRET=_the client secret_



### Starting the Application

Start the ClojureScript compiler (optional, for live frontend updates):

```bash
cd rcprojectsdirjs
npx shadow-cljs watch app
```

This watches for ClojureScript changes and automatically recompiles, enabling live updates in the browser without restarting the server.

Start a REPL:

```bash
clj
```

Then run:

```clojure
(require 'rcprojectsdir.run-web-server)
(in-ns 'rcprojectsdir.run-web-server)
(run-web-server :dev)
```

The server will be available at http://localhost:8001

## Production Deployment

Build a production Docker image:

```bash
docker build -t rcprojectsdir:latest .
```

Run the production image (requires external PostgreSQL):

```bash
docker run --rm -it \
  -p 8001:8001 \
  -e POSTGRES_DB=rcprojectsdir \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypass \
  -e DATABASE_URL=postgresql://myuser:mypass@your-db-host/rcprojectsdir \
  rcprojectsdir:latest
```

The production build:
- Uses multistage builds to minimize image size
- Compiles ClojureScript assets ahead of time
- Includes Python 3 and pip dependencies for OAuth functionality
- Only includes runtime dependencies
- Does not include development tools (nREPL, live reload, etc.)

## License

Copyright © 2023 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
