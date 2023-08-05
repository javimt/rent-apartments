const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes/index");
const { connection } = require("./db");
const PORT = process.env.PORT;

const server = express();
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/", router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).json({ status: "error", message });
  next();
});

server.listen(
  PORT,
  connection
    .sync({ force: true })
    .then(() =>
      console.info(
        `the server is listen in port ${PORT}`
      )
    )
);
