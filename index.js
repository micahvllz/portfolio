const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
