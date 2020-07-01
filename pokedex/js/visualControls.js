
/* Controles Visuais*/

//chama pokedex
const pokedex = document.getElementById("divpokedex")

pokedex.addEventListener("click", event=>{
    let iniciar = document.querySelector(".iniciar")
    iniciar.style.animation = "entrar 1s linear forwards"
    var pokev = document.querySelector(".pokeVolume")
    var poke = document.querySelector("div#poke img")
    pokev.style.display = "none"
    poke.setAttribute("src",pokev.src)

    setTimeout(() => {
      let esquerda = document.getElementById("esquerda")
      let direita = document.getElementById("direita")
      esquerda.style.animation = "esquerda 1s linear forwards"
      direita.style.animation = "direita 1s linear forwards"
      setTimeout(() => {
        let todo = document.querySelector(".todo")
        todo.style.display = "block"
      }, 1000);
    }, 1000);
  })

  //chama quiz
const quiz = document.getElementById("quiz")

 quiz.addEventListener("click", event=>{

  let iniciar = document.querySelector(".iniciar")
    iniciar.style.animation = "entrar 1s linear forwards"
    
  setTimeout(() => {
    let esquerda = document.getElementById("esquerda")
    let direita = document.getElementById("direita")
    esquerda.style.animation = "esquerda 1s linear forwards"
    direita.style.animation = "direita 1s linear forwards"


    setTimeout(() => {
      var Qbordas = document.querySelector(".Qbordas")
        Qbordas.style.display = "block"
  
        Qbordas.style.animation = "mostrarQborda 2s forwards"
        
        const Qballs = document.getElementById("Qballs")
          Qballs.addEventListener("click",event=>{
          Qballs.style.animation = "sumirbola 1s forwards"
          let cima = document.querySelector(".QbarraCima")
          let baixo = document.querySelector(".QbarraBaixo")

          cima.style.animation = "Qcima 2s forwards"
          baixo.style.animation = "Qbaixo 2s forwards"
        })

        Qballs.addEventListener("animationstart", event=>{
          if(event.animationName == "sumirbola"){
            setTimeout( function() {
              var barraQuiz = document.querySelector(".barraQuiz")
              var sp = document.querySelector(".sp")
              var pontuacao = document.querySelector(".pontuacao")

              sp.style.display = "block"
              barraQuiz.style.display = "block"
              pontuacao.style.display = "block"

              barraQuiz.style.animation = "mostrarQborda 2s forwards"
              pontuacao.style.animation = "mostrarPontuacao 3s linear forwards"
              setTimeout(() => {
                var vidro = document.querySelector(".meuvidro")
                vidro.style.animation = "movervidro 2s forwards"
                vidro.style.display = "block"
              }, 3000);
              sp.style.animation = "vidas 2s forwards"
             
            }, 300 )
          }
          Qballs.addEventListener("animationend",event=>{
            if(event.animationName == "sumirbola"){
              Qbordas.style.display = "none"
            }
          })
        })
    }, 1000);
  }, 1000);
 })

 
  var Qballs = document.getElementById("Qballs")

  Qballs.addEventListener("animationend",event=>{
    if(event.animationName == "voltarBall"){
      Qbordas.style.animation = "voltarQborda 2s linear forwards"
    }
  })

  const voltar = document.querySelector(".voltar")

  voltar.addEventListener("click", event=>{
    var esquerda = document.getElementById("esquerda")
    var direita = document.getElementById("direita")
    var iniciar = document.querySelector(".iniciar")
    esquerda.style.animation = "voltaEsquerda 2s linear forwards"
    direita.style.animation = "voltaDireita 2s linear forwards"
    iniciar.style.animation = "entrarVolta 2s linear forwards"

    let todo = document.querySelector(".todo")

    setTimeout(() => {
      var pokev = document.querySelector(".pokeVolume")
      var poke = document.querySelector("div#poke img")
      pokev.setAttribute("src",poke.src)
      pokev.style.display = "block"
      todo.style.display = "none"
    }, 200);
  })



    
    
    
    
 
   



  