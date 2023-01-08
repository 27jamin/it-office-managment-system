const pool = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSign } = require("../jwt/jwtAuth");
require("dotenv").config();


const attemptLogin = async (req,res) => {
      
    const potentialLogin  = await pool.query(
        "SELECT id, username, passhash, userid FROM users u WHERE u.username=$1", 
        [req.body.username]
    );
    
    if(potentialLogin.rowCount > 0){

        const isSamePass = await bcrypt.compare(
            req.body.password,
            potentialLogin.rows[0].passhash,
        );
        if(isSamePass){
            //login
            jwtSign(
                {
                    username: req.body.username,
                    id: potentialLogin.rows[0].id,
                    userid: potentialLogin.rows[0].userid,
                },
                process.env.JWT_SECRET,
                { expiresIn: "10min" }
            ).then(token => {
                res.json({ loggedIn: true, token });
            }).catch(err => {
                console.log(err);
                res.json({ loggedIn: false, status: "try again later" });
            });
        }else{
            //not good login
            res.json({ loggedIn: false , status : "wrong username or password" });
        }
    } else{
        res.json({ loggedIn: false , status : "wrong username or password" });
    }
}

module.exports = attemptLogin;