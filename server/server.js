// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/vocab-builder', { useNewUrlParser: true });
// Check MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Import the model
require('./api/models/vocabModel');

// Import and use routes
const routes = require('./api/routes/vocabRoutes');
routes(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
