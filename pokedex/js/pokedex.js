



var arr = new Array()

async function teste(){
   // let divc = document.getElementById("cobertura")
    let sec = document.getElementById("pokedex")
    for(var i=1; i<=151; i++){
        fetch("https://pokeapi.co/api/v2/pokemon/"+i)
        .then(resolve=>{return resolve.json()})
        .then(data=>{
            let img = document.createElement("img")
            let div = document.createElement("div")
           // let sec = document.getElementById("pokedex")
            let divc = document.getElementById("cobertura")
            let p = document.createElement("p")
            arr.push({"nome": data.name, "imagem": data.sprites.front_default})

      
            img.setAttribute("src", data.sprites.front_default)
            img.style.width = "50px"
            img.style.height = "60px"
            img.classList.add("foto")

            //img.style.marginLeft = "15px";
            div.style.marginLeft = "70px"
            div.style.marginRight = "40px"
            div.style.cssFloat = "left"
            div.style.width = "60px"
            div.style.height = "80px"

            div.setAttribute("class","mi")
            p.classList.add("pokemonNames")
            p.innerHTML = data.name
           // div.style.border = "1px solid blue"
            div.style.margin = "auto"
           // div.style.
           div.setAttribute("onclick",`clicou()`)
            div.appendChild(img)
            div.appendChild(p)
            divc.appendChild(div)           
        })
    }
    //sec.appendChild(divc)

}



 teste()

var musica = 0

 async function pesquisar(){
    let pesquisa = document.getElementById("pesquisar")
    if(pesquisa.value != ""){
        let pokemon = await apPesquisa("https://pokeapi.co/api/v2/pokemon/"+pesquisa.value)
        if(pokemon != undefined){
            
        console.log("igual")
        let barra = document.querySelector(".barra")
        pesquisa.value = ""

        let imagens = new Array()
        imagens.push(pokemon.sprites.front_default)
        imagens.push(pokemon.sprites.back_default)
        imagens.push(pokemon.sprites.front_shiny)
        imagens.push(pokemon.sprites.back_shiny)
    
        var fgaleria = [... document.querySelectorAll(".mySlides")]
    
    
        fgaleria[0].children[1].setAttribute("src",imagens[0])
        fgaleria[0].children[2].innerHTML = pokemon.name
        fgaleria[1].children[1].setAttribute("src",imagens[1])
        fgaleria[1].children[2].innerHTML = pokemon.name
        fgaleria[2].children[1].setAttribute("src",imagens[2])
        fgaleria[2].children[2].innerHTML = pokemon.name
        fgaleria[3].children[1].setAttribute("src",imagens[3])
        fgaleria[3].children[2].innerHTML = pokemon.name
    
        
        
        let vida = document.getElementById("vida")
        let defesa = document.getElementById("defesa")
        let defesaS = document.getElementById("defesaS")
        let ataque = document.getElementById("ataque")
        let ataqueS = document.getElementById("ataqueS")
        let velocidade = document.getElementById("velocidade")
    
        
    
        vida.innerHTML = pokemon.stats[5].base_stat
        defesa.innerHTML = pokemon.stats[3].base_stat
        defesaS.innerHTML = pokemon.stats[1].base_stat
        ataque.innerHTML = pokemon.stats[4].base_stat
       
        ataqueS.innerHTML = pokemon.stats[2].base_stat
        velocidade.innerHTML = pokemon.stats[0].base_stat
    
        var borda = document.querySelector(".bordas")
            borda.style.animation = "bora 1s linear forwards"
    
    
        //barra.classList.remove("barra")
        //barra.classList.add("barra2")
        
        barra.addEventListener("animationend", event=>{
            if(event.animationName == "bora"){
                let table = [... document.querySelectorAll("tbody#tbody")]
                document.querySelector("caption").classList.add("cap")
                table[0].children[0].classList.add("vida")
                table[0].children[0].display = "block"
                table[0].children[1].classList.add("defesa")
                table[0].children[2].classList.add("defesaS")
                table[0].children[3].classList.add("ataque")
                table[0].children[4].classList.add("ataqueS")
                table[0].children[5].classList.add("velocidade")
            }
        })
    
        showSlides(slideIndex)
        const ball = document.getElementById("balls")
        ball.addEventListener("click", event=>{
        ball.style.animation = "sumirbola 1s forwards"
        let cima = document.querySelector(".barraCima")
        let baixo = document.querySelector(".barraBaixo")
    
        let barra = document.querySelector(".barra")
        barra.style.display = "block"
        barra.style.animation = "aparecerBarra 2.3s forwards"
        cima.style.animation = "cima 2s forwards"
        baixo.style.animation = "baixo 2s forwards"

        if(musica==0){
            musica = 1
            var audio = document.createElement("audio")
            var som = document.createElement("source")
            var body = document.querySelector("body")
            audio.setAttribute("autoplay","autoplay")
            audio.setAttribute("id","cry")
            som.setAttribute("src",`som/cry/${pokemon.id}.wav`)
            audio.appendChild(som)
            body.appendChild(audio)
        }
    
        let table = [... document.querySelectorAll("tbody#tbody")]
                document.querySelector("caption").classList.add("cap")
                table[0].children[0].classList.add("vida")
                table[0].children[0].display = "block"
                table[0].children[1].classList.add("defesa")
                table[0].children[2].classList.add("defesaS")
                table[0].children[3].classList.add("ataque")
                table[0].children[4].classList.add("ataqueS")
                table[0].children[5].classList.add("velocidade")
      })
      
      if(musica==1){
        var audio = document.createElement("audio")
        var som = document.createElement("source")
        var body = document.querySelector("body")
        audio.setAttribute("autoplay","autoplay")
        audio.setAttribute("id","cry")
        som.setAttribute("src",`som/cry/${pokemon.id}.wav`)
        audio.appendChild(som)
        body.appendChild(audio)
      }

      
    }else{
        pesquisa.value = ""
        pesquisa.focus()
    }
    }else{
        alert("os campos estão vazio")
    }
 }



