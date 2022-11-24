//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;


function preload(){
  
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  
  createCanvas(600, 400);
  
  trilha.loop();
  
}

function draw() {
  
  background(0);
  
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  
  movimentaBolinha();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
 
  rect(x, y, raqueteComprimento, raqueteAltura);
  
}

function movimentaMinhaRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    
    yRaquete -= 10;
    
  }
  
    if (keyIsDown(DOWN_ARROW)){

      yRaquete += 10;
      
  }
  
}

function movimentaRaqueteOponente(){
  
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
  
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  
  calculaChanceDeErrar()
  
  /* if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  } */
  
  /* if (keyIsDown(83)){
    yRaqueteOponente += 10;
  } */
  
}

function calculaChanceDeErrar(){
  
  if (pontosDoOponente >= meusPontos){
    
    chanceDeErrar += 1;
    
    if (chanceDeErrar >= 39){
      
    chanceDeErrar = 40; 
      
    } else {
      
      chanceDeErrar -= 1
      
      if (chanceDeErrar <= 35){
        
        chanceDeErrar = 35;
        
      }
    }
  }
}

function verificaColisaoRaquete(x, y){
  
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu){
    
    velocidadeXBolinha *= -1;
    
    raquetada.play();
    
  }
  
}

function incluiPlacar(){
  
  fill(color(255, 140, 0))
  stroke(255);
  
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  
  fill(255)
  
  textAlign(CENTER);
  textSize(16);
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26);
  
}

function marcaPonto(){
  
  if (xBolinha > 590){
    
    meusPontos += 1;
    
    ponto.play();
    
  }
  if (xBolinha < 10){
    
    pontosDoOponente += 1;
    
    ponto.play();
    
  }
  
}

function bolinhaNaoFicaPresa(){
  
    if (XBolinha - raio < 0){
  
    XBolinha = 23
    
    }
}