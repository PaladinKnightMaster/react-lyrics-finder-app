```markdown
# Lyrics Finder

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Vite](https://img.shields.io/badge/Vite-4.1.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.8.4-blue)
![Material-UI](https://img.shields.io/badge/MUI-5.11.0-blue)
![Alova.js](https://img.shields.io/badge/Alova.js-1.0.0-green)
[![GitHub issues](https://img.shields.io/github/issues/paladinknightmaster/react-react-lyrics-finder-app-app)](https://github.com/paladinknightmaster/react-lyrics-finder-app/issues)
[![GitHub stars](https://img.shields.io/github/stars/paladinknightmaster/react-lyrics-finder-app?style=social)](https://github.com/paladinknightmaster/react-lyrics-finder-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/paladinknightmaster/react-lyrics-finder-app?style=social)](https://github.com/paladinknightmaster/react-lyrics-finder-app/network)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started with Development](#getting-started-with-development)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to **React Lyrics Finder**, a beautifully designed web application built with **React**, **Vite**, **Alova.js**, **Material-UI (MUI)**, and **TypeScript**. This application allows users to effortlessly search for and view song lyrics by entering the song title and artist's name. Whether you're a music enthusiast, a developer honing your skills, or someone looking to integrate APIs and manage dynamic content, Lyrics Finder provides a seamless and engaging experience.

## Features

- **Search Functionality**: Easily search for song lyrics by entering the song title and artist's name.
- **API Integration**: Fetches lyrics from the [Lyrics.ovh](https://lyrics.ovh/) public API using **Alova.js**.
- **Dynamic Content**: Displays lyrics dynamically based on user input.
- **Dark Mode**: Toggle between light and dark themes for a personalized user experience.
- **Animations**: Smooth fade-in animations enhance user interactions.
- **Responsive Design**: Optimized for various devices and screen sizes using **Material-UI**'s grid system.
- **Error Handling**: Gracefully handles errors and informs users when lyrics aren't found.
- **Accessibility**: Ensures an accessible interface for all users.

## Demo

*Screenshot of the Lyrics Finder application showcasing both light and dark modes.*

### Light Mode

![Light Mode](./assets/light-mode.png)

### Dark Mode

![Dark Mode](./assets/dark-mode.png)

## Tech Stack

- **Frontend**: React, Vite, TypeScript
- **UI Framework**: Material-UI (MUI)
- **API Handling**: Alova.js
- **Styling & Animations**: @emotion/react, @emotion/styled
- **State Management**: React Hooks

## Getting Started with Development

### Folder Structure

```markdown
react-lyrics-finder-app/
├── public/
│   └── vite.svg
├── src/
│   ├── adapters/
│   │   └── fetchRequestAdapter.ts
│   ├── components/
│   │   ├── LyricsDisplay.tsx
│   │   └── SearchBar.tsx
│   ├── hooks/
│   │   └── useFetchLyrics.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.html
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Detailed File Descriptions

