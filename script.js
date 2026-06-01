const container = document.querySelector("#container");
const box = document.querySelector("#gridBox");
const button = document.querySelector("button");


function generateGrid(boxes) {
    let gridSize = boxes * boxes;
    console.log(gridSize);
    for (i=0;i<gridSize;i++) {
        const makeBox = document.createElement("div");
        makeBox.id = "gridBox";
        makeBox.style.opacity = "0";

        // console.log(gridLength);
        makeBox.addEventListener('mouseenter', () => {
            makeBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            makeBox.style.opacity -= "-0.10";
            //makeBox.style.backgroundColor = "pink";
        });
        container.appendChild(makeBox);
    }
    const allBoxes = document.querySelectorAll("#gridBox");
    allBoxes.forEach(box => {
        box.style.flexBasis = `calc(100% / ${boxes} - 1px)`;
        box.style.height = `calc(100% / ${boxes} - 1px)`;
    }); //" + gridLength + "
}

button.addEventListener("click", (el) => {
    const allBoxes = document.querySelectorAll("#gridBox");
    allBoxes.forEach(el => el.remove());
    let input = parseInt(prompt("Please enter grid size:"));
        if (input > 100) {
            input = 100;
        }
    console.log(input);
    generateGrid(input);
})