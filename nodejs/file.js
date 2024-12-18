const fs = require('fs'); // No need for `.promises` since we're using synchronous methods

function readFile(filePath) {
  if (!filePath) return null;
  try {
    const data = fs.readFileSync(filePath, 'utf8'); // Synchronous version of readFile
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}


exports.reader = readFile;  // Export the synchronous `readFile` function
