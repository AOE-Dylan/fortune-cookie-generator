console.log("Hello, how are you?");

function generateFortuneCookie() {
  document.getElementById('fortune-cookie-text').style.display = "block";
  var fortunes = {
    begin : ["You will meet a ", "You might run into a ", "Out of nowhere, a "],
    people : ["handsome superhero ", "billionaire", "famous movie star"],
    action : ["will deliver an important message", " will need your help", "will want to give you special stuff"]
  };
  for (var i = 0; i < 3; i++) {
  document.getElementById('read').innerHTML =   
    (fortunes.begin[2] + fortunes.people[1] + " " + fortunes.action[0] + " !");
  }
}

function previousFortunes(argument) {
  // body...
}