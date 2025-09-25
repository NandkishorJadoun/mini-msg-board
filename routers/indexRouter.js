const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

let msgCount = messages.length + 1;

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    id: msgCount++,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = { indexRouter, messages };
