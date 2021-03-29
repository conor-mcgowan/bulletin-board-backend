require("dotenv").config();
const passport = require("./config/passport.conf");
const express = require("express");
const app = express();
const session = require("express-session");
const userRoutes = require("./routes/user.routes");
const jobRoutes = require("./routes/job.routes");

const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/build"));
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", userRoutes);
app.use("/jobs", todoRoutes);

app.get("*", (req, res) => {
  res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log(`The doors are open on port: ${PORT}`));
