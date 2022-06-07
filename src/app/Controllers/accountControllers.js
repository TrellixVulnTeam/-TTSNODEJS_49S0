const { render } = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const TaiKhoan = require("../models/TaiKhoan");


class accountControllers{
        //[GET]/:id/edit
        edit(req,res,next){
            TaiKhoan.findById(req.params.id).lean()
                    .then((tk)=>res.render('account/editAccount',tk))
                    .catch(next)
        }

        //[POST]/:id/editaccount
        editAccount(req,res,next){
                if(req.body.newPassword == "")
                {
                        TaiKhoan.find({}).lean()
                                .then((allTK)=>res.render('home',{allTK}))
                                .catch(next)
                }else
                {
                        TaiKhoan.updateOne({_id: req.params.id},{password:req.body.newPassword})
                        .then(function(){
                                TaiKhoan.find({}).lean()
                                .then((allTK)=>res.render('home',{allTK}))
                                .catch(next)
                        })
                        .catch(next)
                }
        }


        //[GET]/:id/destroy
        destroy(req,res,next){
                TaiKhoan.findOneAndDelete({_id: req.params.id})
                        .then(()=>res.send('<script>alert("Xoa thanh cong!")</script>'))
                        .catch(next)
        }
}

module.exports = new accountControllers();