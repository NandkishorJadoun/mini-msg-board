const db = require("../db/queries");

async function getUserMessage(req, res) {
  const id = req.params.id;
  const message = await db.getMessageById(id);
  res.render("message", { message: message[0] });
}

module.exports = { getUserMessage };
