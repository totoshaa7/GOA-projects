let el = document.getElementById("myId");
el.style.color = "red";


let items = document.getElementsByClassName("myClass");
items[0].innerText = "Updated text";

let paragraphs = document.getElementsByTagName("p");
paragraphs[1].style.fontWeight = "bold";

document.getElementById("box").innerHTML = "<b>Hello</b>";

document.getElementById("box").innerText = "<b>Hello</b>";

document.getElementById("box").style.backgroundColor = "blue";
document.getElementById("box").style.fontSize = "20px";
