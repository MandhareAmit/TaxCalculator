const express = require('express');
const router = express.Router();

// get request for home page
router.get('/', (req, res) => {
    const num = 10;
    const value = 10;
    res.render('home.ejs', {v: value}); 
     

})

// post request for getting gross income and calculating tax and net income
router.post('/', (req, res) => {    
    const gIncome = req.body.gIncome;    // getting gross salary from request body
   //variables for tax net income and tax rate
    var tax;
    var netIncome;
    var taxRate;
    
// conditions for calculating tax and net income
    if(gIncome<= 150000)        // gross income is less than 150000
    {         
        taxRate = 0.0;
        tax = gIncome*(0/100);
        netIncome =  gIncome;
    }
    else if(gIncome > 150000 && gIncome <= 300000)    // gross income is greater than 150000 to 300000
    {
        taxRate = 2.5;
        tax = gIncome*(2.5/100);
        netIncome =  gIncome-tax;
    }
    else if(gIncome > 300000 && gIncome <= 800000)  // gross income is greater than 300000 to 800000
    {
        taxRate = 10;
        tax = gIncome*(10/100);
        netIncome =  gIncome-tax;
    }
    else if(gIncome > 800000 && gIncome <= 10000000)    // gross income is greater than 800000 to 10000000
    {
        taxRate = 25;
         tax = gIncome*(25/100);
        netIncome = gIncome-tax;
    }
    else if(gIncome > 10000000)     // gross income is grater than 10000000
    {
        taxRate = 30;
        tax = gIncome*(30/100);
        netIncome = gIncome-tax;
    }
   
    
    // sending tax , net income gross income and tax rate to view
    res.render('result.ejs', {tax, netIncome, gIncome, taxRate } );
}) 



module.exports = router;
