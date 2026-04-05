const input = document.getElementById("taskInput")
const button = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")

button.addEventListener("click", () => {
  let text = input.value.trim()
  if(text === ""){
    alert("La tarea no puede estar vacia.") 
  } else try {
    addTask(text)
  } catch (error) {
    alert(error)
  }
  input.value = ""
})

list.addEventListener("click" , (e) => {
  if(e.target.tagName === "LI" && confirm("Deseas eliminar esta tarea?")) e.target.remove()
})

function addTask(text) {
  const tasks = document.querySelectorAll("#taskList li")
  tasks.forEach(task => {
    if(task.textContent === text) throw new Error("Ya existe una tarea con ese nombre, elige otro.")
  })
  
  let newTask = document.createElement("li")
  newTask.textContent = text
  list.appendChild(newTask)
}
