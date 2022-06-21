const express = require("express");
const router = express.Router();
const { secureLogics } = require("../logics");

router.post("/encrypt", (req, res) => {
  secureLogics
    .encrypt(req.files, req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err.message));
});

// router.post("/login", (req, res) => {
//   userLogics
//     .login(req.body)
//     .then((data) => res.status(200).send(data))
//     .catch((err) => res.status(400).send(err.message));
// });

module.exports = router;
