let ctr = 1;

function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (!value) return; // Avoid adding empty todos


  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "todo-" + ctr);

  newDiv.innerHTML = `
    <div>${value}</div>
    <button onclick="deleteTodo('todo-${ctr}')">Delete</button>
  `;

  document.getElementById("todoContainer").appendChild(newDiv);
  input.value = ""; // Clear input
  ctr++;
}

function deleteTodo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}