
import express from 'express'
import path from "path"
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';

var app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

import users from './models/db.js'

app.get("/",function(req,res){
    return res.send("This is the Home page")
})

app.get("/login_page",function(req,res){
    return res.render('login_reg')
})

import UserReg from "./controllers/users.js"

app.post("/register",UserReg.userRegistration);

app.post("/login_in",UserReg.userLogin);


app.listen(3000)