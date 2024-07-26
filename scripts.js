const container = document.querySelector("#container");

let size = 16;

createGrids(size);

const btn = document.querySelector("#btn");
btn.textContent = "Change Dimension";

function createGrids(size){
    container.innerHTML = "";
    const itemSize = 100/size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          // Create a grid item element
          const gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          gridItem.style.flex = `0 0 ${itemSize}%`;
          gridItem.style.height = `${itemSize}%`
          container.appendChild(gridItem);
        }
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover",() => {
            gridItem.style.cssText = "background-color: red;";
            });
    });
}


btn.addEventListener("click", ()=>{
    let newSize = prompt("Enter the size of the grid");
    newSize = parseInt(newSize);
    if(newSize<=100 && newSize>0){
        size = newSize;
        createGrids(size);
    }
    else{
        alert("Exceeds the size limit!");
        // location.reload();
    }

});




