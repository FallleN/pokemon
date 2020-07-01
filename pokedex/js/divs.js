function perguntas(){
    let barra = document.getElementById("barraQuiz")
    for(var i=0; i<=3; i++){
        let div = document.createElement("div")
        div.classList.add("respostas")
        div.style.opacity = 0
        barra.appendChild(div)
    }
}


var acertos = new Array()
var opcoes = new Array()



function aleatorio(){
    return  Math.floor(Math.random()* 151+1)
}

async function random(){
    const e = fetch("https://pokeapi.co/api/v2/pokemon/"+aleatorio())
    .then(response=>{return response.json()})
    .then(data=>{return data})
    return e
}

var correto=""
async function inicia(){
    opcoes = new Array()
    let pokemon = await random()


    if(acertos.length == 0){
        opcoes.push(pokemon.name)
        console.log("primeiro: "+pokemon.name)
        correto = pokemon.name        

        for(var i=1;i<=3;i++){
            var escolhas = await random()
            if(opcoes.indexOf(escolhas.name)==-1){
                opcoes.push(escolhas.name)
            }else{
                    i--
            }
        }
        QshowSlides(QslideIndex)
        let galeria = [... document.querySelectorAll(".QmySlides")]
        galeria[0].children[1].setAttribute("src",pokemon.sprites.front_default)
        galeria[0].children[2].innerHTML = "----------------------"
        galeria[1].children[1].setAttribute("src",pokemon.sprites.back_default)
        galeria[1].children[2].innerHTML = "----------------------"
        galeria[2].children[1].setAttribute("src",pokemon.sprites.front_shiny)
        galeria[2].children[2].innerHTML = "----------------------"
        galeria[3].children[1].setAttribute("src",pokemon.sprites.back_shiny)
        galeria[3].children[2].innerHTML = "----------------------"

            opcoes.sort((i) => 0.4 - Math.random()).slice(0,4)
            for(var i=0;i<=3;i++){
            let divname = [... document.querySelectorAll(".respostas")]

            divname[i].innerHTML = opcoes[i]
            divname[i].style.opacity = 1
            divname[i].setAttribute("onclick",`clickRespostas()`)
        }
    }else{
        if(acertos.indexOf(pokemon.name)==-1){
            opcoes.push(pokemon.name)
            console.log("primeiro: "+pokemon.name)
            correto=pokemon.name
            for(var i=1;i<=3;i++){
                var escolhas = await random()
                if(opcoes.indexOf(escolhas.name)==-1){
                    opcoes.push(escolhas.name)
                }else{
                    i--
                }
            }
            QshowSlides(QslideIndex)
            let galeria = [... document.querySelectorAll(".QmySlides")]
            galeria[0].children[1].setAttribute("src",pokemon.sprites.front_default)
            galeria[0].children[2].innerHTML = "----------------------"
            galeria[1].children[1].setAttribute("src",pokemon.sprites.back_default)
            galeria[1].children[2].innerHTML = "----------------------"
            galeria[2].children[1].setAttribute("src",pokemon.sprites.front_shiny)
            galeria[2].children[2].innerHTML = "----------------------"
            galeria[3].children[1].setAttribute("src",pokemon.sprites.back_shiny)
            galeria[3].children[2].innerHTML = "----------------------"
    
                opcoes.sort((i) => 0.4 - Math.random()).slice(0,4)
                for(var i=0;i<=3;i++){
                let divname = [... document.querySelectorAll(".respostas")]
    
                divname[i].innerHTML = opcoes[i]
                divname[i].style.opacity = 1
                divname[i].setAttribute("onclick",`clickRespostas()`)
            }
        }else{
            inicia()
        }
    }
}


function bolas(){
    const random = (min, max) => Math.random() * (max - min) + min

    let pokebola = document.createElement("img")
    let meuvidro = document.querySelector(".meuvidro")
    const position = random(265, 355)
    const duration = random(8,4)
    pokebola.setAttribute("src","imagens/pokebola.png")
    pokebola.classList.add("miniball")
    pokebola.style.left = `${position}px`
    pokebola.style.animationDuration = `${duration}s`
    pokebola.style.animationTimingFunction =`cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`
    meuvidro.appendChild(pokebola)
}



