
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const filterInput = document.querySelector("#filter-input");

let todos =  [];

// fungsi tambah
function addTodo() {
	const value =  { 
		id: Date.now(), 
		text: input.value.trim(),
		done: false
		
	}
	if (value.text === "") {
    alert("Catatan belum ditulis");
    return;
  }
	todos.push(value);
	saveTodos();
	addSingleTodo(value);
	input.value = "";
}

function toggleTodo(id) {
	const item = todos.find(t => t.id === id);
	if(item) {
		item.done = !item.done;
		saveTodos();
		renderTodos();

	}
}

function editTodo(id,newText) {
	const item = todos.find(t => t.id === id);
	if(item) {
		item.text = newText;
		saveTodos();
		renderTodos();

	}
}

// fungsi hapus 
function removeTodo(id) {
	todos = todos.filter(t => t.id !== id);
	saveTodos();
	renderTodos();
}

function filterTodos(keyword) {
	return todos.filter(t => 
		t.text.toLowerCase().includes(keyword.toLowerCase())
		);
}

// fungsi simpan
function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

// render 
function renderTodos() {
	todoList.innerHTML = "";

	const keyword = filterInput.value.trim();
	const result = keyword ? filterTodos(keyword) : todos;
  
	if (todos.length === 0) {
		todoList.innerHTML = "<span class='notif'>Belum ada catatan</span>";
		return;
	}
	if (result.length === 0) {
		todoList.innerHTML = "<span class='notif'>Ups..! Sepertinya tidak ada catatan yang cocok dengan pencarianmu</span>";
		return;
	}

  result.forEach(addSingleTodo);
    
}

function addSingleTodo(item) {
	const li = document.createElement("li");

    // check circle
    const check = document.createElement("div");
    check.className = "check";
    if (item.done) check.classList.add("done");
    check.dataset.action = "toggle";
    check.dataset.id = item.id;

    // text
    const span = document.createElement("span");
    span.textContent = item.text;
    if (item.done) span.classList.add("done-text");

    // actions
    const actions = document.createElement("div");
    actions.className = "actions";   

    if (!item.done) {
      const editBtn = document.createElement("button");      
      editBtn.className = "icon-edit";
      editBtn.dataset.action = "edit";
      editBtn.dataset.id = item.id;
      actions.appendChild(editBtn);
    }   

    const delBtn = document.createElement("button");   
    delBtn.className = "icon-del";
    delBtn.dataset.action = "delete";
    delBtn.dataset.id = item.id;
    actions.appendChild(delBtn); 

    li.append(check, span, actions);
    todoList.appendChild(li);
  
}

// event delegation
todoList.addEventListener("click", function(e){
  const action = e.target.dataset.action;
  const id = Number(e.target.dataset.id);
  if(!action) return;

  if(action === "toggle") toggleTodo(id);
  if(action === "delete") removeTodo(id);
  if(action === "edit") startEditMode(id);
});

// fungsi mode edit(muncul promt)
function startEditMode(id){
  const item = todos.find(t => t.id === id);
  const newText = prompt("Edit:", item.text);
  if(newText !== null && newText.trim() !== ""){
    editTodo(id, newText.trim());
  }
}

// fungsi load
function load(){
  const data = localStorage.getItem("todos");
  if(data){
    todos = JSON.parse(data);
  }
  renderTodos();
}

load();
addBtn.addEventListener("click", addTodo);
filterInput.addEventListener("input", renderTodos);



