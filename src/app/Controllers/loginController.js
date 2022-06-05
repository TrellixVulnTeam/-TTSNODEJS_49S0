const mongoose = require('mongoose');
const TaiKhoan = require('../models/TaiKhoan');

class loginControllers{

    //[GET]/
    Viewlogin(req,res,next){
        res.render('login');
        // TaiKhoan.find({})
        // .then((tk)=>
        //     res.json(tk)
        // )
        // .catch(next);
    }

    login(req,res,next){
        TaiKhoan.findOne({userName: req.body.userName,password: req.body.password})
                .then((tk)=>
                    {
                        if(tk)
                        {
                            res.json(tk)
                        }
                        else{
                            res.json({Ktra: "Dang Nhap Khong Thanh Cong"})
                        }
                    }
                )
                .catch(next)
    }
}

module.exports = new loginControllers();