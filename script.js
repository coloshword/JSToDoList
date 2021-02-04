function createButtons() {
    var button = document.createElement("button");
    button.classList = "add";
    button.innerHTML = "Add";
    return button;
}

function createTextFields() {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("style", "width: 100px");
    return input;
}
function addInputs() {
    var inputArea = document.querySelectorAll(".inputBox");
    inputArea.item(0).appendChild(createTextFields());
    inputArea.item(0).appendChild(createButtons());
    inputArea.item(1).appendChild(createTextFields());
    inputArea.item(1).appendChild(createButtons());
    inputArea.item(2).appendChild(createTextFields());
    inputArea.item(2).appendChild(createButtons());
    inputArea.item(3).appendChild(createTextFields());
    inputArea.item(3).appendChild(createButtons());
    inputArea.item(4).appendChild(createTextFields());
    inputArea.item(4).appendChild(createButtons());
}

addInputs();