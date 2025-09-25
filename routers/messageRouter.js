const { Router } = require("express");

const { messages } = require("./indexRouter");

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  const id = req.params.id - 1;
  const message = messages[id];
  res.render("message", { message: message });
});

module.exports = messageRouter;
