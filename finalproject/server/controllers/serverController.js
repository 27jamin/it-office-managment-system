//we are doing this for socket io and express session to use together

//require("dotenv").config();

const corsConfig = {
    origin : "http://localhost:3000",
    credentials:true,
};

module.exports =  { corsConfig };