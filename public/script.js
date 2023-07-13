function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 20;
}

var i = 0;
var txt = `Oi Bidu, tudo bem? \n\n\n\n 
Finalmente chegou o grande dia!\n\n\n\n\n\n 
Seu dia preferido do ano!\n\n\n\n\n\n\n 13 de julhoooooo!\n\n\n\n\n\n\ 
Eu, então, decidi fazer esse sitezinho aqui pra você como um presente hehehe. \n\n\n\n\n\n\n\n\n\n
Tá trabalhoso mas tá sendo ótimo e eu tenho certeza que vai valer a pena. \n\n\n\n\n\n\n\n\n\n
Coloquei Back to December de fundo só porque você gosta,\n\n\n\n\n mesmo a letra não tendo nada a ver com o momento (ela fala "birthday" aí no meio, então eu acho que ta valendo). \n\n\n\n\n\n\n\n
Fica à vontade pra ouvir a música toda. \n\n\n\n\n\n\n\n
Espero que você goste :) \n\n\n\n\n\n\n\n\n
Te amo muito! ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    let speed = getRandomInt(70)
    
    document.getElementById("botao").style.display = 'none'
    
    document.getElementById("texto1").style.display = 'block'
    document.getElementById("texto1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{setTimeout(doneTyping, 5000)}
}

function doneTyping() {
  document.getElementById("texto1").style.display = 'none'
  document.getElementById("btnmemory").style.display = 'block'
  document.getElementById("btnjump").style.display = 'block'
}

function redirectMemory() {
  window.location = 'memoria.html'
}
