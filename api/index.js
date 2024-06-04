const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connection } = require("./db");
const router = require("./src/routes/index");
const cron = require("node-cron");
const { checkExpiredRents } = require("./src/helpers/rentExpiration");
const { resSender} = require('./src/helpers/resSender');
const { captureRes } = require("./src/helpers/midlewareRes");
const { sendReminderEmails } = require("./src/helpers/sendEmails");
const { sendMailPending } = require("./src/controllers/anotationsController");

const port = process.env.PORT || 3000

cron.schedule("0 12 * * *", () => {
  console.log("Verifying expired rentals...");
  checkExpiredRents();
});

cron.schedule("0 0 * * *", () => {
  console.log("Verifying expired rentals...");
  checkExpiredRents();
});

cron.schedule('0 12 * * *', () => {
  console.log('Ejecutando tarea cron para enviar correos electrónicos de recordatorio...');
  sendReminderEmails();
});

cron.schedule('0 0 * * *', () => {
  console.log('Ejecutando tarea cron para enviar correos electrónicos de recordatorio...');
  sendReminderEmails();
});

cron.schedule('0 12 * * *', () => {
  console.log('Ejecutando tarea cron para enviar correos electrónicos de pendientes...');
  sendMailPending();
});

const sendResponse = (req, res, next) => {
  res.resSender = resSender
  next();
};

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(captureRes);

app.use("/", router);

/* app.get('/', (req, res) => {
 res.status(200).json({
    welcome: "WELCOME TO MEDELLIN FURNISHED APARTMENTS",
    apartment: "https://api-rent-appartament.up.railway.app/apartment",
    user: "https://api-rent-appartament.up.railway.app/user",
    city: "https://api-rent-appartament.up.railway.app/city",
  });
}); */

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