var vidas = 5
var coracoes = [... document.querySelectorAll(".vidas")]
async function clickRespostas(){
   var elemento = event.target 
   var resposta = document.getElementById("barraQuiz")
if(event.target.innerHTML == correto){
    elemento = event.target 
    console.log(elemento)
    var certo = document.getElementById("certo")

    for(var i=2;i<=5;i++){
        resposta.children[i].setAttribute("onclick","")
    }


    certo.style.display = "block"
    certo.style.animation = "gameoverShow 1s forwards"
    event.target.style.background = "green"

    var musicaFundo = document.getElementById("musica")
    musicaFundo.volume = 0.2
    var gif = document.getElementById("pikachu")
    gif.setAttribute("src","imagens/certo.png")


    var audio = document.createElement("audio")
    var som = document.createElement("source")
    var body = document.querySelector("body")
    audio.setAttribute("autoplay","autoplay")
    audio.setAttribute("id","tacerto")
    som.setAttribute("src",`som/tacerto.ogg`)
    audio.appendChild(som)
    audio.volume = 1
    body.appendChild(audio)

    setTimeout(() => {
        gif.setAttribute("src","https://media3.giphy.com/media/rGFFiIrVSqx9u/giphy.gif")
        musicaFundo.volume = 1
    }, 1000);


    bolas()

setTimeout(() => {
    certo.style.display = "none"
    elemento.style.background = "rgb(65, 64, 64)"
    let galeria = [... document.querySelectorAll(".QmySlides")]
    var capturar =  galeria[0].children[1].src 
    var img = document.createElement("img")
    var acertados = document.querySelector(".acertados")
    img.classList.add("capturados")
    img.setAttribute("src",capturar)

    acertados.appendChild(img)

    var pontos = document.querySelector(".pontuacao")
    pontos.children[1].innerHTML++

     // event.target.style.background = "green"
    acertos.push(elemento.innerHTML)

    if( pontos.children[1].innerHTML==10){
        var score = document.querySelector(".score2")
        var vencedor = document.getElementById("vitoria")
        score.innerHTML = pontos.children[1].innerHTML
        vencedor.style.display = "block"
        vencedor.style.animation = "gameoverShow 1s forwards"
    }
    inicia()
    for(var i=2;i<=5;i++){
        resposta.children[i].setAttribute("onclick","clickRespostas()")
    }

}, 2000);

}else{
    var errado = document.getElementById("errado")
    for(var i=2;i<=5;i++){
        resposta.children[i].setAttribute("onclick","")
    }

    errado.style.display = "block"
    elemento.style.background = "red"
    errado.style.animation = "gameoverShow 1s forwards"
    var arrRespostas = [... document.querySelectorAll(".respostas")]
    var respostaCorreta 
    for(item in arrRespostas){
        if(arrRespostas[item].innerHTML==correto){
           respostaCorreta =  arrRespostas[item]
        }
    }
    respostaCorreta.style.background = "green"

    setTimeout(() => {
        errado.style.display = "none"
        elemento.style.background = "rgb(65, 64, 64)"
        respostaCorreta.style.background = "rgb(65, 64, 64)"
        if(vidas!=0){
            coracoes[vidas].setAttribute("src","imagens/black heart.png")
            vidas--
        }else{
            var pontos = document.querySelector(".pontuacao")
            var gameover = document.getElementById("gameover")
            var score = document.querySelector(".oscore2")
            score.innerHTML =   pontos.children[1].innerHTML

            gameover.style.display = "block"
            gameover.style.animation = "gameoverShow 2s forwards"
        }
        inicia()
        for(var i=2;i<=5;i++){
            resposta.children[i].setAttribute("onclick","clickRespostas()")
        }

    }, 2000);
}


}


var Qbordas = document.querySelector(".Qbordas")
Qbordas.addEventListener("animationend",event=>{
  if(event.animationName == "voltarQborda"){
    var esquerda = document.getElementById("esquerda")
    var direita = document.getElementById("direita")
    var barraQuiz = document.querySelector(".barraQuiz")
    var sp = document.querySelector(".sp")
    var pontuacao = document.querySelector(".pontuacao")
    var iniciar = document.querySelector(".iniciar")
    var Qballs = document.getElementById("Qballs")
    var cima = document.querySelector(".QbarraCima")
    var baixo = document.querySelector(".QbarraBaixo")

   
    sp.style.display = "none"
    barraQuiz.style.display = "none"
    pontuacao.style.display = "none"
    Qbordas.style.animation = "none"

    Qbordas.style.display = "none"
    Qballs.style.animation = "none"
    cima.style.animation = "none"
    baixo.style.animation = "none"
    


      esquerda.style.animation = "voltaEsquerda 2s linear forwards"
      direita.style.animation = "voltaDireita 2s linear forwards"
      iniciar.style.animation = "entrarVolta 2s linear forwards"
      inicia()
  }
})   

  // Decisao de Jogo


