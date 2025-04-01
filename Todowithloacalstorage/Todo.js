document.addEventListener('DOMContentLoaded', () => {
    const addbutton = document.querySelector('#add-btn')
    const todotext = document.querySelector('#todo-input')
    const listitem = document.querySelector('#todo-list')

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => rendertask(task));

    addbutton.addEventListener('click', () => {
        const tasktext = todotext.value.trim()
        if (tasktext === '') return

        const newtext = {
            id: Date.now(),
            text: tasktext,
            completed: false,
        }
        tasks.push(newtext)
        rendertask(newtext)
        savetasks()
        todotext.value = ""
    })

    function savetasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    function rendertask(task) {
        const li = document.createElement('li')
        li.setAttribute("data-id", task.id)
        li.innerHTML = `${task.text} <button>delete</button>`
        listitem.appendChild(li)

        // Toggle completion when clicking on task
        li.addEventListener('click', () => {
            task.completed = !task.completed
            li.classList.toggle('completed', task.completed)
            savetasks()
        })

        // Delete task when clicking on the delete button
        li.querySelector('button').addEventListener("click", (e) => {
            e.stopPropagation()  // Prevent triggering the task click event
            tasks = tasks.filter((t) => t.id !== task.id)
            li.remove()
            savetasks()
        })
    }
})
