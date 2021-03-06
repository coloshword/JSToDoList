function createButtons(numb) {
    let button = document.createElement("button");
    button.classList = "add";
    button.setAttribute("id", numb);
    button.setAttribute("onclick", "addTask(this.id)");
    button.innerHTML = "Add";
    return button;
}

function createTextFields(id) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id + "field");
    input.setAttribute("style", "width: 100px");
    return input;
}

function addInputs() {
    var inputArea = document.querySelectorAll(".inputBox");
    inputArea.item(0).appendChild(createTextFields(0));
    inputArea.item(0).appendChild(createButtons(0));
    inputArea.item(1).appendChild(createTextFields(1));
    inputArea.item(1).appendChild(createButtons(1));
    inputArea.item(2).appendChild(createTextFields(2));
    inputArea.item(2).appendChild(createButtons(2));
    inputArea.item(3).appendChild(createTextFields(3));
    inputArea.item(3).appendChild(createButtons(3));
    inputArea.item(4).appendChild(createTextFields(4));
    inputArea.item(4).appendChild(createButtons(4));
}

addInputs();

// on click event to add input to html
function addTask(id) {
    // id is the id of the button, and id+"field" is the id of the corresponding text field
    let input =  document.getElementById(id + "field");
    let text = input.value;
    //now we have the text, we gotta add it to the correct box:
    let inputBoxesIndex = ["todayBox", "tomorrowBox", "thisWeekBox", "NextWeekBox", "laterBox"];
    let ol = document.querySelector("." + inputBoxesIndex[id]);
    let h3 = document.createElement("h3");
    text = document.createTextNode(text);
    h3.appendChild(text);
    let li = document.createElement("li");
    li.appendChild(h3);
    li.setAttribute("style", "position: relative; left: 2vw; bottom : 6vh;");
    ol.appendChild(li);
    input.value = "";
}

