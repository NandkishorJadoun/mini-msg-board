const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 15 characters.";
const emptyErr = "must not be empty.";

const validateMessage = [
  body("messageUser")
    .notEmpty()
    .withMessage(`Name ${emptyErr}`)
    .isAlpha()
    .withMessage(`Name ${alphaErr}`)
    .isLength({ min: 1, max: 15 })
    .withMessage(`Name ${lengthErr}`),

  body("messageText")
    .trim()
    .notEmpty()
    .withMessage(`Message ${emptyErr}`)
    .isLength({ max: 300 })
    .withMessage("Maximum character limit of message is 300"),
];

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { title: "Mini Message Board", messages: messages });
}

function createMessageGet(req, res) {
  res.render("form");
}

const createMessagePost = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }

    const { messageText, messageUser } = req.body;
    await db.insertMessage(messageText, messageUser, new Date());
    res.redirect("/");
  },
];

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
