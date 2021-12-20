require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use('', require('./routes/routes'));
mongoose.connect(process.env.MONGODB_URL).then(() => { console.log("Connected successfully") }).catch((err) => console.log(err));
app.listen(port, () => { console.log(`Server at port:${port}`) })