const task = document.querySelector("#task");
const add = document.querySelector("#add");
var list = document.querySelector("#list");
const element = document.getElementsByTagName('li');
const today = document.getElementsByClassName('today')[0]
const header = document.querySelector(".header")
var date = new Date()
var day = date.getDate()
var month = date.getMonth()
var hour = date.getHours()
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];




// background, day and month
function load() {

    switch (month) {
        case 0:
            month = 'Janeiro'
            break
        case 1:
            month = 'Feveriro'
            break
        case 2:
            month = 'Março'
            break
        case 3:
            month = 'Abril'
            break
        case 4:
            month = 'Maio'
            break
        case 5:
            month = 'Junho'
            break
        case 6:
            month = 'Julho'
            break
        case 7:
            month = 'Agosto'
            break
        case 8:
            month = 'Setembro'
            break
        case 9:
            month = 'Outubro'
            break
        case 10:
            month = 'Novembro'
            break
        case 11:
            month = 'Dezembro'
            break

        default:
            month = 'mês'
    }

    if (hour >= 0 && hour < 12) {

        header.style.backgroundImage = 'url(img/morning.jpg)'
        document.body.style.background = '#D98F07'

    } else if (hour >= 12 && hour <= 18) {

        header.style.backgroundImage = 'url(img/afternoon.jpg)'
        document.body.style.background = '#D97652'

    } else {

        header.style.backgroundImage = 'url(img/night.jpg)'
        document.body.style.background = '#222559'
    }

    today.innerHTML = `<h2>${day} de ${month}</h2>`
    showTasks()
}   

// add a task
add.onclick = function () {
   
    var text = task.value
    if (text == '') {
        alert('Please, write a task!')
    } else {
        tasks.push(text)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        task.value = ''
    }
    // add a task to the list
    list.innerHTML +=   `<li>
                                <lable>${text}</lable>    
                                <i id="" class="far fa-trash-alt delete"></i> 
                            </li>`

};

// add a task with enter 
function enterAsClick(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Cancel the default action, if needed
      add.click(); // Trigger the button element with a click
    }
  };
  
  task.addEventListener('keyup', enterAsClick);

// show all tasks
function showTasks(){
    tasks.forEach(function (element, index) {
        list.innerHTML +=   `<li>
                                <lable>${element}</lable>    
                                <i id="${index}" class="far fa-trash-alt delete"></i> 
                            </li>`

    });
}

// mark as checked
list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked')
    }
};

// delete a task
list.addEventListener('click', deletetask)

function deletetask(ev) {
    if (ev.target.classList.contains('delete')) {
        ev.target.parentElement.remove()
        var id = this.getAttribute('id')
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}