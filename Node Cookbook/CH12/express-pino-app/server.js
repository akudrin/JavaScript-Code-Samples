const express = require("express");
const pino = require("pino")();
const logger = require("express-pino-logger")({
  instance: pino,
});
const app = express();
app.use(logger);
const PORT = 3000;
app.get("/", (req, res) => {
  req.log.info("Generating random number");
  const randomNumber = getRandomNumber();
  res.send(`${randomNumber}`);
});
app.listen(PORT, () =>
  pino.info(`Server
listening on port ${PORT}`)
);
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
