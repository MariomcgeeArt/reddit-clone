// Require Libraries
const express = require('express');

// App Setup
const app = express();
const port = 3000

// Middleware
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars');

const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.engine('handlebars', exphbs({ defaultLayout: 'layout', handlebars: allowInsecurePrototypeAccess(Handlebars) }))


app.set('view engine', 'handlebars');

// Routes

// Start Server


app.get('/', (req, res) => {
    
    res.render('layouts/layout')
  })

app.listen(3000, () => {
  console.log('helloworld!');
});

