// server.js
const express = require('express');
const app = express();

app.get('/generate-iframe-url', (req, res) => {
    const { id } = req.query;
    if (!id) return res.status(400).send('ID parameter is missing');

    const reversedId = id.split('').reverse().join('');
    const iframeUrl = `https://www.terabox.com/sharing/embed?surl=${reversedId}`;
    res.json({ url: iframeUrl });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
