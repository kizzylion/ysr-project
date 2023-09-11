

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


//? products for example
const tabRecords = [
    {
      src: '.images/princessContainerImage.png',
      name: 'Matt Emulsion Paint',
      description: 'This type of paint has a matte finish and is great for hiding imperfections on walls',
      type: 'Interior',
    },
    {
      src:  '.images/princessContainerImage.png',
      name: 'Emulsion Paints',
      description: 'This type of paint has a slight sheen and is more durable than flat paint.',
      type: 'Interior',

    },
    {
      src: '.images/princessContainerImage.png',
      name: 'Satin Paints',
      description: 'This type of paint has a higher sheen than eggshell paint and is more durable.',
      type: 'Interior'
    },
    {
      src: '.images/princessContainerImage.png',
      name: 'Matt Exterior Paint',
      description: 'This type of paint has a slight sheen and is more durable for the exterior part of the home.',
      type: 'Exterior'
    },
    {
      src: '.images/princessContainerImage.png',
      name: 'Primer',
      description: 'This are you to fix the surface of your wall before painting .',
      type: 'Primer'
    },
    {
      src: '.images/princessContainerImage.png',
      name: 'Painting Brush',
      description: 'Quality brush to make your your job smooth and professional',
      type: 'Tools'
    },
  ];
  

  //? predefined filter functions
const filter = {
    ['Interior']: (record) => record.type === 'Interior',
    ['Exterior']: (record) => record.type === 'Exterior',
    ['Primer']: (record) => record.type === 'Primer',
    ['Tools']: (record) => record.type === 'Tools',
  }