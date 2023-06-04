const {  create, getOne, deleteOne, update, getAll } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
  .get(getAll)
  .post(create)

userRouter.route("/:id")
  .get(getOne)
  .put(update)
  .delete(deleteOne)

module.exports = userRouter;