const yes = document.querySelector(".Yes p")

yes.addEventListener("click",event=>{
    var vidro = document.querySelector(".meuvidro")
    for(var i=vidro.children.length-1; i>=1;i--){
     vidro.removeChild(vidro.children[i])
    }
    
    vidas = 5
    acertos = new Array()
    var acertados = document.querySelector(".acertados")
   
    var score = document.querySelector(".score2")
    score.innerHTML =  0
    var tamanho = acertados.children.length
    for(var j=tamanho-1; j>=0; j--){
        acertados.removeChild(acertados.children[j])
    }

    var pontos = document.querySelector(".pontuacao")
    
    pontos.children[1].innerHTML=0

    for(var i=0; i<=5;i++){
        coracoes[i].setAttribute("src","imagens/vida.png")
    }

    var vitoria = document.getElementById("vitoria")
    vitoria.style.animation = "gameoverHide 2s forwards"
    setTimeout(() => {
        vitoria.style.display = "none"
    }, 2000);
})

const no = document.querySelector(".No p")

no.addEventListener("click",event=>{
    vidas = 5
    acertos = new Array()
    var pontos = document.querySelector(".pontuacao")
    pontos.children[1].innerHTML=0

    var score = document.querySelector(".score2")
    score.innerHTML =  0

    for(var i=0; i<=5;i++){
        coracoes[i].setAttribute("src","imagens/vida.png")
    }




    var esquerda = document.getElementById("esquerda")
    var direita = document.getElementById("direita")
    var barraQuiz = document.querySelector(".barraQuiz")
    var sp = document.querySelector(".sp")
    var pontuacao = document.querySelector(".pontuacao")
    var iniciar = document.querySelector(".iniciar")
    var Qballs = document.getElementById("Qballs")
    var cima = document.querySelector(".QbarraCima")
    var baixo = document.querySelector(".QbarraBaixo")
    var vidro = document.querySelector(".meuvidro")
    
   
    sp.style.display = "none"
    barraQuiz.style.display = "none"
    pontuacao.style.display = "none"
    Qbordas.style.animation = "none"

    Qbordas.style.display = "none"
    Qballs.style.animation = "none"
    cima.style.animation = "none"
    baixo.style.animation = "none"

    vidro.style.display = "none"

    var vidro = document.querySelector(".meuvidro")
       for(var i=vidro.children.length-1; i>=1;i--){
        vidro.removeChild(vidro.children[i])
       }
    
    var vitoria = document.getElementById("vitoria")
    vitoria.style.animation = "gameoverHide 2s forwards"
    setTimeout(() => {
        vitoria.style.display = "none"
        esquerda.style.animation = "voltaEsquerda 2s linear forwards"
        direita.style.animation = "voltaDireita 2s linear forwards"
        iniciar.style.animation = "entrarVolta 2s linear forwards"
        var acertados = document.querySelector(".acertados")

        var tamanho = acertados.children.length
        for(var j=tamanho-1; j>=0; j--){
            acertados.removeChild(acertados.children[j])
        }
    }, 2000);
})


