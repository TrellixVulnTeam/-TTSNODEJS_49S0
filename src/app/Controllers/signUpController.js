const mongoose = require('mongoose');
const TaiKhoan = require('../models/TaiKhoan');


class signUpController{
        //[GET]/
        viewSignUp(req,res,next){
            res.render('ManagerAction/signup')
        }

        //[POST]/SubmitSignup
        createAccount(req,res,next){
            TaiKhoan.findOne({userName :req.body.userName})
            .then(function(tk){
                if(tk){
                    res.send('<script>alert("Tai khoan da ton tai")</script>')
                }
                else
                {
                    const tk = new TaiKhoan(req.body);
                    tk
                      .save()
                      .then(()=>res.render('ManagerAction/signUpSC'))
                      .catch(next);
                }
            })
            .catch(next)           
        }
}


module.exports = new signUpController();