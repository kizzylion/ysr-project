

let tabs = document.querySelectorAll(".tab");
let panels = document.querySelectorAll(".tab-panel")

tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
        let tabTarget = tab.getAttribute("aria-controls");
        tabs.forEach(tab =>{
            tab.classList.remove("border-red-300");
            tab.classList.add("border-transparent");
            tab.classList.remove("text-red-600");
        })
        
        
        tab.classList.remove("border-transparent");
        tab.classList.add("border-red-300");
        tab.classList.add("text-red-600");
        

        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id");
            if(panelId === tabTarget){
                panel.classList.remove("hidden");
            } else{
                panel.classList.add("hidden");
            }
        })

    })
})

console.log(tabs)