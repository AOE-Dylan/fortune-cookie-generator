console.log("Hello, how are you?");

function generateFortuneCookie() {
  document.getElementById('fortune-cookie-text').style.display = "block";
  document.getElementById('fortune').style.backgroundImage = "url('data:image/jpeg;base64,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')";
  var begin = ["You will meet a ", "You might run into a ", "Out of nowhere, a ","Surprisingly, a ", "At school a " ];
  var people = ["handsome superhero ", "billionaire", "famous movie star", "person you know", "foreign prime minister"];
  var action = ["will deliver an important message", " will need your help", "will want to give you special stuff", "will try to befriend you", "will accidentally call you"];
  var para = document.createElement("P");
  var t = document.createTextNode(begin[Math.floor(Math.random() * 5)] + people[Math.floor(Math.random() * 5)] + " " + action[Math.floor(Math.random() * 5)] + " !");
  para.appendChild(t);
  document.getElementById("text").appendChild(para);
}