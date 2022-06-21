const express = require("express");
const router = express.Router();
const { userLogics } = require("../logics");

router.post("/signup", (req, res) => {
  userLogics
    .signup(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err.message));
});

router.post("/login", (req, res) => {
  userLogics
    .login(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err.message));
});

module.exports = router;
