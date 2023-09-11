// Toggle hambuger menu
const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navbar-default");
console.log(menuBtn)
function toggleMenu() {
  console.log('yes')
  navBar.classList.toggle("hidden");
}

if (navBar) {
  menuBtn.addEventListener("click", toggleMenu);
}






//? products for example
const tabRecords = [
    {
      src: './images/princessContainerImage.png',
      name: 'Matt Emulsion Paint',
      description: 'This type of paint has a matte finish and is great for hiding imperfections on walls',
      type: 'Interior',
    },
    {
      src:  './images/princessContainerImage.png',
      name: 'Emulsion Paints',
      description: 'This type of paint has a slight sheen and is more durable than flat paint.',
      type: 'Interior',

    },
    {
      src: './images/princessContainerImage.png',
      name: 'Satin Paints',
      description: 'This type of paint has a higher sheen than eggshell paint and is more durable.',
      type: 'Interior'
    },
    {
      src: './images/princessContainerImage.png',
      name: 'Matt Exterior Paint',
      description: 'This type of paint has a slight sheen and is more durable for the exterior part of the home.',
      type: 'Exterior'
    },
    {
      src: './images/princessContainerImage.png',
      name: 'Primer',
      description: 'This are you to fix the surface of your wall before painting .',
      type: 'Primer'
    },
    {
      src: './images/princessContainerImage.png',
      name: 'Painting Brush',
      description: 'Quality brush to make your your job smooth and professional',
      type: 'Tools'
    },
];

  //? predefined filter functions
const filter = {
    ['interior-example']: (record) => record.type === 'Interior',
    ['exterior-example']: (record) => record.type === 'Exterior',
    ['primer-example']: (record) => record.type === 'Primer',
    ['tools-example']: (record) => record.type === 'Tools',
}



  
let tabs = document.querySelectorAll(".tab");
let panels = document.querySelectorAll(".tab-panel")
const tabContentExample = document.querySelector("#tabContentExample")

const generateTabItems = (filterType) => {
    tabContentExample.innerHTML = '';

    const filteredRecords = tabRecords.filter(filter[filterType]);

    const mappedRecords = filteredRecords.map((record) => {
        const container = document.createElement('div'); // Create a new div element
        container.innerHTML = `
          
            <div class="bg-gray-200 h-auto">
                <img src="${record.src}" alt="productImage" class="w-2/3 mx-auto pt-10">
            </div>
            <h3 class="px-4 text-md mb-3 font-semibold text-center mt-4">${record.name}</h3>
            <p class="px-4 text-center text-gray-600 mb-4 line-clamp-3 text-sm">${record.description}</p>
            <a href="#" class="block px-12 py-2 border border-gray-200 rounded-lg mx-auto w-fit hover:bg-gray-100 hover:border-gray-200">Explore</a>
        `;
        container.classList.add("tab-panel", "inline-block", "pb-4", "cards", "bg-white", "hover:drop-shadow-xl", "rounded-lg")
        return container; // Return the first child of the container, which is the generated element
    });


  mappedRecords.forEach((record) => {
    console.log(record);
    tabContentExample.appendChild(record);
    console.log(mappedRecords)
  });
}

tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
        let tabTarget = tab.getAttribute("aria-controls");
        generateTabItems(tabTarget);
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

let elem = 'interior-example';
console.log(tabContentExample)
generateTabItems('interior-example');

