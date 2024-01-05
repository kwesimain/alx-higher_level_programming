#!/usr/bin/node
const fs = require('fs');

function writeToFile(filePath, content) {
  // Writing content to the file in utf-8 encoding
  fs.writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
      console.error('Error writing to file:', error);
    } else {
      console.log('File successfully written:', filePath);
    }
  });
}

// Command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Check if both filePath and content are provided
if (!filePath || !content) {
  console.error('Usage: node script.js <file-path> <content-to-write>');
} else {
  // Call the function to write to the file
  writeToFile(filePath, content);
}

