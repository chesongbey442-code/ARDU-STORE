const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'your_mongodb_connection_string'; // Replace this with your actual MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API Routes
app.get('/api/items', (req, res) => {
    // logic to get items
    res.status(200).json({ message: 'List of items' });
});

app.post('/api/recharge', (req, res) => {
    const { userId, amount } = req.body;
    // logic to handle recharge
    res.status(201).json({ message: 'Recharge successful', userId, amount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
