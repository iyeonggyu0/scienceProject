const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const router = express.Router();
const { decryptFun, encryptFun } = require("../util/crypto");
const multer = require("multer");
const fs = require("fs");

const { User, Product, ShoppingBag, ProductImg } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.get("/get", async (res, req) => {
  try {
  } catch (err) {}
});

module.exports = router;