async function apPesquisa(url){
 const  e = fetch(url)
    .then(resolve =>{return resolve.json()})
    .then(data =>{return data})
    .catch(e=>{alert("nenhum pokemon encontrado. Verifique o nome digitado!")})

return e

}


let pokebola = document.getElementById('poke')


pokebola.addEventListener("animationend", event =>{
    if(event.animationName == "move"){
        pokebola.classList.remove("pokeinmove")
        pokebola.classList.add("pokein")
    }
})

pokebola.addEventListener("animationstart",event=>{
    let div = document.createElement("div")

    if(event.animationName == "pokegira"){

    }
})
function t(){
    var poke = document.querySelector("div#poke img")
    if(poke.src.match(/pokebola-verde.png/)){
        var musica = document.getElementById('musica');
        musica.muted = true
        poke.src = "imagens/pokebola-vermelha.png"
    }else{
        var musica = document.getElementById('musica');
        musica.muted = false
        poke.src = "imagens/pokebola-verde.png"
    }
}

function t2(){
    var poke = document.querySelector(".pokeVolume")
    if(poke.src.match(/pokebola-verde.png/)){
        var musica = document.getElementById('musica')
        musica.muted = true
        poke.src = "imagens/pokebola-vermelha.png"
    }else{
        var musica = document.getElementById('musica')
        musica.muted = false
        poke.src = "imagens/pokebola-verde.png"
    }
}

