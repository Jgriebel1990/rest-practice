const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comment = [
  {
    id: uuid(),
    username: "Ab",
    comment: " doooooodsa",
  },
  {
    id: uuid(),
    username: "Booba",
    comment: "gloooooooork",
  },
  {
    id: uuid(),
    username: "yooutube",
    comment: "commentns",
  },
  {
    id: uuid(),
    username: "hahaha thats ufnn",
    comment: " troe aikerman",
  },
];

app.get("/comments", (req, res) => {
  res.render("/comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("/comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comments = comments.find((c) => c.id === id);
  res.render("/comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const comment = comments.find((c) => c.id === id);
  res.render("/comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  res.send("POST /tacos response");
});

app.listen(3000, () => {
  console.log("ON PORT 3000");
});
