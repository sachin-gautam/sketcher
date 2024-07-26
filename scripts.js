const container = document.querySelector("#container");



for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      // Create a grid item element
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      container.appendChild(gridItem);
    }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover",() => {
        gridItem.style.cssText = "background-color: red;";
        console.log(gridItem);
    });
})






