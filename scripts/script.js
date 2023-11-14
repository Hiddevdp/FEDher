// JavaScript Document

var Button = document.querySelector("header > button:nth-of-type(2)");
var Link = document.querySelector("nav > ul > li");

Button.onclick = slide;
Link.onclick = slide;

function slide() {
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("slide");

  var span1 = document.querySelector(
    "header > button:nth-of-type(2) > span:nth-of-type(1)"
  );
  span1.classList.toggle("span1");

  var span2 = document.querySelector(
    "header > button:nth-of-type(2) > span:nth-of-type(2)"
  );
  span2.classList.toggle("span2");

  var span3 = document.querySelector(
    "header > button:nth-of-type(2) > span:nth-of-type(3)"
  );
  span3.classList.toggle("span3");
}
