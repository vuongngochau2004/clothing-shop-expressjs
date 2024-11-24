const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const adminRouter = require('./src/routes/admin/index.router');
const webRouter = require("./src/routes/web/index.router");

const port = 3000;

const systemConfig = require("./src/configs/system");
const db = require("./src/configs/database");

const expressLayouts = require("express-ejs-layouts");

const app = express();

// Connect to DB
db.connect();

// view engine setup
app.set("views", path.join(__dirname, "src/resources/views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Đảm bảo rằng bạn đã cấu hình middleware này
app.use(express.static(path.join(__dirname, "src/public")));

app.locals.systemConfig = systemConfig;

// Middleware to set layout for admin
app.use(`/${systemConfig.prefixAdmin}`, (req, res, next) => {
  app.set("layout", "admin"); // Set layout for admin
  next();
}, adminRouter);

// Middleware to set layout for web
app.use("/", (req, res, next) => {
  app.set("layout", "web"); // Set layout for web
  next();
}, webRouter);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).render('errors/404', { pageTitle: '404' ,layout: false });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
