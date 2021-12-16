const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    title: "色を混ぜる",
    content: "2つのカラーコードを送信する",
  };

  res.render("form", data);
});

router.post("/post", (req, res) => {
  const color1 = '0x' + req.body.color1;
  const color2 = '0x' + req.body.color2;
  var red1 =  color1 >> 16;
  var green1 =  color1 >> 8 & 0xff;
  var blue1 = color1 & 0xff;
  console.log(red1);
  console.log(green1);
  console.log(blue1);
  var red2 =  color2 >> 16;
  var green2 =  color2 >> 8 & 0xff;
  var blue2 = color2 & 0xff;
  console.log(red2);
  console.log(green2);
  console.log(blue2);
  var redm =  Math.floor((red1 + red2) / 2);
  var greenm =  Math.floor((green1 + green2) / 2);
  var bluem = Math.floor((blue1 + blue2) / 2);
  redm = parseInt('0x' + ('00' + redm.toString(16)).slice(-2),16);
  greenm = parseInt('0x' + ('00' + greenm.toString(16)).slice(-2),16);
  bluem = parseInt('0x' + ('00' + bluem.toString(16)).slice(-2),16);
  console.log(redm);
  console.log(greenm);
  console.log(bluem);
  var mixed = (redm << 16) + (greenm << 8) + bluem; 
  console.log(mixed.toString(16));
  const data = {
    title: "フォーム送信",
    color1:"#" + req.body.color1,
    color2:"#" + req.body.color2,
    mixed: "#" + mixed.toString(16),
    content: "「 " + color1 +"/"+ color2 +" 」",
  };

  res.render("form_result", data);
});

module.exports = router;