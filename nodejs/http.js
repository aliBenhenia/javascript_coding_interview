const http = require('http');

// In-memory "database" to store names
let names = [];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Handle GET request to retrieve all names
  if (req.method === "GET" && req.url === "/names") {
    res.statusCode = 200;
    res.write(JSON.stringify({ names }));
    res.end();
  }
  else if (req.method === "GET" && req.url === "/empty")
  {
        names = [];
        res.statusCode = 200;
        res.write(JSON.stringify({ message: "Names are empty" }));
        res.end();
  }
  // Handle POST request for /names (Create)
  else if (req.method === "POST" && req.url === "/names") {
    let body = '';

    // Collect data from the POST request
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsedData = JSON.parse(body);
        const { name } = parsedData;

        if (!name) {
          res.statusCode = 400;
          res.write(JSON.stringify({ error: "Name is required" }));
          return res.end();
        }

        // Ensure unique name
        if (names.includes(name)) {
          res.statusCode = 400;
          res.write(JSON.stringify({ error: "Name already exists" }));
          return res.end();
        }

        // Add the new name to the in-memory array
        names.push(name);

        res.statusCode = 201;
        res.write(JSON.stringify({ message: "Name added", name }));
        res.end();
      } catch (err) {
        res.statusCode = 400;
        res.write(JSON.stringify({ error: "Invalid JSON" }));
        res.end();
      }
    });
  }

  // Handle PUT request for /names/{oldName} (Update)
  else if (req.method === "PUT" && req.url.startsWith("/names/")) {
    const oldName = req.url.split('/')[2]; // Extract oldName from URL
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsedData = JSON.parse(body);
        const { newName } = parsedData;

        if (!newName) {
          res.statusCode = 400;
          res.write(JSON.stringify({ error: "New name is required" }));
          return res.end();
        }

        // Ensure old name exists
        if (!names.includes(oldName)) {
          res.statusCode = 404;
          res.write(JSON.stringify({ error: "Name not found" }));
          return res.end();
        }

        // Ensure the new name is unique
        if (names.includes(newName)) {
          res.statusCode = 400;
          res.write(JSON.stringify({ error: "New name already exists" }));
          return res.end();
        }

        // Update the old name to the new name
        const index = names.indexOf(oldName);
        names[index] = newName;

        res.statusCode = 200;
        res.write(JSON.stringify({ message: "Name updated", oldName, newName }));
        res.end();
      } catch (err) {
        res.statusCode = 400;
        res.write(JSON.stringify({ error: "Invalid JSON" }));
        res.end();
      }
    });
  }

  // Handle DELETE request for /names/{name} (Delete)
  else if (req.method === "DELETE" && req.url.startsWith("/names/")) {
    const name = req.url.split('/')[2]; // Extract name from URL

    // Ensure the name exists
    if (names.includes(name)) {
      // Remove the name from the array
      names = names.filter(n => n !== name);

      res.statusCode = 200;
      res.write(JSON.stringify({ message: "Name deleted", name }));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: "Name not found" }));
    }
    res.end();
  }

  // Handle other requests (invalid method or route)
  else {
    res.statusCode = 404;
    res.write(JSON.stringify({ error: "Resource not found" }));
    res.end();
  }
});

// Start the server
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
