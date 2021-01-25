function getInput() {
    var str = document.getElementById("enter").value;
    var h6 = document.createElement("h6");
    h6.append(str);
    var li = document.createElement("li");
    li.appendChild(h6);
    document.getElementById("list").appendChild(li);
}