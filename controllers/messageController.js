const messages = require("../db/messages");

function getUserMessage(req, res){
  const id = req.params.id - 1;
  const message = messages[id];
  res.render("message", { message: message });
}

module.exports = {getUserMessage}