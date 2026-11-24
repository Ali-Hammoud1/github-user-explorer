# GitHub User Explorer

A responsive React application that allows users to search for GitHub profiles and explore their public repositories using the GitHub REST API.

**[Live Demo](https://github-user-explorer-teal.vercel.app/)**

## Overview

GitHub User Explorer provides a simple and responsive interface for discovering GitHub users and exploring their public profile information and repositories.

The project was built to practice React fundamentals, component-based architecture, API integration, and state management.

## Features

- Search for GitHub users by username.
- Display GitHub user profile information.
- View profile statistics.
- Fetch and display public repositories.
- Handle loading, error, and empty states.
- Responsive user interface.



## Tech Stack

- **React** – Building the user interface.
- **JavaScript (ES6+)** – Application logic.
- **Tailwind CSS** – Styling and responsive design.
- **Vite** – Development server and build tool.
- **GitHub REST API** – Fetching user and repository data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ali-Hammoud1/github-user-explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-user-explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Project Structure

```text
src/
├── components/
│   ├── feedback/
│   ├── icons/
│   ├── layout/
│   ├── profile/
│   ├── repositories/
│   └── search/
├── styles/
├── App.jsx
└── main.jsx
```

## API

This project uses the [GitHub REST API](https://docs.github.com/en/rest) to retrieve public user profile information and repositories.

## Future Improvements

- Add pagination for repositories.
- Implement repository sorting and filtering.
- Improve error handling and user feedback.
- Display additional GitHub profile information.

## Author

**Ali Hammoud**

- GitHub: [@Ali-Hammoud1](https://github.com/Ali-Hammoud1)

---

Built as a learning project to strengthen React and Front-End Development skills.