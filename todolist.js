function todolist() {
	const item = document.getElementById("todoinput").value;
    if(item.trim() !== ""){
	const text = document.createTextNode(item)
	const newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todolist").appendChild(newItem);
    document.getElementById("todoinput").value = ""
    }
}

document.getElementById("todoinput").addEventListener("keydown",function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        todolist();
    }
});

