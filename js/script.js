console.log("Image array" + document.images);
console.log("Links array" + document.links);

function menu(el) {
  console.log("User follow the " + el.innerHTML);
}

function thanks(el) {
  var email = el.email.value,
    message = el.message.value,
    fail = "";
  if (email == "" || message == "") {
    fail = "Заполните все поля";
  } else if (email.length <= 3 || !email.includes("@")) {
    fail = "Введите корректный адрес электронной почты";
  }
  if (fail != "") {
    document.getElementById("fill_error").innerHTML = fail;
    return false;
  }
  console.log("Data is correct");
  alert("Спасибо за ваше сообщение");
  return true;
}
const imgLinks = [
  "images/лимон.png",
  "images/морковка.png",
  "images/овощи.png",
  "images/помидор.png",
  "images/баклажаны.png",
];
const delay = 2000;
let currentIndex = 0;
setInterval(() => {
  document.getElementById("im_header").src = imgLinks[currentIndex];
  currentIndex++;
  if (currentIndex >= imgLinks.length) {
    currentIndex = 0;
  }
}, delay);

var formrow6 = document.getElementById("formrow6");
formrow6.style.display = "none";
var formrow7 = document.getElementById("formrow7");
formrow7.style.display = "none";

document.getElementById("formrow5").addEventListener("change", function () {
  addIng(formrow6);
});

formrow6.addEventListener("change", function () {
  addIng(formrow7);
});

function addIng(id) {
  id.style.display = "flex";
}

ings = [];
qus = [];
measures = [];
title = [];
steps = [];
function parse_form() {
  title[0] = document.getElementById("name").value;
  steps[0] = document.getElementById("receipt").value;
  for (let i = 1; i <= 7; i++) {
    if (document.getElementById("ing" + String(i)).value != "") {
      ings[i - 1] = document.getElementById("ing" + String(i)).value;
    }
  }
  for (let i = 1; i <= ings.length; i++) {
    qus[i - 1] = document.getElementById("qu" + String(i)).value;
  }
  for (let i = 1; i <= ings.length; i++) {
    measures[i - 1] = document.getElementById("meas" + String(i)).value;
  }
  var fail = "";
  if (title == "") {
    fail = "Напишите название вашего рецепта";
  } else if (ings[0] == "" || ings[1] == "") {
    fail = "Заполните поля Ингредиенты";
  } else if (qus[0] == "" || qus[1] == "") {
    fail = "Заполните поля Количество";
  } else if (steps == "") {
    fail = "Напишите пошаговый рецепт";
  }
  if (fail != "") {
    alert(fail);
    return false;
  }
  console.log("Data is correct");
  alert("Спасибо за новый рецепт!");
  return false;
}
console.log(ings);
console.log(qus);
console.log(measures);
console.log(title);
console.log(steps);

var r = { title: "", ings: [], qus: [], measures: [], steps: "" };
r["title"] = "Плов";

class Receipt {
  constructor(title, ings, qus, measures, steps) {
    this.title = title;
    this.ings = ings;
    this.qus = qus;
    this.measures = measures;
    this.steps = steps;
  }
  count(n) {
    var res = "";
    for (let i = 0; i < this.qus.length; i++) {
      qus[i] = qus[i] * n;
    }
    for (let i = 0; i < this.qus.length; i++) {
      res =
        res +
        this.ings[i] +
        " " +
        this.qus[i] +
        " " +
        this.measures[i] +
        "<br />";
    }
    document.getElementById("res").innerHTML = res;
  }
}
var newReceipt = new Receipt(title, ings, qus, measures, steps);
console.log(newReceipt);

Array.prototype.average = function () {
  sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};
arr = new Array(1, 2, 3);
console.log(arr.average());

btnsbm = document.getElementById("btnsbm");
btnsbm.style.background = "rgb(172, 0, 172, 0.1)";
btnsbm.style.border = "none";

document.getElementById("receipt").addEventListener("change", function () {
  btnsbm.style.background = "rgb(172, 0, 172, 1)";
});

/*var parent = document.getElementById("Оладьи");
var newim = document.createElement("img");
newim.src = "images/оладьи2.jpeg";
newim.width = "500";
newim.height = "335";
oldim = document.getElementById("pct_pancakes");
parent.addEventListener("mouseover", carouselon);
parent.addEventListener("mouseout", carouseloff);

function carouselon() {
  parent.replaceChild(newim, oldim);
}

function carouseloff() {
  parent.replaceChild(oldim, newim);
}*/
