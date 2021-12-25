const container=document.getElementById
 
function images(){
    for(let i=0; i<images.length; i++){
        container.innerHTML+=`<img class="team-img" src="${imgs[i]}">`
    }


 }
 
