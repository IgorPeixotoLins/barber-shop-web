# Barber Shop Web ✂️💈

A modern, fully responsive service presentation and appointment web application built for barber shops, leveraging the React ecosystem.

![Demonstração do Barber Shop Web](./demo.gif)

---

## 🚀 Technologies Used
- **React** (Efficient component-driven UI)
- **TypeScript** (Static typing and code reliability)
- **Styled Components** (CSS-in-JS for scoped, dynamic, and clean styling)
- **Vite** (Ultra-fast development environment and bundler)

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🏃 How to Run the Project

Follow these steps to clone the repository and run the application locally:

### 1. Clone the Repository
```bash
git clone https://github.com/IgorPeixotoLins/barber-shop-web.git
```

### 2. Navigate to the Project Folder
```bash
cd BARBER-SHOP-WEB
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

Once the server starts, open your browser and navigate to the local address provided in your terminal (usually `http://localhost:5173`).

---

## 📁 Project Structure

Here is a quick look at how the project's source folder is organized:

```text
src/
├── @types/       # Global TypeScript definitions
├── assets/       # Static assets and global icons
├── components/   # Reusable UI components (Header, Hero, Cards, etc.)
├── images/       # Local images used across sections
├── pages/        # Main application page layouts
├── services/     # API connection or mock services
├── styles/       # Global CSS-in-JS configurations (GlobalStyles.ts)
└── utils/        # Helper functions and constants
```

---

## 📈 Evolution & Key Learnings

This project underwent a major architectural refactoring:
- **The Origin:** Originally developed using legacy structured HTML5 and traditional CSS3 stylesheets.
- **Modernization:** Migrated to reusable React components. Implemented *Transient Props* (`$isOpen`) within Styled Components to prevent invalid custom attributes from leaking into the DOM.
- **Mobile Navigation:** Completely refactored the hamburger menu layout into an elegant horizontal drawer sliding mechanism (`transform: translateX`), ensuring a flawless optical alignment and symmetry with the header's desktop action buttons.
- **Hero Optimization:** Fixed responsive cropping issues on the hero background image using dynamic positioning constraints (`background-position`) to keep the layout pixel-perfect across varying screen ratios.