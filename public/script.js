function add() {
    let item = document.getElementById("input").value;
    let li = document.createElement("li");
    li.innerHTML = item;
    document.getElementById("items").appendChild(li);
    document.getElementById("input").value = "";
}

function remove() {
    let itemsAmount = document.getElementById("items").childNodes;
    let items = document.getElementById("items").lastChild;
    document.getElementById("items").removeChild(items);

    if (itemsAmount.length == 0) {
        alert("No items to remove.");
    }

}