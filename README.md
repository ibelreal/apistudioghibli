# Studio Ghibli App project

Live Demo: https://ibelreal.github.io/apistudioghibli/

### Description

This project is a solution to a technical test. The goal was to build a web application that connects to an external API and displays its data in a user-friendly interface.

The app consumes data from a Studio Ghibli API and presents information about films, focusing on usability, responsiveness, and performance.

## Technologies Used

- React
- JavaScript
- Sass
- Mapbox GL JS (Dependency)

## Project Structure
```
src/
├── components/     # Reusable UI components
├── data/           # Static data (e.g., image mappings)
├── images/         # Local assets
├── services/       # API calls and external services
└── stylesheets/    # SCSS files
```
## Getting Started

1. Clone the repository
 ```bash
   git clone <repository-url>
   cd <project-folder>
```
2. Install dependencies
 ```bash
   npm install
```
3. Start the development server
 ```bash
   npm start
```
The project will run at [http://localhost:3000](http://localhost:3000)

## Technical Requirements

✔ Built using React

✔ Compatible with IE11 and above

## Implemented Features

✔ **Film Images:**
Since the API does not provide images, a local JSON file is used to map each movie to its corresponding image URL.

✔ **Responsive Design:**
  Implemented using Sass to ensure compatibility across mobile, tablet, and desktop devices.

✔ **User Interface:**
  Inspired by the visual style of Studio Ghibli films, aiming to reflect their artistic identity.

✔ **Performance:**
  Efficient data handling using React state and props to ensure smooth rendering and user interaction.

## Pending / Future Improvements

✘ **Testing:**
  Automated testing is not yet implemented. Adding unit and integration tests is planned for future iterations.
