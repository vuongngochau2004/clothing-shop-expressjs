const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const homeRouter = require('./home.router');

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/", homeRouter);

module.exports = router;