- **public/**: Contains static assets like `vite.svg`.
- **src/adapters/fetchRequestAdapter.ts**: Custom fetch adapter integrating the native `fetch` API with Alova.js.
- **src/components/**: Reusable React components.
  - `LyricsDisplay.tsx`: Displays fetched lyrics.
  - `SearchBar.tsx`: User input for searching lyrics.
- **src/hooks/useFetchLyrics.ts**: Custom React hook for fetching lyrics using Alova.js.
- **src/styles/theme.ts**: Defines light and dark themes using Material-UI.
- **src/App.tsx**: Main application component integrating all parts.
- **src/main.tsx**: Entry point for the React application.
- **src/index.html**: HTML template for the React app.
- **package.json**: Project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration.
- **vite.config.ts**: Vite configuration file.
- **README.md**: Project documentation.

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **Yarn** package manager

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/paladinknightmaster/react-lyrics-finder-app.git
   cd react-lyrics-finder-app
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory if you need to set any environment variables. For this project, the default API endpoint is used, so this step is optional unless you plan to customize API settings.

   ```env
   VITE_API_BASE_URL=https://api.lyrics.ovh/v1
   ```

4. **Run the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

1. **Search for Lyrics**

   - Enter the **Song Title** and **Artist Name** in the respective input fields.
   - Click the **Search** button.
   - The lyrics will be fetched and displayed below the search bar.

2. **Toggle Dark Mode**

   - Click the **Toggle Dark Mode** button to switch between light and dark themes.

3. **Error Handling**

   - If lyrics are not found, an error message will inform you.
   - Ensure you're entering the correct song title and artist's name.

## Testing

To ensure the application works as expected, use the following sample song title and artist pairs:

| Song Title              | Artist                |
|-------------------------|-----------------------|
| Bohemian Rhapsody       | Queen                 |
| Imagine                 | John Lennon           |
| Go the Distance         | Michael Bolton        |
| Blinding Lights         | The Weeknd            |
| Don't Stop Believin'    | Journey               |
| Shape of You            | Ed Sheeran            |
| Rolling in the Deep     | Adele                 |
| Lose Yourself           | Eminem                |
| Despacito               | Luis Fonsi            |
| Rock & Roll All Nite    | KISS                  |
| Smells Like Teen Spirit | Nirvana               |
| Hallelujah              | Leonard Cohen         |
| 7 Rings                 | Ariana Grande         |
| Under Pressure          | Queen & David Bowie   |
| All of Me               | John Legend           |

### Example Test Cases

1. **Valid Searches**
   - **Test Case 1**:
     - **Title**: *Bohemian Rhapsody*
     - **Artist**: Queen
     - **Expected Result**: Displays lyrics for "Bohemian Rhapsody" by Queen.

   - **Test Case 2**:
     - **Title**: *Go the Distance*
     - **Artist**: Michael Bolton
     - **Expected Result**: Displays lyrics for "Go the Distance" by Michael Bolton.

2. **Handling Special Characters**
   - **Test Case 3**:
     - **Title**: *Don't Stop Believin'*
     - **Artist**: Journey
     - **Expected Result**: Correctly fetches and displays lyrics despite apostrophes.

   - **Test Case 4**:
     - **Title**: *Rock & Roll All Nite*
     - **Artist**: KISS
     - **Expected Result**: Correctly fetches and displays lyrics despite ampersand.

3. **Error Scenarios**
   - **Test Case 5**:
     - **Title**: *Nonexistent Song*
     - **Artist**: *Unknown Artist*
     - **Expected Result**: Displays an error message indicating lyrics not found.

   - **Test Case 6**:
     - **Title**: *Imagine*
     - **Artist**: *Incorrect Artist*
     - **Expected Result**: Displays an error message indicating lyrics not found.

4. **Edge Cases**
   - **Test Case 7**:
     - **Title**: *Hallelujah*
     - **Artist**: Leonard Cohen
     - **Expected Result**: Displays lyrics correctly.

   - **Test Case 8**:
     - **Title**: *Shape of You*
     - **Artist**: Ed Sheeran
     - **Expected Result**: Displays lyrics correctly.

## Deployment

You can deploy the Lyrics Finder application using various platforms. Below are instructions for deploying with **Vercel** and **Netlify**.

### Deploying to Vercel

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

   Follow the prompts to deploy your application.

### Deploying to Netlify

1. **Login to Netlify**

   Go to [Netlify](https://www.netlify.com/) and sign up or log in.

2. **New Site from Git**

   - Click on **"New site from Git"**.
   - Connect your GitHub repository.
   - Set the build command to `npm run build` and the publish directory to `dist`.

3. **Deploy**

   Follow the prompts to complete the deployment.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Alova.js](https://alova.js.org/) - Type-Safe HTTP Request Library
- [Material-UI (MUI)](https://mui.com/) - React UI framework
- [Lyrics.ovh API](https://lyrics.ovh/) - Free Lyrics API
- [Icons8](https://icons8.com/) - Icons used in the project