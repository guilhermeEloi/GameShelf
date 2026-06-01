# 🎮 GameShelf

Personal game tracking app to manage your backlog, rate games and track your gaming habits.

## Tech Stack

**Frontend**

- React + Vite + TypeScript
- Styled Components
- Material UI (MUI)
- React Router DOM
- Axios

**Backend**

- Node.js + Express + TypeScript
- Prisma ORM
- MySQL 8
- JWT Authentication
- IGDB API

**Infrastructure**

- Docker + Docker Compose

## Project Structure

```
gameshelf/
├── frontend/        # React + Vite app
├── backend/         # Node.js + Express API
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker Desktop installed and running

### Running the project

1. Clone the repository

```bash
git clone https://github.com/seu-usuario/gameshelf.git
cd gameshelf
```

2. Configure environment variables

```bash
cp backend/.env.example backend/.env
```

Fill in the variables in `backend/.env`:

```env
DATABASE_URL="mysql://root:root@db:3306/gameshelf"
JWT_SECRET="your_secret_key_here"
JWT_EXPIRES_IN="7d"
PORT=3333
IGDB_CLIENT_ID="your_igdb_client_id"
IGDB_CLIENT_SECRET="your_igdb_client_secret"
```

3. Start all services

```bash
docker compose up --build
```

4. Access the app

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:3333 |
| Database | localhost:3306        |

## Features

- 🔐 JWT Authentication (register, login, forgot password)
- 🎮 Game search powered by IGDB API
- 📚 Personal game shelf with status tracking
- ⭐ Rating and review system
- 📊 Gaming statistics dashboard
- 👤 User profile management

## License

MIT
