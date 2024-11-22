function myFetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        // Set up the request
        xhr.open(options.method || 'GET', url);
        
        // Set request headers
        if (options.headers) {
            Object.keys(options.headers).forEach(key => {
                xhr.setRequestHeader(key, options.headers[key]);
            });
        }

        // Handle the response
        xhr.onload = () => {
            const response = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders()),
                url: xhr.responseURL,
                json: () => Promise.resolve(JSON.parse(xhr.response)),
                text: () => Promise.resolve(xhr.responseText),
            };
            resolve(response);
        };

        // Handle errors
        xhr.onerror = () => {
            reject(new Error('Network error'));
        };

        // Handle timeout
        xhr.ontimeout = () => {
            reject(new Error('Request timed out'));
        };
        
        // Set timeout if provided
        if (options.timeout) {
            xhr.timeout = options.timeout;
        }

        // Send the request
        xhr.send(options.body || null);
    });
}

// Helper function to parse response headers
function parseHeaders(headerStr) {
    const headers = {};
    headerStr.trim().split(/[\r\n]+/).forEach(line => {
        const parts = line.split(': ');
        const key = parts.shift();
        const value = parts.join(': ');
        headers[key] = value;
    });
    return headers;
}

// Usage example
myFetch('https://api.example.com/data')
    .then(response => {
        console.log('Status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
});