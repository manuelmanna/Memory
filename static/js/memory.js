let card = document.querySelectorAll(".card")
let tentativi = document.querySelector("#tentativijs")
let win = false
let rigioca = document.querySelector("#rigioca")
let tentativinum = 0
let facce = document.querySelectorAll(".faccia")
let haivinto = document.querySelector("#haivinto")
let trovato = 0
function shuffle(array) {
array.sort(() => Math.random() - 0.5);
}
let random = [
    {
        image: "./images/teemo.jpg",
        id: 1
    },
    {
        image: "./images/teemo.jpg",
        id: 1
    },
    {
        image: "./images/Mordekaiser.jpg",
        id: 2
    },
    {
        image: "./images/Mordekaiser.jpg",
        id: 2
    },
    {
        image: "./images/rengar.jpg",   
        id: 3
    },
    {
        image: "./images/rengar.jpg",
        id: 3
    },
    {
        image: "./images/volibear.jpg",
        id: 4
    },
    {
        image: "./images/volibear.jpg",
        id: 4
    },
    {
        image: "./images/masteryi.jpg",
        id: 5
    },
    {
        image: "./images/masteryi.jpg",
        id: 5
    },
    {
        image: "./images/xinzhao.jpg",
        id: 6
    },
    {
        image: "./images/xinzhao.jpg",
        id: 6
    }
]
shuffle(random)
for(let i = 0;i<random.length;i++){
    facce[i].style.backgroundImage = "url("+random[i].image+")"
    card[i].dataset.valore = random[i].id
}
    for(let i = 0;i<card.length;i++){
        card[i].addEventListener("click",function(e){
            e.preventDefault()
            if(!(card[i].classList.contains("correct"))){
                e.currentTarget.classList.add("selected")
                
                let selectedcards = document.querySelectorAll(".card.selected")


                if(selectedcards.length === 2){
                tentativinum += 1
                tentativi.innerHTML = tentativinum
                if(selectedcards[0].dataset.valore === selectedcards[1].dataset.valore){
                    trovato += 1
                    selectedcards[0].classList.add("correct")
                    selectedcards[1].classList.add("correct")
                    selectedcards[0].classList.remove("selected")
                    selectedcards[1].classList.remove("selected")
                    }else{
                        setTimeout(function(){
                            selectedcards[0].classList.remove("selected")
                        selectedcards[1].classList.remove("selected") 
                        },1000)                               
                    }
                }
            }
            if(trovato === 6){
                setTimeout(function(){
                    haivinto.classList.remove("hidden")
                },500) 
                
            }
        })
    }
    rigioca.addEventListener("click", function(e){
        e.preventDefault()
        trovato = 0
        haivinto.classList.add("hidden")
        shuffle(random)

        for(let i = 0;i<random.length;i++){
            facce[i].style.backgroundImage = "url("+random[i].image+")"
            card[i].dataset.valore = random[i].id
        }
        tentativinum = 0
        tentativi.innerHTML = tentativinum
        for(let i = 0;i<card.length;i++){
            card[i].classList.remove("selected")
            card[i].classList.remove("correct")
        }
    })