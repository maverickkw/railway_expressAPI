const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // Enable CORS for all origins
app.use(express.json());
require("dotenv").config(); // Add this line

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Express API!");
});

// Add this route
app.get('/secret', (req, res) => {
    const providedKey = req.headers['x-api-key'];
    if (providedKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json({ message: 'You found the secret data!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
