//importing express and other deppendencies and routes
const express = require('express');
const app = express();
const path = require('path');
const route = require('./route');
const ejs = require('ejs');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// view path setting
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, './views')));
app.set('view engine', 'ejs');

// routes
app.use('/home', route);


// server listning 
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
