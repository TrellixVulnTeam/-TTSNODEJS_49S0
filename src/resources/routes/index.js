const login = require('../routes/login');
const signup = require('../routes/signup')

function route(app){


    //signup
    app.use('/todoapp/signup',signup)
    //start
    app.use('/todoapp', login);
    
}

module.exports = route;