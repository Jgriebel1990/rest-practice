const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/comments/index", (req, res) => {
  res.send("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comments = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
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
