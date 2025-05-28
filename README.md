# Mortagage Calculator & Formatter

## Overview

This is a web-based application for managing customer data, designed for financial or loan-related record-keeping. The application provides a user-friendly interface to input, validate, and export customer data, with a backend server to store data in an Excel file (`CustomerData.xlsx`). Key features include data text file as input, Field Separated Input Data, Key:Value , Validation, Loan Calculation Overview, Excel export, and recent file management.

## Features

- **Data Input and Conversion**: Input customer data and convert it for processing, with an option to download output as a text file.
- **Data Validation**: Validate and highlight data to ensure accuracy.
- **Customer Data Table**: Displays data in a structured table with columns such as:
  - Customer Reference Number
  - Customer Name
  - City, State
  - Purchase Value and Down Payment
  - Loan Period and Annual Interest
  - Guarantor Name
  - Guarantor Reference Number
  - Loan Amount and Principal
  - Total Interest for Loan Period
  - Property Insurance per Month and PMI per Annum
  - Source
  - Record No
- **Export to Excel**: Export table data to an Excel file for external use.
- **Recent Files Management**: Track and manage recently accessed files, with options to delete individual files or clear all.
- **Backend Storage**: Save data to an Excel file using a Node.js/Express server.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - Python
  - JavaScript
- **Backend**:
  - Node.js
  - Express
  - XLSX (for Excel file manipulation)
  - CORS (for cross-origin requests)
- **Data Storage**:
  - Excel file (`CustomerData.xlsx`)

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (Node Package Manager)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/GANESHBODLA/Mortgage-Calculator.git
   cd Mortgage-Calculator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs required packages: `express`, `xlsx`, `fs`, `path`, and `cors`.

3. **Start the Server**:
   ```bash
   node server.js
   ```
   The server will run at `http://localhost:3000`.

4. **Access the Frontend**:
   - Open `fasak.html` in a web browser. If hosting locally, use a tool like `http-server` or place the file in a web server directory.
   - Alternatively, serve the HTML file through the Express server by adding a static file route (not included in the provided `server.js`).

## Usage

1. **Input Data**:
   - Enter customer data in the "Input Data" section of the web interface.
   - Use the "Convert" button to process the data and optionally download it as a text file.

2. **Validate Data**:
   - Click "Validate & Highlight" to check data accuracy.
   - Use the "Validator" button for additional validation if implemented.

3. **View and Export Data**:
   - View customer data in the table.
   - Click "Export to Excel" to save the table data to `CustomerData.xlsx`.
   - Use "Clear" to reset the table.

4. **Manage Recent Files**:
   - View recent files (e.g., `Workload0311.txt`) in the "Recent Files" section.
   - Delete individual files or clear all files as needed.

5. **Backend Data Storage**:
   - Send data to the `/save` endpoint (via JavaScript/AJAX, not shown in provided code) to append to `CustomerData.xlsx`.
   - The server validates incoming data and updates the Excel file.

## File Structure

```
Mortgage-Calculator/
│
├── node_modules/ 
├── public/                     # Front-end static files
│   └── index.html              # Main HTML file
│
├── server.js                   # Main server file
├── customer-data.xlsx          # Excel file containing customer data
├── package-lock.json          
├── package.json                # Node.js project configuration
└── README.md                   # Project documentation
```


## Contributing

Contributions are welcome! Please submit a pull request or open an issue for bugs, features, or improvements.
