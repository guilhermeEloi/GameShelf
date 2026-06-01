# GameShelf — Frontend

React + Vite + TypeScript frontend for the GameShelf app.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **TypeScript** — static typing
- **Styled Components** — CSS-in-JS styling
- **Material UI (MUI)** — component library
- **React Router DOM** — client-side routing
- **Axios** — HTTP client

## Project Structure

```
src/
├── assets/           # images, icons, fonts
├── components/       # reusable components
│   ├── AddGameModal/
│   ├── AvatarMenu/
│   ├── Button/
│   ├── FeaturedGame/
│   ├── GameCard/
│   ├── Input/
│   ├── Navbar/
│   ├── StatCard/
│   └── StatusBadge/
├── contexts/         # React contexts
│   └── AuthContext.tsx
├── hooks/            # custom hooks
│   └── useAuth.ts
├── mocks/            # mock data for development
│   └── games.ts
├── pages/            # app screens
│   ├── ForgotPassword/
│   ├── GameDetail/
│   ├── Home/
│   ├── Login/
│   ├── Profile/
│   └── Register/
├── routes/           # route definitions
│   └── index.tsx
├── services/         # API calls
│   └── api.ts
├── styles/           # global styles and theme
│   ├── global.ts
│   ├── theme.ts
│   └── styled.d.ts
├── types/            # TypeScript interfaces
│   └── game.ts
├── App.tsx
└── main.tsx
```

## Pages

| Page            | Route            | Auth required |
| --------------- | ---------------- | ------------- |
| Login           | /login           | No            |
| Register        | /register        | No            |
| Forgot Password | /forgot-password | No            |
| Home            | /                | Yes           |
| Game Detail     | /game/:id        | Yes           |
| Profile         | /profile         | Yes           |

## Components

| Component    | Description                                         |
| ------------ | --------------------------------------------------- |
| Navbar       | Top navigation with add button and avatar menu      |
| AvatarMenu   | Dropdown with profile and logout options            |
| GameCard     | Game card with cover, status, platform and rating   |
| FeaturedGame | Wide card for the currently playing game            |
| StatCard     | Statistics card for the dashboard                   |
| StatusBadge  | Colored badge for game status                       |
| Input        | MUI TextField wrapper with custom styling           |
| Button       | MUI Button wrapper with contained/outlined variants |
| AddGameModal | Modal for searching and adding games to shelf       |

## Environment Variables

Create a `.env` file in the `frontend/` folder:

```env
VITE_API_URL=http://localhost:3333/api
```

## Running locally with Docker

```bash
# from the root of the project
docker compose up frontend
```

## Running locally without Docker

```bash
cd frontend
yarn install
yarn dev
```

Access at `http://localhost:5173`
