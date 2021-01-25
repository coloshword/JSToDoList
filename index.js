// function that calls a button click when enter is pressed
function checkEnter() {
    var input = document.getElementById("enter");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("btn").click();
      }
    });
}

checkEnter()

function getInput() {
    var str = document.getElementById("enter").value;
    document.getElementById("enter").value = "";
    var h6 = document.createElement("h6");
    h6.append(str);
    var li = document.createElement("li");
    li.appendChild(h6);
    document.getElementById("list").appendChild(li);
}