# BMI Calculator Project

## Project Structure

project-folder
│

├── routes

│ └── bmiRoutes.js

├── public

│ └── bmiCalculator.html

├── node_modules

├── package.json

└── root.js

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project folder:

   ```bash
   cd ass-1

4. Install dependencies:
   
   ```bash
   npm install

## Running the Application

Ensure that the server runs on port 3000:

   ```bash
   npm start
   ```

Visit `http://localhost:3000` in your web browser to access the BMI calculator.

## Project Details

### HTML Template (public/bmiCalculator.html)
- Well-structured HTML file with Bootstrap for a clean and responsive design.
- Includes a navigation bar for a professional look.
- JavaScript validation for the input fields (height and weight).

### Express Server (root.js)
- Uses Express.js for handling the server.
- IThe server runs on port 3000.
- Optionally, routes are organized by separating them into a separate file (e.g., routes/bmiRoutes.js).

### BMI Calculation Logic (routes/bmiRoutes.js)
- Implements a /bmicalculator route for handling both GET and POST requests.
- BMI calculation logic is implemented in the core JavaScript file.
- Returns the BMI result along with appropriate messages.
