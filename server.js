const express = require('express');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Path to the Excel file
const excelFilePath = path.join(__dirname, 'CustomerData.xlsx');

// Define the column headers to match the displayed table
const headers = [
  'Customer Reference Number',
  'Customer Name',
  'City, State',
  'Purchase Value and Down Payment',
  'Loan Period and Annual Interest',
  'Guarantor Name',
  'Guarantor Reference Number',
  'Loan Amount and Principal',
  'Total Interest for Loan Period and Property Tax for Loan Period',
  'Property Insurance per Month and PMI per Annum',
  'Loan Amount',
  'Loan Period',
  'Total Interest for Loan Period',
  'Source',
  'Record No'
];

app.post('/save', (req, res) => {
  try {
    const newData = req.body.data; // Array of arrays from the client (13 columns)

    // Validate incoming data
    if (!Array.isArray(newData) || newData.length === 0) {
      return res.status(400).json({ success: false, error: 'No data provided' });
    }

    // Initialize workbook
    let workbook;
    let worksheet;

    // Check if the Excel file already exists
    if (fs.existsSync(excelFilePath)) {
      // Read existing workbook
      workbook = XLSX.readFile(excelFilePath);
      const sheetName = workbook.SheetNames[0];
      worksheet = workbook.Sheets[sheetName];
    } else {
      // Create a new workbook and worksheet
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([headers], { skipHeader: true });
      XLSX.utils.book_append_sheet(workbook, worksheet, 'CustomerData');
    }

    // Convert worksheet to JSON to get existing data
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // If the first row is not the headers, prepend headers
    if (existingData.length === 0 || existingData[0].join(',') !== headers.join(',')) {
      existingData.unshift(headers);
    }

    // Append new data
    newData.forEach(row => {
      if (row.length === headers.length) {
        existingData.push(row);
      }
    });

    // Convert back to worksheet
    const newWorksheet = XLSX.utils.aoa_to_sheet(existingData);

    // Update or set the worksheet in the workbook
    if (workbook.SheetNames.includes('CustomerData')) {
      workbook.Sheets['CustomerData'] = newWorksheet;
    } else {
      XLSX.utils.book_append_sheet(workbook, newWorksheet, 'CustomerData');
    }

    // Write the updated workbook to file
    XLSX.writeFile(workbook, excelFilePath);

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});