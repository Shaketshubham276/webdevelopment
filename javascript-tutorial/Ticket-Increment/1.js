// serach innerText alternative mdn
// document.getElementById('count').innerText =5


let countel=document.getElementById('count-el')
let saveEl=document.getElementById("save-el")
console.log(countel)
let count=0

function increment(){
    count=count+1
    countel.innerText=count
    

}
increment( )

function save(){
    let countStr = count +" - "
    saveEl.textContent+=countStr
    // console.log(count)
    countel.textContent = 0
    count = 0

}



