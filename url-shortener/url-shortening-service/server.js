const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://buisonanh:vandetta@mydbserver.8edsn4w.mongodb.net/url-shortener")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const urlRouter = require("./api/routes/urlRoute");
urlRouter(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
