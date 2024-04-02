const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output")

inputName.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.currentTarget.value.trim() === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.currentTarget.value.trim();
    }
    
    //console.log(outputName.textContent);
};

