const container = document.querySelector("#container");

let size = 16;

createGrids(size);

const btn = document.querySelector("#btn");
btn.textContent = "Change Dimension";

function createGrids(size){
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          // Create a grid item element
          const gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          gridItem.style.flex = `0 0 ${100/size}%`;
          container.appendChild(gridItem);
        }
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(checkHover);
}

function checkHover(gridItem){
    gridItem.addEventListener("mouseover",() => {
    gridItem.classList.add("hover");
    console.log(gridItem);});
}


btn.addEventListener("click", ()=>{
    size = prompt("Enter the size of the grid");
    if(size<100){
        createGrids(size);
    }
    else{
        alert("Exceeds the size limit!");
        location.reload();
    }

});