const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaiKhoan = new Schema(
    { 
        userName: {type: String , maxlength :100,required:true},
        password: {type: String, maxlength: 100},
        permission: {type: String, maxlength: 100}  
    }
);


module.exports = mongoose.model('taikhoan',TaiKhoan);