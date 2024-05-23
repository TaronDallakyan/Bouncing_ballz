# Bouncing Ballz

This project is a simple web application that simulates circles falling and bouncing with gravity. Users can click on the canvas to spawn circles that fall and bounce realistically, with a dampening effect on each bounce until they come to a stop. A "Clear Circles" button allows users to remove all circles from the canvas.

## Features

- Click to spawn circles at the click location.
- Circles fall with Earth-like gravity and bounce with dampening.
- Circles are assigned random colors upon creation.
- The "Clear Circles" button clears all circles and changes its color to the last spawned circle's color.

## Setup and Execution

Follow these steps to set up and run the project locally.

### Steps

1. **Clone the repository**:

    ```sh
    git clone https://github.com/TaronDallakyan/Bouncing_ballz.git
    ```

2. **Compile TypeScript to JavaScript**:

    If you don't have TypeScript installed globally, you can install it using npm:

    ```sh
    npm install -g typescript
    ```

    Then compile the `script.ts` file:

    ```sh
    tsc script.ts
    ```

    This will generate a `script.js` file in the same directory.

3. **Open `index.html` in your web browser**:

    Simply open the `index.html` file in your preferred web browser. You can do this by double-clicking the file or right-clicking and selecting "Open with" and then your browser.

## File Structure

- `index.html`: The main HTML file that contains the structure of the web application.
- `styles.css`: The CSS file that contains the styles for the web application.
- `script.ts`: The TypeScript file that contains the logic for the web application.
- `script.js`: The compiled JavaScript file generated from `script.ts`.
- `README.md`: This file containing setup and execution instructions.