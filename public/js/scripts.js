// Ajustando as dimensões do palco do jogo
var height = 0;
var width = 0;
var vidas = 1;
var tempo = 15;

// Recuperação do modo de jogo e logo após atribuição das dificuldades na página do jogo
var nivel = window.location.search;
nivel = nivel.replace("?", "");

var criaMosquitoTempo = 2000;

if (nivel === "facil") {
  // 2000
  criaMosquitoTempo = 2000;
} else if (nivel === "normal") {
  // 1500
  criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  // 1000
  criaMosquitoTempo = 1000;
} else if (nivel === "chucknorris") {
  // 750
  criaMosquitoTempo = 750;
}

// Criação da função que ajusta o tamanho da página em que os elementos devem ser spawnados
function ajustaTamanhoPalcoJogo() {
  width = window.innerWidth;
  height = window.innerHeight;

  console.log(width, height);
}

ajustaTamanhoPalcoJogo();

// Criação do cronometro e redirecionamento para a página de vitória
var cronometro = setInterval(function () {
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }

  tempo -= 1;
}, 1000);

function posicaoRandomica() {
  // Remover o mosquito anterior caso exista
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "game-over.html";
    } else {
      document.getElementById("v" + vidas).src = "./img/coracao_vazio.png";
      vidas++;
    }
  }

  // Criação de posições randômicas
  var positionX = Math.floor(Math.random() * width) - 90;
  var positionY = Math.floor(Math.random() * height) - 90;

  // Ajuste caso a posição for menor que 0 e não der para ver o elemento randômico
  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  // Criação do elemento HTML, para utilizar as posições randômicas
  var mosquito = document.createElement("img");
  mosquito.src = "./img/mosquito.png";

  // Chamada da função que atribui a classe ao determinado elemento randômico
  mosquito.className = tamanhoAleatorio() + "  " + ladoAleatorio();

  // Atribuindo ao novo elemenento sua nova
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";

  // Transforma a posição do elemento em abosluta, para que possa percorrer o body livremente, sem se basear nas suas próprias limitações
  mosquito.style.position = "absolute";

  // Criação de um id para o elemento html
  mosquito.id = "mosquito";

  // Criação do evento onclick no elemento
  mosquito.onclick = function () {
    this.remove();
  };

  // Inserir no arquivo html o novo elemento
  document.body.appendChild(mosquito);
}

posicaoRandomica();

// Criação dos elementos em tamanho aleatório
function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 7);
  console.log(classe);

  // Caso o valor for de 0 a 6 , será atribuido alguma classe no css
  switch (classe) {
    case 0:
      return "mosquito-1";

    case 1:
      return "mosquito-2";

    case 2:
      return "mosquito-3";

    case 3:
      return "mosquito-4";

    case 4:
      return "mosquito-5";

    case 5:
      return "mosquito-6";

    case 6:
      return "mosquito-7";
  }
}

// Criação da função que atribui ao elemento um 'lado' randômico
function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);
  console.log(classe);

  // Caso o valor for de 0 a 6 , será atribuido alguma classe no css
  switch (classe) {
    case 0:
      return "lado-a";

    case 1:
      return "lado-b";
  }
}

// Criação do setInterval que a cada 1000 milissegundos(1 segundo) executa uma função, e essa função por sua vez chama a função posicaoRandomica() gerando automaticamente ná pagina web os mosquitos(elementos), de uma forma aleatória
var criaMosquito = setInterval(function () {
  posicaoRandomica();
}, criaMosquitoTempo);

document.getElementsByTagName("");
