const express = require('express'),
    app = express(),
    port = 8000,
    mongoose = require('mongoose'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json())

require('./server/config/database')
require('./server/config/routes')(app)