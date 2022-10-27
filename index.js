const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.status(200).json({
        slackUsername: 'Nsongurua',
        backend: true,
        age: 23,
        bio: 'I am a backend developer enthusiastic about solving problems'
      });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

