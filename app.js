// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

// internal exports

const {
  notFoundhandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const app = express();

dotenv.config();

// DATABASE Connection

mongoose
  .connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connection Succesful!");
  })
  .catch((err) => console.log(err));

// Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//View engines
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found error
app.use(notFoundhandler);

// common error handler

app.use(errorHandler);

// listen
app.listen(process.env.PORT, () => {
  console.log(`app is running to ${process.env.PORT}`);
});
