const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send("GET REGISTER /register");
});

/* POST /register */
router.post("/register", (req, res, next) => {
  res.send("POST REGISTER /register");
});

/* GET /login */
router.get("/login", (req, res, next) => {
  res.send("GET LOGIN /login");
});

/* POST /login */
router.post("/login", (req, res, next) => {
  res.send("POST LOGIN /login");
});

/* GET /profile */
router.get("/profile", (req, res, next) => {
  res.send("GET PROFILE /profile");
});

/* PUT /profile/:user_id */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT PROFILE /profile/:user_id");
});

/* GET /forgot-password */
router.get("/forgot", (req, res, next) => {
  res.send("GET FORGOT /forgot");
});

/* PUT /forgot */
router.put("/forgot", (req, res, next) => {
  res.send("PUT FORGOT /forgot");
});

/* GET /reset-password */
router.get("/reset/:token", (req, res, next) => {
  res.send("GET RESET /reset/:token");
});

/* PUT reset-password */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT RESET reset/:token");
});



module.exports = router;