const container = document.querySelector("#container");
const box = document.querySelector("#gridBox");
const button = document.querySelector("button");


function generateGrid(boxes) {
    let gridLength = Math.sqrt(boxes)

    for (i=0;i<boxes;i++) {
        const makeBox = document.createElement("div");
        makeBox.id = "gridBox";
        ;
        console.log(gridLength);
        makeBox.addEventListener('mouseenter', () => {
        makeBox.style.backgroundColor = "pink";
        });
        container.appendChild(makeBox);
    }
    const allBoxes = document.querySelectorAll("#gridBox");
    allBoxes.forEach(box => {box.style.flexBasis = `calc(100% / ${gridLength} - 10px)`;}); //" + gridLength + "
}

button.addEventListener("click", (el) => {
    const allBoxes = document.querySelectorAll("#gridBox");
    allBoxes.forEach(el => el.remove());
    let input = prompt("Please enter grid size:");
        if (input > 100) {
            input = 100;
        }
    console.log(input);
    generateGrid(input);
})