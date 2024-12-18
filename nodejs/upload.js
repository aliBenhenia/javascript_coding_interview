const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Initialize the Express application
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' }); // Save files to the 'uploads' directory

// Route to serve the file upload form (just for demonstration)
app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload File</button>
    </form>
  `);
});

// POST endpoint to handle file upload and processing
app.post('/upload', upload.single('file'), (req, res) => {
  // Ensure that a file has been uploaded
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = path.join(__dirname, req.file.path);

  // Read the file content asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the file.');
    }

    // Process the file content
    const textToCheck = 'hello'; // You can change this to whatever text you want to check

    if (data.includes(textToCheck)) {
      res.send(`The file contains the text "${textToCheck}".`);
    } else {
      res.send(`The file does NOT contain the text "${textToCheck}".`);
    }

    // Optional: Delete the uploaded file after processing
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting the file:', err);
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
