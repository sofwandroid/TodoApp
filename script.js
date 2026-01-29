
/*const btnToggle = document.querySelector('#toggleBtn');
const card = document.querySelector('.card');

btnToggle.addEventListener('click', () =>{
	card.classList.toggle('active');
})

const form = document.querySelector('#formTampilNama');
const nameInput = document.querySelector('#name');
const errorText = document.querySelector('.error');

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	if (nameInput.value === '' ) {
		errorText.textContent = 'nama wajib diisi';
	} else{
		errorText.textContent = '';
		console.log(nameInput.value);
	}
})*/

// Hari ke 5 DOM dinamis
/*const input = document.querySelector("#nameInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#nameList");

button.addEventListener("click", function(){
	const value = input.value.trim();
	if (value === ""){
		alert("nama harus diisi");
		return;
	}
	console.log(value);
	const li = document.createElement("li");
	li.textContent = value;
	list.appendChild(li);
	input.value = "";

});*/

// hari ke6,7,8,
/*const input = document.querySelector("#todoInput");
const button = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

todoList.addEventListener("click", function(e){
	if(e.target.tagName === "BUTTON"){ 
		e.target.parentElement.remove();
	}
});

button.addEventListener("click", function(){
	const value = input.value.trim();
	if (value === ""){
		alert(" catatan belum di tulis");
		return;
	}
	
	const li = document.createElement("li");
	const span = document.createElement("span");
	const btnHapus = document.createElement("button");
	span.textContent = value;		
	btnHapus.textContent = "Hapus";
	li.appendChild(span);
	li.appendChild(btnHapus);
	todoList.appendChild(li);
	input.value = "";

});*/

// hari 9 
/*const fruits = document.querySelector("#fruits");
const buah = ["apel","pisang","jeruk","cinta"];

for (const item of buah) {
    const li = document.createElement("li"); 
    li.textContent = item;
    fruits.appendChild(li);
}*/

/*const input = document.querySelector("#cariNama");
const hasil = document.querySelector("#hasil");

const nama = ["Andi", "Romis", "Cinta", "Kuya", "Hisyam"];


function render(listNama) {
	hasil.innerHTML = "";
	listNama.forEach(n =>{
		const li = document.createElement("li");
		li.textContent = n;
		hasil.appendChild(li);
	});
}

render(nama);

input.addEventListener("input", function(){
	const key = input.value.toLowerCase();
	const filtered = nama.filter(n => n.toLowerCase().includes(key));	
	render(filtered);
});*/


// hari 10
/*const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const signup = document.querySelector("#signup");
const btn = document.querySelector("button");

let validU = false;
let validE = false;
let validP = false;
let validC = false;

function updateButton(){
	btn.disabled = !(validU && validE && validP && validC);
	console.log(validU, validE, validP, validC, btn.disabled);
}

// username live
username.addEventListener("input", () => {
	const v = username.value.trim();
	validU = v.length >= 3;
	document.querySelector(".u-error").textContent =
		validU ? "" : "Username minimal 3 karakter";
	updateButton();
});

// email blur
email.addEventListener("blur", () => {
	const v = email.value.trim();
	validE = /.+@.+\..+/.test(v);
	document.querySelector(".e-error").textContent =
		validE ? "" : "Format email salah";
	updateButton();
});

// password strength
password.addEventListener("input", () => {
	const v = password.value;
	const p = document.querySelector(".p-strength");

	if (v.length < 6) {
		validP = false;
		p.textContent = "Buruk";
	} else if (v.length < 10) {
		validP = true;
		p.textContent = "Lumayan";
	} else {
		validP = true;
		p.textContent = "Kuat";
	}
	updateButton();
});

// confirm password
confirm.addEventListener("input", () => {
	const c = confirm.value;
	validC = c === password.value && c.length > 0;
	document.querySelector(".c-error").textContent =
		validC ? "" : "Password tidak sama";
	updateButton();
});

// submit
signup.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Signup sukses!");
	signup.reset();
	setTimeout(() => location.reload(), 300);
});*/

// hari 11 todolist dengan simpan di localstorage
/*const input = document.querySelector("#todoInput");
const button = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

// fungsi tambah
function addTodo() {
	const value =  { 
		id: Date.now(), 
		text: input.value.trim(),

	};
	if (value.text === "") {
    alert("Catatan belum ditulis");
    return;
  }
	todos.push(value);
	saveTodos();
	renderTodos();
	input.value = "";
}

// fungsi hapus 
function removeTodo(id) {
	todos = todos.filter(t => t.id !== id);
	saveTodos();
	renderTodos();
}

// fungsi simpan
function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
	todoList.innerHTML = "";
	if (todos.length === 0) {
		todoList.innerHTML = "<span>Belum ada catatan</span>";
		return;
	}
	todos.forEach((t) => {
		const li = document.createElement("li");
		const span = document.createElement("span");
		const btnHapus = document.createElement("button");	
		console.log(todos);	
		span.textContent = t.text;		
		btnHapus.textContent = "Hapus";
		btnHapus.dataset.id = t.id;		
		li.appendChild(span);
		li.appendChild(btnHapus);
		todoList.appendChild(li);
		
		
	});

}

// event hapus
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    removeTodo(Number(e.target.dataset.id));
  }
});
button.addEventListener("click", addTodo);*/

// hari 12,13,14
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

/*function renderTodos() {
	const keyword = filterInput.value.trim();
	const result = keyword ? filterTodos(keyword) : todos;
	todoList.innerHTML = "";

	if (todos.length === 0) {
		todoList.innerHTML = "<span>Belum ada catatan</span>";
		return;
	}
	result.forEach((item) => {
		const li = document.createElement("li");
		const title = document.createElement("span");	
		
		// text
		title.textContent = item.text;
		if(item.done) title.classList.add("done");

		// button group
		const actions = document.createElement("div");
		actions.className = "actions";

		// edit hanya muncul ketika not done
		if(!item.done){
			const editBtn = document.createElement("button");
			editBtn.textContent = "Edit";
			editBtn.dataset.action = "edit";
			editBtn.dataset.id = item.id;
			actions.appendChild(editBtn);

		}		

		const toggleBtn = document.createElement("button");
		toggleBtn.textContent = item.done ? "Undo" : "Done";
		toggleBtn.dataset.action = "toggle";
		toggleBtn.dataset.id = item.id;
		actions.appendChild(toggleBtn);


		const delBtn = document.createElement("button");
		delBtn.textContent = "Hapus";
		delBtn.dataset.action = "delete";
		delBtn.dataset.id = item.id;
		actions.appendChild(delBtn);

		li.appendChild(title);
		li.appendChild(actions);		
		todoList.appendChild(li);		
	});
}*/

// new render 
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



