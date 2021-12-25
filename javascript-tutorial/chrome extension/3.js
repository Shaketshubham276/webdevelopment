let containerEl=document.getElementById("container")

containerEl.innerHTML="<button id=btn-el onclick='buy()'>Buy!</button>"

btnEl=document.getElementById("btn-el")

// containerEl.addEventListener("click",function(){
//     containerEl.textContent="Thank you for buying"
// })

function buy(){
    containerEl.innerHTML+="<p>Thank you for buying</p>"

}


// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem("myLeads"));
    




// myLeads=JSON.parse(myLeads)
// myLeads.push("www.sumitmbawala.com")
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)

