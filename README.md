# Microfront Web Project

This project demonstrates a microfrontend architecture using React and Vite, allowing components to be dynamically rendered and shared across multiple frontend applications.

## Overview

This microfrontend is set up using [Vite](https://vitejs.dev/) with the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) plugin to enable module federation. Components within the `src/components` directory can be exposed and consumed in a main frontend application.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will start the server and make the microfrontend available for integration.

## Project Structure

The project follows a simple structure:

- **`src/components`**: Directory where your React components live.

## Adding New Components

To add a new component to this microfrontend:

1. **Create the component**:

   Inside the `src/components` directory, create your component file, e.g., `NewComponent.tsx`:

   ```jsx
   // src/components/NewComponent.tsx
   import React from 'react';

   const NewComponent = () => {
     return <div>This is a new component!</div>;
   };

   export default NewComponent;
   ```

2. **Expose the component**:

   In `vite.config.js`, add your new component to the `exposes` section:

   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import federation from '@originjs/vite-plugin-federation';

   export default defineConfig({
     plugins: [
       react(),
       federation({
         name: 'microfront',
         filename: 'remoteEntry.js',
         exposes: {
           './List': './src/components/List.tsx',
           './Input': './src/components/Input.tsx',
           './ProfileImage': './src/components/ProfileImage.tsx',
           './NewComponent': './src/components/NewComponent.tsx',
         },
         shared: ['react'],
       }),
     ],
     build: {
       modulePreload: false,
       target: 'esnext',
       minify: false,
       cssCodeSplit: false,
     },
   });
   ```

3. **Use the component in the main frontend project**:

   In your main frontend project, import and use the component like this:

   ```javascript
   import NewComponent from 'microfront/NewComponent';

   const App = () => (
     <div>
       <NewComponent />
     </div>
   );

   export default App;
   ```


## Configuration Details

The `vite.config.js` is configured to expose components and enable module federation:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microfront', // Here is the name of your microfrontend
      filename: 'remoteEntry.js', // Here is the name of the file that will be used to import on your main front-end that will contain all your components code
      exposes: {
        './List': './src/components/List.tsx',
        './Input': './src/components/Input.tsx',
        './ProfileImage': './src/components/ProfileImage.tsx',
      },
      shared: ['react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
```