async function clicou(){
   let pokemon = await info(event.target.parentElement.innerText)
    console.log(pokemon)

    let barra = document.querySelector(".barra")


    let imagens = new Array()
    imagens.push(pokemon.sprites.front_default)
    imagens.push(pokemon.sprites.back_default)
    imagens.push(pokemon.sprites.front_shiny)
    imagens.push(pokemon.sprites.back_shiny)

    var fgaleria = [... document.querySelectorAll(".mySlides")]


    fgaleria[0].children[1].setAttribute("src",imagens[0])
    fgaleria[0].children[2].innerHTML = pokemon.name
    fgaleria[1].children[1].setAttribute("src",imagens[1])
    fgaleria[1].children[2].innerHTML = pokemon.name
    fgaleria[2].children[1].setAttribute("src",imagens[2])
    fgaleria[2].children[2].innerHTML = pokemon.name
    fgaleria[3].children[1].setAttribute("src",imagens[3])
    fgaleria[3].children[2].innerHTML = pokemon.name

    
    
    let vida = document.getElementById("vida")
    let defesa = document.getElementById("defesa")
    let defesaS = document.getElementById("defesaS")
    let ataque = document.getElementById("ataque")
    let ataqueS = document.getElementById("ataqueS")
    let velocidade = document.getElementById("velocidade")

    

    vida.innerHTML = pokemon.stats[5].base_stat
    defesa.innerHTML = pokemon.stats[3].base_stat
    defesaS.innerHTML = pokemon.stats[1].base_stat
    ataque.innerHTML = pokemon.stats[4].base_stat
   
    ataqueS.innerHTML = pokemon.stats[2].base_stat
    velocidade.innerHTML = pokemon.stats[0].base_stat

    var borda = document.querySelector(".bordas")
        borda.style.animation = "bora 1s linear forwards"


    //barra.classList.remove("barra")
    //barra.classList.add("barra2")
    
    barra.addEventListener("animationend", event=>{
        if(event.animationName == "bora"){
            let table = [... document.querySelectorAll("tbody#tbody")]
            document.querySelector("caption").classList.add("cap")
            table[0].children[0].classList.add("vida")
            table[0].children[0].display = "block"
            table[0].children[1].classList.add("defesa")
            table[0].children[2].classList.add("defesaS")
            table[0].children[3].classList.add("ataque")
            table[0].children[4].classList.add("ataqueS")
            table[0].children[5].classList.add("velocidade")
        }
    })

    showSlides(slideIndex)
    const ball = document.getElementById("balls")
    ball.addEventListener("click", event=>{
    ball.style.animation = "sumirbola 1s forwards"
    let cima = document.querySelector(".barraCima")
    let baixo = document.querySelector(".barraBaixo")

    let barra = document.querySelector(".barra")
    barra.style.display = "block"
    barra.style.animation = "aparecerBarra 2.3s forwards"
    cima.style.animation = "cima 2s forwards"
    baixo.style.animation = "baixo 2s forwards"

    let table = [... document.querySelectorAll("tbody#tbody")]
    document.querySelector("caption").classList.add("cap")
    table[0].children[0].classList.add("vida")
    table[0].children[0].display = "block"
    table[0].children[1].classList.add("defesa")
    table[0].children[2].classList.add("defesaS")
    table[0].children[3].classList.add("ataque")
    table[0].children[4].classList.add("ataqueS")
    table[0].children[5].classList.add("velocidade")
    
    if(musica==0){
        musica = 1
        var audio = document.createElement("audio")
        var som = document.createElement("source")
        var body = document.querySelector("body")
        audio.setAttribute("autoplay","autoplay")
        audio.setAttribute("id","cry")
        som.setAttribute("src",`som/cry/${pokemon.id}.wav`)
        audio.appendChild(som)
        body.appendChild(audio)
    }
  })

  if(musica==1){
    var audio = document.createElement("audio")
    var som = document.createElement("source")
    var body = document.querySelector("body")
    audio.setAttribute("autoplay","autoplay")
    audio.setAttribute("id","cry")
    som.setAttribute("src",`som/cry/${pokemon.id}.wav`)
    audio.appendChild(som)
    body.appendChild(audio)
  }

}

const close = document.getElementById("close")

close.addEventListener("click", event=>{
    const ball = document.getElementById("balls")
    let cima = document.querySelector(".barraCima")
    let baixo = document.querySelector(".barraBaixo")
    musica=0
   
    let barra = document.querySelector(".barra")
    barra.style.animation = "desaparecerBarra 1s forwards"

    barra.addEventListener("animationstart",event=>{
        if(event.animationName == "desaparecerBarra"){
            ball.style.animation = "voltarBall 2s forwards"
            cima.style.animation = "cimaVolta 2s forwards"
            baixo.style.animation = "baixoVolta 2s forwards"
        }
        barra.addEventListener("animationend", event=>{
            if(event.animationName == "desaparecerBarra"){
            barra.style.display = "none"
            }
        })
    })
    let table = [... document.querySelectorAll("tbody#tbody")]
    document.querySelector("caption").classList.remove("cap")
    table[0].children[0].classList.remove("vida")
    table[0].children[1].classList.remove("defesa")
    table[0].children[2].classList.remove("defesaS")
    table[0].children[3].classList.remove("ataque")
    table[0].children[4].classList.remove("ataqueS")
    table[0].children[5].classList.remove("velocidade")

    baixo.addEventListener("animationend",event=>{
        if(event.animationName == "baixoVolta"){
            var borda = document.querySelector(".bordas")    
            borda.style.animation = "boraVolta 2s linear forwards"
        }
    })
})

async function info(name){
    //alert(name)

    const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+name)
    .then(response =>{return response.json()})
    .then(data=>{return data})

    return pokemon
}






                                                //Galeria


var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página');
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}




