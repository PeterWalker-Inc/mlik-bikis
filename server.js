const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 30000;

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    const cookie = req.cookies.Error;
       if (cookie === 'c3RvdmU=') {
        res.send('ZDBW$EB$DLFF7WETVDL9EN56V CZEDS2CLFF.DCU56VED72');
        return;
    }
    res.cookie('Error','RXJyb3I0MDQ=');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
