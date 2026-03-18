// Backend entry point

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Mobile Legend Recharge System Backend');
});

app.listen(3000, () => {
    console.log('Backend running on port 3000');
});