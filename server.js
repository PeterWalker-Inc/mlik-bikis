const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 30000;

app.use(cookieParser());
app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.cookie('Error', 'FGqM1LoESYAuvqMX92Gf3DoaSbh8RfnJs7Jr7eEmsFnz7gugvE6ZNia64TKt8maR3GawneQt11bGog')
    const cookie = req.cookies.Error;
       if (cookie === '747WifAbMdM2qv22kued9Rfhkc1tw') {
        res.send('6EmmP5BvZrmU5a5x4iS7uSU7cXhgiqV1avigh89AYeE1uV34pesF1pg');
        return;
    }
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
