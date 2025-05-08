const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Sample data for museum exhibits
const exhibits = [
    { id: 1, name: "Mona Lisa", description: "A portrait painting by Leonardo da Vinci" },
    { id: 2, name: "The Starry Night", description: "A famous oil on canvas by Vincent van Gogh" },
    { id: 3, name: "The Scream", description: "An iconic work by Edvard Munch" }
];

// API endpoint to get information about an exhibit by ID
app.get('/exhibit/:id', (req, res) => {
    const exhibit = exhibits.find(e => e.id == req.params.id);
    if (exhibit) {
        res.json(exhibit);
    } else {
        res.status(404).json({ error: "Exhibit not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve static files (e.g. frontend)
app.use(express.static('public'));

// Fallback route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});