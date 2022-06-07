const mongoose = require('mongoose');
const TaiKhoan = require('../models/TaiKhoan');

class loginControllers{

    //[GET]/
    Viewlogin(req,res,next){
        res.render('ManagerAction/login');
    }

    //[POST]/login
    login(req,res,next)
    {
        TaiKhoan.findOne({userName: req.body.userName,password: req.body.password})
                .then((tk)=>
                    {
                        if(!tk)
                        {
                            res.send('<script>alert("Sai tk hoac mk")</script>')
                        }
                        else{
                            if(tk.permission == 'admin')
                            {
                                TaiKhoan.find({})
                                .lean()
                                .then((allTK)=>res.render('home',{allTK}))
                                .catch(next)

                                
                            }
                            else
                            {
                                res.send('Chào mừng bạn đến web site của chúng tôi!')
                            }
                        }
                    }
                )
                .catch(next)
    }
}

module.exports = new loginControllers();