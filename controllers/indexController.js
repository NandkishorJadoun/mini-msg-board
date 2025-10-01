const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { title: "Mini Message Board", messages: messages });
}

function createMessageGet(req, res) {
  res.render("form");
}

async function createMessagePost(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  await db.insertMessage(messageText, messageUser, new Date());
  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
