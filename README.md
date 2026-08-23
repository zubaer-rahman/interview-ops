# Interview Ops

Interview Ops is a modern, responsive Single Page Application (SPA) designed to help developers master technical interview topics. It features a clean, distraction-free reading environment, a comprehensive curriculum, and a fully customizable UI.

## ✨ Features

- **Dynamic Preferences Engine**: Real-time adjustable typography (font family, font size, line height, and reading width) using fluid `rem`-based scaling.
- **True Theme Support**: Fully optimized Light and Dark modes with adjusted syntax highlighting (Atom One Light/Dark) that maintains high contrast and readability.
- **Persistent Progress Tracking**: Automatically saves your completed topics locally so you never lose your place.
- **Distraction-Free Layout**: A responsive, collapsible sidebar with a focus-oriented main reading panel.
- **Smart Meta Badges**: Embedded time estimates and difficulty indicators (Beginner, Intermediate, Advanced) adapted for both desktop and mobile views.
- **Built-in Code Highlighting**: A lightweight, custom syntax highlighter that adapts to the active theme without heavy third-party dependencies.

## 🚀 Getting Started

To get the project running locally on your machine:

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) (v16+) installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🏗️ Architecture

The application is built with a **feature-driven design**, favoring isolated domain-specific modules for better maintainability and scalability.

### Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite (for fast HMR and optimized builds)
- **Styling:** Vanilla CSS with dynamic CSS variables for real-time theme updates
- **State Management:** Custom React Hooks (`useProgress`, `usePreferences`) with `localStorage` persistence

### Directory Structure
```text
src/
├── main.jsx          # Application entry point
├── App.jsx           # Root layout and state provider
├── core/             # Global utilities and hooks
│   └── hooks/        # useProgress.js, usePreferences.js
├── data/             # Curriculum content
│   └── categories/   # Topic data and content files
├── features/         # Isolated, domain-specific modules
│   ├── auth/         # Login and profile management
│   ├── layout/       # App shell components (Sidebar, Topbar)
│   ├── preferences/  # Settings UI (PreferencesModal)
│   └── topics/       # Content viewing and navigation
├── styles/           # Global design system (index.css)
└── utils/            # Helper functions (e.g., highlightCode.js)
```
