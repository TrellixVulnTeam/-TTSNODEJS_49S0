const login = require('../routes/login');
const signup = require('../routes/signup');
const account = require('../routes/account');

function route(app){

    //ED-account
    app.use('/todoapp/account', account)

    //signup
    app.use('/todoapp/signup',signup)

    //start
    app.use('/todoapp', login);
    
}

module.exports = route;