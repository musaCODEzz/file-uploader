
const express = require('express');
const app = express();
const path = require('path');
var hbs = require('express-handlebars');


app.use(express.json());

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('view engine','hbs');
app.engine('hbs',hbs.engine({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir:path.join(__dirname, 'views'),
    partialsDir:path.join(__dirname, 'views/partials')
}))











require('./server/database/database')();






// calling routes
app.use('/',require('./server/router/router'))



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
