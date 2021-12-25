let myLeads = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-el")
let deleteBtn=document.getElementById("delete-btn")
let tabBtn =document.getElementById("tab-btn")



let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}
const tabs=[
    {url:"https://www.linkedin.com/in/shaket-shubham-7939b6214"}
]
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads()
        
    })


    // console.log(tab 
    
}) 

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads=[]
    renderLeads()
})


saveBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
    console.log(localStorage.getItem("myLeads"))

})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {

        listItems += `<li>
            <a href=${myLeads[i]}' target='_blank'>
            ${myLeads[i]}
            </a>
        </li>`  
 
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}
