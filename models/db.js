import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Library");

const user= mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true}
});


var users=  mongoose.model("user",user);

export default users;





