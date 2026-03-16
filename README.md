# Netflix Clone

A Netflix-inspired movie browsing application built with React that showcases a cinematic UI experience, complete with auto-playing trailers, an ambient blur effect, and real-time movie data from TMDB.

---

## About This Project

This project started in **June 2023** as a learning exercise while I was actively growing as a frontend developer. At the time, I was focused on understanding core concepts that every React developer needs to master: state management with Redux, user authentication with Firebase, component architecture with styled-components, and asynchronous data fetching.

The original version was a functional prototype — it proved I could wire together a real API, manage complex state, handle user sessions, and build a recognizable UI from scratch. But like any early project, it had rough edges: a dependency on an unreliable third-party video service, an unstable CSS-in-JS library, limited content rows, no search, and no way to explore movie details.

In **March 2026**, I revisited this project with nearly three years of additional experience and completely modernized it. Every dependency was updated, the architecture was rethought, and significant new features were added — all while preserving the original vision of a Netflix-like ambient viewing experience. This rewrite reflects how much my understanding of software engineering has grown: from writing code that works to writing code that is maintainable, performant, and well-structured.

---

## Features

- **Hero Banner** — Full-viewport featured movie section with backdrop image that transitions into an auto-playing YouTube trailer after 5 seconds
- **Ambient Mode** — A blurred, saturated glow effect behind the banner that reacts to the currently displayed content, giving the page a cinematic depth
- **Movie Logos** — Dynamically fetched title logos from TMDB's image API, falling back to styled text when unavailable
- **8 Genre Rows** — Trending, Netflix Originals, Top Rated, Action, Comedy, Horror, Romance, and Documentaries, each with horizontal scrolling and navigation arrows
- **Movie Detail Modal** — Click any movie to see its trailer, cast with photos, genres, runtime, rating, and similar titles
- **Search** — Debounced search across movies and TV shows with a responsive grid of results
- **Authentication** — Email/password sign-up and sign-in powered by Firebase Auth, with real-time session management
- **Responsive Design** — Adapts from mobile to ultrawide with Tailwind CSS utility classes
- **Lazy-Loaded Routes** — Code-split pages with Suspense for fast initial load times
- **Loading Skeletons** — Animated placeholder UI while data is being fetched
- **Error Boundaries** — Graceful error handling that prevents the entire app from crashing

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | 19 |
| Build Tool | Vite | 6 |
| Styling | Tailwind CSS | 4 |
| Data Fetching | TanStack Query | 5 |
| State Management | Redux Toolkit | 2 |
| Routing | React Router | 7 |
| Authentication | Firebase Auth | 11 |
| Animations | Framer Motion | 11 |
| Trailers | react-player | 2 |
| HTTP Client | Axios | 1.7 |
| Movie Data | TMDB API | v3 |

---

## Project Structure

```
src/
├── api/tmdb.js                    # TMDB API client and helpers
├── components/
│   ├── layout/                    # Navbar, Footer
│   ├── movie/                     # Banner, MovieCard, MovieRow, MovieModal, TrailerPlayer
│   └── ui/                        # Button, Input, Skeletons, ErrorBoundary
├── features/userSlice.jsx         # Redux auth state
├── hooks/                         # useMovies, useScrolled, useDebounce
├── icons/                         # SVG icon components
├── layouts/                       # AppLayout (auth guard), AuthLayout
├── pages/                         # Home, Search, Login, Welcome, Profile
├── store/store.js                 # Redux store (auth only)
├── firebase.js                    # Firebase configuration
├── router.jsx                     # Route definitions with lazy loading
├── App.jsx                        # Root component
└── main.jsx                       # Entry point with providers
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [TMDB API key](https://www.themoviedb.org/settings/api) (free)

### Installation

```bash
git clone https://github.com/mtohernandez/netflix-clone.git
cd netflix-clone
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_IMAGE_BASE=https://image.tmdb.org/t/p
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## What I Learned

### From the original build (2023)
- Managing global state with Redux Toolkit and async thunks
- Implementing Firebase authentication with session persistence
- Component-driven architecture with styled-components
- Working with third-party APIs and handling async data flows
- Building responsive layouts from a design reference

### From the modernization (2026)
- Migrating a legacy codebase without breaking functionality
- Replacing a CSS-in-JS library with utility-first CSS (Tailwind v4)
- Adopting TanStack Query to separate server state from client state
- Code splitting and lazy loading for performance
- Building accessible, animated UIs with Framer Motion
- Structuring a project for long-term maintainability
- Making pragmatic architecture decisions (what to keep, what to rewrite, what to delete)

---

## Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.
- UI inspired by [Netflix](https://www.netflix.com/). This project is for educational purposes only and is not affiliated with Netflix, Inc.
