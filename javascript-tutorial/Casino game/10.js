let fruit=["orange","apple","orange","orange","apple"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")

function sortFruit(){
    for(let i=0 ; i<fruit.length;i++){
        if(fruit[i]==="apple"){
            appleShelf.textContent+="apple " ," "
            
        }
        else if(fruit[i]==="orange"){
            orangeShelf.textContent+="orange " ," "
        }
    }
}

sortFruit()