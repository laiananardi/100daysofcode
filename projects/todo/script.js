const task = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
var element = document.getElementsByTagName('li');


add.onclick = function () {

    var text = task.value;
    if (text == '') {
        alert('Please, write a task!');
    } else {
        
        list.innerHTML += `<li><lable>${text}</lable> <i class="far fa-trash-alt delete"></i></li>`;
        task.value = '';
    }

};

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
};

list.addEventListener('click', deletetask);

function deletetask (ev){
    if (ev.target.classList.contains('delete') ) {
        ev.target.parentElement.remove();
    }
}
