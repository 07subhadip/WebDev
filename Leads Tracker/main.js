let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",function(){
    console.log("You are logged out using addEventListener")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // listItems +="<li><a target = '_blank' href = '"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
        // we can do the below instead of line : 9
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)

        // the below lines are in templates using ``
        listItems+=`<li>
                        <a target='_blank' href=${myLeads[i]}>
                            ${myLeads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems
}
