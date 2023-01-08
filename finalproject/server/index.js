//node index.js to run the server file without other application and only node 
//ioredis let you connect redis to node js
//connect redis to connect redis to express session
//redisclient to communticate with the redis server
//uuid it is a libary that let as compute unique id
//import { Server } from "socket.io";

const express = require("express");
const { corsConfig } = require("./controllers/serverController");
const { Server } = require("socket.io");
const app = express();
const { default: helmet } = require("helmet");
const cors  = require("cors");
const AuthRouter = require("./routers/AuthRouter");
const { authorizeUser, initializeUser, addFriend, onDisconnect, dm } = require("./controllers/socketController");
const redisClient = require("./redis");
const pool = require("./db");

const server = require("http").createServer(app);

const io = new Server(server,{
  cors: corsConfig, 
  //maxHttpBufferSize: 1e8,
  //pingTimeout: 7000,
});
 

app.use(helmet());
app.use(cors( corsConfig ));
app.use(express.json());
app.use("/auth", AuthRouter );
app.set("trust proxy", 1);

io.use(authorizeUser);
//connection
io.on("connect", socket => {//"connect"

  //console.log(err);
  //console.log("user connect: " + socket.id);
  initializeUser(socket);
  
  socket.on("add_friend", (friendName, cb) => {
    addFriend(socket, friendName, cb);
  });

  socket.on("dm", message => dm ( socket, message ));

  socket.on("disconnecting", () => onDisconnect(socket));

});

server.listen(4000, () => {

  console.log("server listening on port 4000");

});

// server.listen(process.env.PORT || 4000, () => {
//   console.log("Server listening on port " + (process.env.PORT || "4000"));
// });

const resetEverythingInterval = 1000 * 60 * 15; // 15 minutes

setInterval(() => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  pool.query("DELETE FROM users u where u.username != $1", ["pjamin"]);
  redisClient.flushall();
}, resetEverythingInterval);

