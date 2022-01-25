const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: "./config/config.env"});

const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (req , res) => {
});