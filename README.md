# Vegan Recipe App

A web app for discovering vegan recipes, built for college students on a budget. Pulls live data from the Spoonacular API to display recipes with ingredients and step-by-step instructions.

**Live site:** https://harperdunn.github.io/vegan-recipe-app/

---

## Features

- Home page with sliding galleries of popular and healthy recipes
- Search bar to find any vegan recipe by keyword
- Cuisine pages for browsing by cuisine type
- Recipe detail view with full ingredient list and instructions

---

## Tech Stack

- **React** — component-based UI
- **React Router** — client-side routing
- **Styled Components** — CSS-in-JS styling
- **Spoonacular API** — recipe data
- **GitHub Pages** — deployment

---

## Setup

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root with your Spoonacular API key:
   ```
   REACT_APP_APIKEY=your_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm start
   ```
