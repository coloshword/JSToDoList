function getInput() {
    var str = document.getElementById("enter").value;
    var h6 = document.createElement("h6");
    h6.setAttribute("id", "item1");
    h6.append(str);
    document.getElementById("list").appendChild(h6);
}