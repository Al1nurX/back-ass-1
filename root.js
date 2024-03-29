const express = require('express');
const bodyParser = require('body-parser');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/bmiCalculator.html');
});

app.use('/bmi', bmiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
