// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes to serve HTML files
app.get('/liverecommendation2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'liverecommendation2.html'));
});

app.get('/mainmenu.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mainmenu.html'));
});

app.get('/viewallmemos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'viewallmemos.html'));
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});