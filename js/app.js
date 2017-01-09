console.log("Hello, how are you?");

function generateFortuneCookie() {
  document.getElementById('fortune-cookie-text').style.display = "block";
  var fortunes = {
    begin : ["You will meet a ", "You might run into a ", "Out of nowhere, a "],
    people : ["handsome superhero ", "billionaire", "famous movie star"],
    action : ["will deliver an important message", " will need your help", "will want to give you special stuff"]
  };
  for (var i = 0; i < 3; i++) {
  var printFortune = document.getElementById('read').innerHTML =   
    (fortunes.begin[i] + fortunes.people[i] + " " + fortunes.action[i] + " !");
    document.getElementById('read').style.display = "block";
  previousFortunes(printFortune)
  }
}



function previousFortunes(a) {
    var previousFortunes = document.createElement("previous-fortunes");
    var block = document.createTextNode(a);
    previousFortunes.appendChild(block);
    document.getElementById("fortune-cookie-text").appendChild(previousFortunes);
}