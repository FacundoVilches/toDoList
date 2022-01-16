const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')
const dateHour = document.getElementById('dateHour')
const dateMinute = document.getElementById('dateMinute')
const dateSecond = document.getElementById('dateSecond')
const input = document.getElementById('input')
const body = document.querySelector('body')
const list = document.querySelector('.list')
const date = document.querySelector('.date')

const tasksContainer = document.getElementById('tasksContainer')

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' })
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' })
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' })
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' })
    dateHour.textContent = date.toLocaleString('es', { hour: 'numeric' })
    dateMinute.textContent = date.toLocaleString('es', { minute: '2-digit' })
    dateSecond.textContent = date.toLocaleString('es', { second: '2-digit' })
}

const addNewTask = event => {
    event.preventDefault()
    const { value } = event.target.taskText
    if (!value) return
    const task = document.createElement('div')
    // task.innerHTML = `
    //     <td> ${input.value} </td>
    //     <td> <i class="fa fa-trash" aria-hidden="true"></i>
    //     </td>
    // `
    task.classList.add('task', 'roundBorder')
    task.addEventListener('click', changeTaskState)
    task.textContent = value
    tasksContainer.prepend(task)
    event.target.reset()
}

const changeTaskState = event => {
    event.target.classList.toggle('done')
}

const order = () => {
    const done = []
    const toDo = []
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done]
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

function deleteAll() {
    window.location.reload()
}

setDate()
console.log(dateHour.textContent)
if (18 <= dateHour.textContent && dateHour.textContent < 20) { //Atardecer
    //body.style.backgroundColor = '#ff5a01'
    body.style.backgroundColor = 'rgb(255,90,1)'
    body.style.background = 'linear-gradient(90deg, rgba(255,90,1,1) 20%, rgba(4,20,69,1) 100%)'
    list.style.backgroundColor = '#253031'
    date.style.color = 'white'
} else if (20 <= dateHour.textContent || dateHour.textContent < 6) { //Noche
    //body.style.backgroundColor = '#041445'
    body.style.backgroundColor = 'rgb(4,20,69)'
    body.style.background = 'linear-gradient(90deg, rgba(4,20,69,1) 24%, rgba(2,11,39,1) 76%)'
    list.style.backgroundColor = '#253031'
    date.style.color = 'white'
} else if (6 <= dateHour.textContent && dateHour.textContent < 8) { //Amanecer
    //body.style.backgroundColor = '#85a9c2';
    body.style.backgroundColor = 'rgb(4,20,69)'
    body.style.background = 'linear-gradient(90deg, rgba(4,20,69,1) 0%, rgba(133,169,194,1) 100%)'
    list.style.backgroundColor = '#253031'
    date.style.color = 'white'
} else if (8<=dateHour.textContent && dateHour.textContent<10){ //Media mañana
    //body.style.backgroundColor = '#2076cd';
    body.style.backgroundColor = 'rgb(133,169,194)'
    body.style.background = 'linear-gradient(90deg, rgba(133,169,194,1) 0%, rgba(32,118,205,1) 100%)'
    list.style.backgroundColor = '#253031'
    date.style.color = 'white'
} else if (10<= dateHour.textContent && dateHour.textContent <14) { //Mediodía
    //body.style.backgroundColor = '#f1ff67';
    body.style.backgroundColor = 'rgb(32,118,205)'
    body.style.background = 'linear-gradient(90deg, rgba(32,118,205,1) 29%, rgba(241,255,103,1) 100%)'
    list.style.backgroundColor = '#fff'
    date.style.color = 'black'
} else if (14<=dateHour.textContent && dateHour.textContent<18){ //Media tarde
    //body.style.backgroundColor = '#f1ff67';
    body.style.backgroundColor = 'rgb(241,255,103)'
    body.style.background = 'linear-gradient(90deg, rgba(241,255,103,1) 15%, rgba(255,90,1,1) 100%)'
    list.style.backgroundColor = '#fff'
    date.style.color = 'black'
}

let interval = setInterval(setDate, 1000)
