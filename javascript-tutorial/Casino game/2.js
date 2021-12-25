let sentence=["Hello","my","name","is","Parv"]
let greetingEl=document.getElementById("greeting-el")
for (let i=0;i<sentence.length;i++){
    console.log(sentence[i])
    greetingEl.textContent+=sentence[i]+" "
}
