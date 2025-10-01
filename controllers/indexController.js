const messages = require("../db/messages");

let msgCount = messages.length + 1;

function getMessages(req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
}

function createMessageGet(req, res) {
  res.render("form");
}

function createMessagePost(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    id: msgCount++,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
