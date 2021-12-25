let data=[
    {
        player:"sumit",
        score:87

    },
    {
        player:"shaket",
        score:64
    }
]
btnEl=document.getElementById("btn")

btnEl.addEventListener("click",function(){
    console.log(data[0].score)
})

