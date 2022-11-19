var express = require("express");
var router = express.Router();
var path = require("path");
const db = require("../firebase/firebase.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  // res.render('index', { title: 'Express' }); // 기존 파일
});

router.get("/mypage", async function (req, res, next) {
  // var test = await db.collection("products").doc("6b5984cVlhWsmQxhPQxb").get();
  // console.log(test);
});

module.exports = router;
