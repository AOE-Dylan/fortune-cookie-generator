console.log("Hello, how are you?");

function generateFortuneCookie() {
  document.getElementById('fortune-cookie-text').style.display = "block";
  var begin = ["You will meet a ", "You might run into a ", "Out of nowhere, a "];
  var people = ["handsome superhero ", "billionaire", "famous movie star"];
  var action = ["will deliver an important message", " will need your help", "will want to give you special stuff"];
  document.createElement("div#read") = begin[Math.floor(Math.random() * begin.length)] + people[Math.floor(Math.random() * people.length)] + " " + action[Math.floor(Math.random() * action.length)] + " !";
}



function previousFortunes(a) {
    var block = document.createTextNode(a);
    pre.appendChild(block);
    document.getElementById("pre").appendChild(fortunes);
    document.getElementById('pre').style.display = "block";
}