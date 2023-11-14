function add() {
    let item = document.getElementById("input").value;
    let li = document.createElement("li");
    li.innerHTML = item;
    document.getElementById("items").appendChild(li);
    document.getElementById("input").value = "";
}

function remove() {
    let items = document.getElementById("items").lastChild;
    document.getElementById("items").removeChild(items);
}