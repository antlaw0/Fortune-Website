var express = require('express');
var
fortunes
=
[
"Conquer your fears or they will conquer you."
,
"Rivers need springs."
,
"Do not fear what you don't know."
,
"You will have a pleasant surprise."
,
"Whenever possible, keep it simple."
,
];

var exp_hbs = require('express-handlebars');
var path = require('path');
var routes = require('./routes/index');
var about = require('./routes/about');

var app = express();

app.engine('.hbs', exp_hbs({
  extname:'.hbs',
  defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes);
app.use('/about', about);

app.listen(process.env.PORT || 3000, function(){
  console.log('Currency app running on port 3000');
})

module.exports = app;
