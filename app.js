const path = require("node:path");
const express = require("express");
const { indexRouter } = require("./routers/indexRouter");
const messageRouter = require("./routers/messageRouter");

const app = express();

const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/message", messageRouter);

app.get("/{*splat}", (req, res) => {
  res.status(404).render("error");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
