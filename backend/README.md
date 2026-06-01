# GameShelf — Backend

Node.js + Express + TypeScript REST API for the GameShelf app.

## Tech Stack

- **Node.js + Express** — HTTP server
- **TypeScript** — static typing
- **Prisma ORM** — database client and migrations
- **MySQL 8** — relational database
- **JWT** — authentication
- **bcryptjs** — password hashing
- **IGDB API** — game data provider

## Project Structure

```
src/
├── @types/           # TypeScript type declarations
│   └── express.d.ts
├── controllers/      # request handlers
│   ├── auth.controller.ts
│   ├── game.controller.ts
│   ├── shelf.controller.ts
│   └── user.controller.ts
├── lib/              # external clients
│   ├── igdb.ts
│   └── prisma.ts
├── middlewares/      # Express middlewares
│   └── auth.middleware.ts
├── repositories/     # database queries
│   ├── game.repository.ts
│   ├── shelf.repository.ts
│   └── user.repository.ts
├── routes/           # route definitions
│   ├── auth.routes.ts
│   ├── game.routes.ts
│   ├── shelf.routes.ts
│   ├── user.routes.ts
│   └── index.ts
├── services/         # business logic
│   ├── auth.service.ts
│   ├── game.service.ts
│   ├── shelf.service.ts
│   └── user.service.ts
├── types/            # shared types
│   └── shelf.ts
└── server.ts
```

## API Routes

### Auth

| Method | Route              | Auth | Description       |
| ------ | ------------------ | ---- | ----------------- |
| POST   | /api/auth/register | No   | Register new user |
| POST   | /api/auth/login    | No   | Login             |

### Users

| Method | Route                  | Auth | Description     |
| ------ | ---------------------- | ---- | --------------- |
| GET    | /api/users/me          | Yes  | Get profile     |
| PUT    | /api/users/me          | Yes  | Update profile  |
| PATCH  | /api/users/me/password | Yes  | Change password |
| DELETE | /api/users/me          | Yes  | Delete account  |

### Games

| Method | Route               | Auth | Description          |
| ------ | ------------------- | ---- | -------------------- |
| GET    | /api/games/search?q | Yes  | Search games on IGDB |

### Shelf

| Method | Route            | Auth | Description          |
| ------ | ---------------- | ---- | -------------------- |
| GET    | /api/shelf       | Yes  | Get user shelf       |
| GET    | /api/shelf/stats | Yes  | Get shelf statistics |
| GET    | /api/shelf/:id   | Yes  | Get shelf game by id |
| POST   | /api/shelf       | Yes  | Add game to shelf    |
| PUT    | /api/shelf/:id   | Yes  | Update shelf game    |
| DELETE | /api/shelf/:id   | Yes  | Remove from shelf    |

## Database

### Models

**User**
| Field | Type | Description |
|-----------|----------|----------------------|
| id | String | UUID primary key |
| firstName | String | First name |
| lastName | String | Last name |
| email | String | Unique email |
| password | String | Hashed password |
| avatar | String? | Avatar URL |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Update timestamp |

**Game**
| Field | Type | Description |
|-------------|----------|----------------------|
| id | String | UUID primary key |
| rawgId | String | Unique IGDB game id |
| title | String | Game title |
| cover | String? | Cover image URL |
| developer | String? | Developer name |
| releaseYear | String? | Release year |
| genre | String? | Primary genre |
| createdAt | DateTime | Creation timestamp |

**ShelfGame**
| Field | Type | Description |
|-----------|-------------|---------------------------|
| id | String | UUID primary key |
| status | ShelfStatus | playing/completed/wishlist/dropped |
| platform | String | Platform name |
| rating | Float? | Rating 1-5 |
| review | String? | User review text |
| userId | String | Foreign key to User |
| gameId | String | Foreign key to Game |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Update timestamp |

## Environment Variables

Create a `.env` file in the `backend/` folder:

```env
DATABASE_URL="mysql://root:root@db:3306/gameshelf"
JWT_SECRET="your_secret_key_here"
JWT_EXPIRES_IN="7d"
PORT=3333
IGDB_CLIENT_ID="your_igdb_client_id"
IGDB_CLIENT_SECRET="your_igdb_client_secret"
```

## Running locally with Docker

```bash
# from the root of the project
docker compose up backend
```

## Running locally without Docker

```bash
cd backend
yarn install
npx prisma migrate dev
yarn dev
```

API available at `http://localhost:3333`

## Prisma Commands

```bash
# run migrations in development
yarn prisma:migrate

# generate prisma client
yarn prisma:generate

# open prisma studio (database GUI)
yarn prisma:studio
```
