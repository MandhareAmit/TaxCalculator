const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const num = 10;
    const value = 10;
    res.render('home.ejs', {v: value}); 
     

})


router.post('/', (req, res) => {    
    const gIncome = req.body.gIncome;
    var tax;
    var netIncome;
    var taxRate;

    if(gIncome<= 150000)
    {         
        taxRate = 0.0;
        tax = gIncome*(0/100);
        netIncome =  gIncome;
    }
    else if(gIncome > 150000 && gIncome <= 300000)
    {
        taxRate = 2.5;
        tax = gIncome*(2.5/100);
        netIncome =  gIncome-tax;
    }
    else if(gIncome > 300000 && gIncome <= 800000)
    {
        taxRate = 10;
        tax = gIncome*(10/100);
        netIncome =  gIncome-tax;
    }
    else if(gIncome > 800000 && gIncome <= 10000000)
    {
        taxRate = 25;
         tax = gIncome*(25/100);
        netIncome = gIncome-tax;
    }
    else if(gIncome > 10000000)
    {
        taxRate = 30;
        tax = gIncome*(30/100);
        netIncome = gIncome-tax;
    }
   
    
    
    res.render('result.ejs', {tax, netIncome, gIncome, taxRate } );
}) 



module.exports = router;