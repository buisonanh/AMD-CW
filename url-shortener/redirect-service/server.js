const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://buisonanh:vandetta@mydbserver.8edsn4w.mongodb.net/url-shortener")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Import and use routes
const redirectRouter = require("./routes/redirectRoute");
redirectRouter(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Redirection service is running on port http://localhost:${port}`);
});


