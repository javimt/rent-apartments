const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const { connection } = require("./db");
const router = require("./src/routes/index");

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT;

const server = express();
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(
  session({ secret: JWT_SECRET, resave: true, saveUninitialized: true })
);
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

server.use("/", router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).json({ status: "error", message });
  next();
});

connection
  .sync({ force: false })
  .then(() => console.info(`the server is listen in port ${PORT}`))
  .catch((error) => console.error("Database connection error:", error));
  
server.listen(PORT);
