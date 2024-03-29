var socket = io();
socket.on("chat",function(data){
  var d = new Date();
  d = d.getHours() + ":" + d.getMinutes();
  createChatMessageDiv(data.un, data.ui, data.text, d);
  if(data.un != document.cookie.split(";")[0].substring(9)){
    var msg = new SpeechSynthesisUtterance(data.text);
    window.speechSynthesis.speak(msg);
  }
});
socket.on('MOVIE',function(data){
  displayCard("movie", data);
});
socket.on('CINEMA',function(data){
	displayCard("cinema", data);
});
socket.on('LOCATION',function(data){console.log(data);
	displayCard("map", data);
});
socket.on('WEATHER',function(data){
	displayCard("weather", data);
});
