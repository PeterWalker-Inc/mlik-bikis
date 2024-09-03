const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 30000;

app.use(cookieParser());
//app.use(express.static("./public"));
app.set('trust proxy', true);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    const cookie = req.cookies.Error;
    res.cookie('Error', 'AdPRygDavNB2FhLNmcJqi7hAWvmrwNE85F6iimAC6BYpQq7qEZ9TXHauVPChn21ETwt9WjXcLN')
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    if (cookie === '747WifAbMdM2qv22kued9Rfhkc1tw') {
        res.send('6EmmP5BvZrmU5a5x4iS7uSU7cXhgiqV1avigh89AYeE1uV34pesF1pg');
        return;
    }
});