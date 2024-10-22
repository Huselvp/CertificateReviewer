// Import express
const express = require('express');

// Initialize the app
const app = express();

// Define the checkHealth route
app.get('/checkHealth', (req, res) => {
    res.status(200).json({ status: 'Healthy', message: 'Service is up and running' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

