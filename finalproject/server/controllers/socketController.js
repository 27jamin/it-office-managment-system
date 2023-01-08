

const authorizeUser = require("./socket.io/authorizeUser");
const initializeUser = require("./socket.io/initializeUser");
const addFriend = require("./socket.io/addFriend");
const onDisconnect = require("./socket.io/onDisconnect");
const dm = require("./socket.io/dm");

module.exports = {
  addFriend,
  authorizeUser,
  initializeUser,
  onDisconnect,
  dm,
};








