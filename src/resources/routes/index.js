const login = require('../routes/login');

function route(app){




    //login
    app.use('/todoapp', login);
}

module.exports = route;