"use strict"

//nav

//CMS
//data
var articlejson = [
  {
    "title": "FÜR JEDES PROBLEM",
    "img": "images/Olympiawerk_Logotype_4C_FNL.png",
    "blurb":
    "„Seit 1995 bin ich im Olympiadorf tätig. Der Beginn war eine Empfehlung des Amtes für Denkmalschutz. Zu Beginn des Jahres 2016 habe ich mich gemeinsam mit meiner Frau dazu entschlossen, einen Service-Laden – das Olympiawerk – zu eröffnen. Viele Ideen der Olympiadorf-Bewohner flossen mit ein. Wir arbeiten nach dem Motto: Wer gut bleiben will, muss besser werden."
  },
  {
    "title": "JEDES PROBLEM",
    "img": "images/treffer_logotype.jpg",
    "blurb":
    "„Seit 1995 bin ich im Olympiadorf tätig. Der Beginn war eine Empfehlung des Amtes für Denkmalschutz. Zu Beginn des Jahres 2016 habe ich mich gemeinsam mit meiner Frau dazu entschlossen, einen Service-Laden – das Olympiawerk – zu eröffnen. Viele Ideen der Olympiadorf-Bewohner flossen mit ein. Wir arbeiten nach dem Motto: Wer gut bleiben will, muss besser werden."
  }
];
//middleware
//example 1
// function article() {
//   // return
//     var title = articlejson[0].title;
//     var img = articlejson[0].img;
//     var blurb = articlejson[0].blurb;
//
//     $(".title").html(title);
//     $("img").attr({"src":img,"width":"200px"});
//     $(".blurb").html(blurb);
//
//     // console.log(articlejson[0].blurb);
// }
// article();

// example 2
// function article2(title,img,blurb) {
//   return title,img,blurb;
// }
// article2.title = articlejson[1].title;
// article2.img = articlejson[1].img;
// article2.blurb = articlejson[1].blurb;
//
// $(".title").html(article2.title);
// $("img").attr({"src":article2.img,"width":"200px"});
// $(".blurb").html(article2.blurb);

//example 3
function articles(title,img,blurb) {
  return title,img,blurb;
}

var article1 = new articles();

for(var i=0; i<articlejson.length; i++) {
  article1.title = articlejson[i].title || "No Title";
  article1.img = articlejson[i].img  || "images/Olympiawerk_Logotype_4C_FNL.png";
  article1.blurb = articlejson[i].blurb;

  $(".title").html(article1.title);
  $("img").attr({"src":article1.img,"width":"200px"});
  $(".blurb").html(article1.blurb);
}


//example 4
function mean(a,b,c) {
  if(arguments.length < 3) {
      return "Give me parameters";
  } else if(arguments.length > 3) {
      return "Too many parameters";
  } else {
      return (a+b+c)/2;
  }
  // console.log(x*x);
}
// console.log(mean(1,2,3));

//example 5
// function discount(price,amount,callback) {
//   if(amount === undefined) amount = 10;
//   return price * (100-amount)/100;
// }
// console.log(discount(20);

//example 6
// var b = 10;
// function localb() {
//   var b = 20;
//   console.log("Localb is" + " " + b);
// };
// localb();
// console.log("globalb is" + " " + b);

var numbers = [1,3,12,5,23,18,7];

var numSort = function (a,b) {
  return a-b;
}

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i].sort(numSort)); n
}
