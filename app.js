const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoConnect = require("./util/database").mongoConnect;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

mongoConnect(() => {
  app.listen(3030);
});
