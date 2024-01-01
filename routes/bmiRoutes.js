const express = require('express');
const router = express.Router();

router.route('/bmicalculator')
    .get((req, res) => {
        res.sendFile(__dirname + '/../public/bmiCalculator.html');
    })
    .post((req, res) => {
        const weight = parseFloat(req.body.weight);
        const height = parseFloat(req.body.height);
        const gender = req.body.gender;
        
        const bmi = weight / Math.pow(height, 2);
        const bmiPrime = bmi / 25;

        let resultMessage;

        if (bmiPrime < 0.74) {
            resultMessage = 'Underweight';
        } else if (bmiPrime >= 0.74 && bmiPrime <= 1) {
            resultMessage = 'Normal';
        } else if (bmiPrime > 1 && bmiPrime <= 1.2) {
            resultMessage = 'Overweight';
        } else {
            resultMessage = 'Obese';
        }

        const output = {
            bmi: bmi.toFixed(2),
            bmiPrime: bmiPrime.toFixed(2),
            result: resultMessage
        };

        res.json(output);
    });

module.exports = router;
