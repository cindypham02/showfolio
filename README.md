# Showfolio

Showfolio is a React-based portfolio website showcasing various concerts. The project includes a carousel, accordion, header, footer, and cards to display concert information and images.

## Table of Contents

- [Installation Instructions]
- [Project Setup]

## Installation Instructions

### 1. Clone the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/cindypham02/showfolio.git
cd showfolio
```

### 2. Install Dependencies
Make sure you have Node.js and npm installed. You can check if they are installed by running:

```bash
node -v
npm -v
npm install
```

### 3. Tailwind CSS Setup
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Create postcss.config.js:
```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
Add Tailwind Directives to CSS:
In your src or assets folder, open or create a main CSS file with these commands
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Project Locally
To start the development server and view the project in your browser, run:

```bash
npm start
```
Your project should now be running on http://localhost:3000.


## Project Setup

### Folder Structure
src/ - Contains all the React components and assets (images, CSS files).  

public/ - Static files such as index.html and images.  

tailwind.config.js - Tailwind configuration file is used to customize the design system.

### Components Used
Accordion  

Carousel  

Card  

React  

Tailwind CSS  

Autoprefixer 

