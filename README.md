# rcprojectsdir

A Clojure library designed to ... well, that part is up to you.

## Usage

### Setup

Install JavaScript dependencies:

```bash
cd rcprojectsdirjs
npm install
cd ..
```

### Running with Docker (Production)

The easiest way to run the application in production is using Docker Compose, which will:
- Build the ClojureScript production bundle
- Start the PostgreSQL database
- Run the application server

Before running, make sure you have a `.env` file with your OAuth credentials:

```bash
RECURSE_CLIENT_ID=your_client_id
RECURSE_CLIENT_SECRET=your_client_secret
```

Then start everything:

```bash
docker compose up -d
```

The application will be available at http://localhost:8001

View logs:

```bash
docker compose logs -f app
```

Stop everything:

```bash
docker compose down
```

### Starting the Database (Development)

For development, you can run just the PostgreSQL container:

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