const gameoverNo = document.querySelector(".escolhaNo p")

  gameoverNo.addEventListener("click",event=>{
    vidas = 5
    acertos = new Array()
    var pontos = document.querySelector(".pontuacao")
    pontos.children[1].innerHTML=0
    var score = document.querySelector(".oscore2")
    score.innerHTML =  0

    for(var i=0; i<=5;i++){
        coracoes[i].setAttribute("src","imagens/vida.png")
    }

    

    var esquerda = document.getElementById("esquerda")
    var direita = document.getElementById("direita")
    var barraQuiz = document.querySelector(".barraQuiz")
    var sp = document.querySelector(".sp")
    var pontuacao = document.querySelector(".pontuacao")
    var iniciar = document.querySelector(".iniciar")
    var Qballs = document.getElementById("Qballs")
    var cima = document.querySelector(".QbarraCima")
    var baixo = document.querySelector(".QbarraBaixo")
    var vidro = document.querySelector(".meuvidro")
   
    sp.style.display = "none"
    barraQuiz.style.display = "none"
    pontuacao.style.display = "none"
    Qbordas.style.animation = "none"

    Qbordas.style.display = "none"
    Qballs.style.animation = "none"
    cima.style.animation = "none"
    baixo.style.animation = "none"
    vidro.style.display = "none"

    var vidro = document.querySelector(".meuvidro")
       for(var i=vidro.children.length-1; i>=1;i--){
        vidro.removeChild(vidro.children[i])
    }

    var gameover = document.getElementById("gameover")
    gameover.style.animation = "gameoverHide 2s forwards"
    setTimeout(() => {
        gameover.style.display = "none"
        esquerda.style.animation = "voltaEsquerda 2s linear forwards"
        direita.style.animation = "voltaDireita 2s linear forwards"
        iniciar.style.animation = "entrarVolta 2s linear forwards"
        var acertados = document.querySelector(".acertados")

        var tamanho = acertados.children.length
        for(var j=tamanho-1; j>=0; j--){
            acertados.removeChild(acertados.children[j])
        }
    }, 2000);
  })


  const gameoverYes = document.querySelector(".escolhaYes p")
  gameoverYes.addEventListener("click", event=>{
    var vidro = document.querySelector(".meuvidro")
       for(var i=vidro.children.length-1; i>=1;i--){
        vidro.removeChild(vidro.children[i])
    }
    vidas = 5
    acertos = new Array()
    var acertados = document.querySelector(".acertados")

    var tamanho = acertados.children.length
    for(var j=tamanho-1; j>=0; j--){
        acertados.removeChild(acertados.children[j])
    }

    var pontos = document.querySelector(".pontuacao")
    pontos.children[1].innerHTML=0
    var score = document.querySelector(".oscore2")
    score.innerHTML = 0

    for(var i=0; i<=5;i++){
        coracoes[i].setAttribute("src","imagens/vida.png")
    }

    var gameover = document.getElementById("gameover")
    gameover.style.animation = "gameoverHide 2s forwards"
    setTimeout(() => {
        gameover.style.display = "none"
    }, 2000);
  })

  //close quiz
  const closequiz = document.querySelector(".barraQuiz").children[0]
    closequiz.addEventListener("click",event=>{
      var barraQuiz = document.querySelector(".barraQuiz")
      var sp = document.querySelector(".sp")
      var pontuacao = document.querySelector(".pontuacao")
      var Qbordas = document.querySelector(".Qbordas")
      var Qballs = document.getElementById("Qballs")
      var cima = document.querySelector(".QbarraCima")
      var baixo = document.querySelector(".QbarraBaixo")
      var esquerda = document.getElementById("esquerda")
      var direita = document.getElementById("direita")

      var vidro = document.querySelector(".meuvidro")
       for(var i=vidro.children.length-1; i>=1;i--){
        vidro.removeChild(vidro.children[i])
       }
        
      vidas = 5
      var acertados = document.querySelector(".acertados")
      var tamanho = acertados.children.length
      for(var j=tamanho-1; j>=0; j--){
          acertados.removeChild(acertados.children[j])
      }
  
      for(var i=0; i<=5;i++){
        coracoes[i].setAttribute("src","imagens/vida.png")
      }
  
      var pontos = document.querySelector(".pontuacao")
      
      pontos.children[1].innerHTML=0
      
      var vidro = document.querySelector(".meuvidro")

      vidro.style.animation = "escondervidro 2s forwards"
      
      setTimeout(() => {
        pontuacao.style.animation = "esconderPontuacao 1s linear forwards"
      }, 1000);
      pontuacao.addEventListener("animationend",event=>{
        if(event.animationName=="esconderPontuacao"){
          sp.style.animation = "sumirVidas 2s forwards"
          barraQuiz.style.animation = "esconderBorda 2s forwards"
  
          setTimeout( function() {
            Qbordas.style.display = "block"
            cima.style.animation = "cimaVolta 2s forwards"
            baixo.style.animation = "baixoVolta 2s forwards"
            Qballs.style.animation = "voltarBall 2s forwards" 
          },800)
  
        }
      })
    })
  


  
async function mudar(){
    let pokemon = await random()
}

                 //Galeria

    var QslideIndex = 1;
    //showSlides(slideIndex);
    
    // Next/previous controls
    function QplusSlides(n) {
        QshowSlides(QslideIndex += n)
       // ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página')
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        QshowSlides(QslideIndex = n);
    }
    
    function QshowSlides(n) {
        var i;
        var slides = document.getElementsByClassName("QmySlides")
        if (n > slides.length) {
            QslideIndex = 1
        }
        if (n < 1) {
            QslideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        }
        slides[QslideIndex - 1].style.display = "block"
    }                                      
perguntas()
inicia()