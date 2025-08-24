# React + Vite
# Sales Analytics Dashboard (React + Chart.js + GSAP + MUI)

A modern single-page dashboard built with React, Chart.js, GSAP animations, Material UI components and Tailwind CSS utilities. This project demonstrates charts, cards, filtering widgets, routing, theme (dark/light) support, and a simple profile menu.

---

## Quick start (Windows PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Run dev server (Vite):

```powershell
npm run dev
```

3. Open the app in your browser:

http://localhost:5173

If you see stale styles after edits, do a hard refresh (Ctrl+Shift+R).

---

## What’s included / Features

- Responsive dashboard with multiple charts (bar, pie, line) powered by Chart.js
	- Implementation: `src/Components/Dashboard.jsx` (Chart.js config + MUI Cards)

- GSAP entry animations for smooth UI transitions
	- Implementation: `src/Components/Dashboard.jsx` (uses GSAP to animate elements on mount)

- Home page with demo data and filtering widgets (users, tourist places)
	- Implementation: `src/Components/Home.jsx`, `src/Components/Features.jsx` (filters for age and rating)

- Material UI used for cards, typography, and forms (Login / Signup)
	- Implementation: `src/Components/Login.jsx`, `src/Components/Signup.jsx`, `src/Components/Dashboard.jsx` (MUI Card + Typography)

- Routing (React Router) and layout
	- Implementation: `src/App.jsx` (routes for `/`, `/dashboard`, `/login`, `/signup`)

- Navbar with:
	- Theme toggle (dark / light) that persists to `localStorage` and applies class to `<html>`
		- Implementation: theme state moved to `src/App.jsx`, toggle in `src/Components/Navbar.jsx`
	- Profile avatar button with dropdown (Login / Sign Up / Logout)
		- Implementation: `src/Components/Navbar.jsx` (demo avatar + dropdown menu)

- Tailwind CSS utilities used across components for rapid styling and `dark:` variants
	- Files: `src/index.css`, `src/App.css` (project styling and Tailwind imports)

---

## Implementation notes & file map

- `src/App.jsx`
	- Top-level layout and routing. Manages theme state (persisted to `localStorage`) and a demo `isLoggedIn` boolean. Passes `dark` and `setDark` to `Navbar` so theme changes are immediate across routes.

- `src/Components/Navbar.jsx`
	- Navigation bar with logo-as-home, theme toggle, and profile avatar + menu. Dropdown adapts to dark/light themes. The profile menu shows Login/Signup when logged out and Logout when logged in (demo `isLoggedIn` from `App.jsx`).

- `src/Components/Home.jsx`
	- Hero section and call-to-action to the dashboard. Uses Tailwind gradients and `dark:` classes.

- `src/Components/Features.jsx`
	- Demonstrates client-side filtering of demo datasets (users and tourist places). Shows how to add search/filters and style cards in dark mode.

- `src/Components/Dashboard.jsx`
	- KPI cards, three Chart.js charts, recent activity feed, and GSAP animations. Cards and charts switch styles for dark mode.

- `src/Components/Login.jsx` & `src/Components/Signup.jsx`
	- Material UI forms with nice visuals. Currently demo-only — you can wire them to the `onLogin` handler in `App.jsx` to persist login state.

---

## How dark mode works

- Theme is class-based (`dark` class applied to `<html>`). The app:
	- Reads `localStorage.theme` on startup or falls back to the OS preference.
	- Stores the chosen theme in `localStorage` on toggle.
	- Uses Tailwind `dark:` utility classes and component-level `dark:` classes to change backgrounds, text, and gradients.

Files to check for theme changes: `src/App.jsx` (theme state), `src/Components/*` (many components contain `dark:` classes).

If a component does not respond to theme toggles, ensure it uses `dark:` variants instead of hard-coded inline colors.

---

## Short list of recommended next features (pick one)

- Persistent auth + ProtectedRoute (recommended): Save login state and restrict `/dashboard` to authenticated users.
- Profile page with avatar upload: `/profile` with image upload (base64) and persistent store in `localStorage`.
- Export charts / data: CSV export or download chart as PNG.
- Real-time simulation: Simulate incoming data for charts with setInterval (or WebSocket mock).
- Drag-and-drop dashboard widgets: Use `react-grid-layout` to allow reordering and persist layout.

---

## Troubleshooting

- Dark mode not applying immediately: The theme state lives in `App.jsx`; make sure `document.documentElement` has the `dark` class (the Navbar toggle will set it). If styles are stale, hard refresh (Ctrl+Shift+R).
- Charts not rendering: Check console for Chart.js errors and ensure components mount (React strict mode can double-mount in dev).
- Missing Tailwind styles: Confirm `tailwindcss` is installed and `index.css` includes the `@tailwind` directives.

---

## Development tips

- To add a protected route, create `src/Components/ProtectedRoute.jsx` that reads `isLoggedIn` and redirects to `/login` when false.
- To wire Login form to demo auth, call `onLogin()` prop (passed from `App.jsx`) after successful credential check.

---

If you want, I can implement one of the recommended next features (auth, profile page, export, or real-time data). Tell me which one to add and I’ll implement it and wire tests.

---

License: MIT (replace with your preferred license)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
