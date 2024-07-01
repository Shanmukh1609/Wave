import users from '../models/db.js'
import bcrypt from 'bcrypt'
import exp from 'constants'
import jwt from 'jsonwebtoken'

class UserReg{
    static userRegistration = async (req,res) => {
        console.log("ENtered")
        const {name,email,password,password_confirmation,tick}=req.body
        console.log(req.body)
        const user= await users.findOne({'email':email});

      
        if(user){
            res.send({"status":"failed","message":"Email already Exists"})
        }
        else{
            console.log(name,email,password,password_confirmation);
            if(name&&email&&password&&password_confirmation){
                console.log("Sahrwtki")
                try{
                   
                    const salt= await bcrypt.genSalt(12)
                    
                    const hashPassword = await bcrypt.hash(password,salt)
                    
                    const doc =  new users({
                        name:name,
                        email:email,
                        password:hashPassword})
                        console.log("jg")
                    await doc.save();
                    return res.send("Registered")
                }
                catch(error){
                res.send({"status":"failed","message":"Unable to register"})
                }
            }
            else if(password!=password_confirmation){
                res.send({"status":"failed","message":"Passwords donot match"})
            }
            else{
                res.send({"status":"failed","message":"All fields are required"})
            }
        }

    }

    static userLogin= async (req,res)=>{
      try{
        const {email,password}= req.body;
        if(email&&password){
            const user= await users.findOne({"email":email})
            if(user!=null){
             const isMatch= await bcrypt.compare(password,user.password)
             if(user.email==email && isMatch){
                res.send("Logged In successfully")
             } 
             else{
                res.send({"status":"failed","message":"Incorrect Password"})
             }
            }
            else{
                res.send({"status":"failed","message":"Invalid Email"})
            }
        }
        else{
            res.send({"status":"failed","message":"All fields are required"})
        }
      }
      catch(error){
        console.log(error)
      }
    }
}


export default UserReg

