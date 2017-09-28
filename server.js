var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;
console.log("port" + port);

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

// app.listen(port);

app.listen(port, function(err) {
    if (err) {
        console.error("MySQL connection error: " + err.stack);
        return;
    }
    console.log('App listening on PORT ' + port);
})
// app.listen(process.env.PORT || 3306);

//pp.use(express.static("public"));

//new code

// var express = require ('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

// var app = express();
// var PORT = process.env.PORT;

// app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({extended: false}));
// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// var routes = require('./controllers/burgers_controllers.js');
// app.use('/', routes);


// app.listen(PORT, function(){
// 	console.log('App listening on PORT ' + PORT);
// })

// //new code

// var express = require('express');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');


// var app = express();

// app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// var routes = require('./controllers/burgers_controller.js');
// app.use('/', routes);


// app.listen(process.env.PORT || 3000);