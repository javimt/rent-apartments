const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connection } = require("./db");
const router = require("./src/routes/index");
const cron = require("node-cron");
const { checkExpiredRents } = require("./src/controllers/rentExpiration");
const { resSender} = require('./src/helpers/resSender');
const { captureRes } = require("./src/helpers/midlewareRes");

const port = process.env.PORT || 3000

cron.schedule("0 12 * * *", () => {
  console.log("Verifying expired rentals...");
  checkExpiredRents();
});

const sendResponse = (req, res, next) => {
  res.resSender = resSender
  next();
};

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(captureRes);

app.use("/", router);

//manejo de errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).json({ status, message });
  next();
});

connection
  .sync({ force: false })
  .then((response) => console.info("the postgreSQL Db is connected"))
  .then(() =>
    app.listen(port, console.info(`Server is listening on port ${port}`))
  )
  .catch((error) => {
    console.error(console.error("Error starting the server:", error));
  });

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
