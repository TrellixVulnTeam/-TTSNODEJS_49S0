const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('../src/resources/routes/index');
const db = require('../src/config/db/index');
const app = express();
const port = 3000;

//connect db
db.connect();

//middleware
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname,"public")));

//template handlears
const hbs = handlebars.create({
  extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
