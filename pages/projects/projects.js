// CAROUSEL ////////////////////////////////////////////////////////////////////////////////////////////

const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const rightBtn = document.querySelector('.carousel-button-right');
const leftBtn = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide, targetDot, targetIndex) => {
  const currentDot = dotsNav.querySelector('.current-slide');
  carouselTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');

  if (targetIndex === 0) {
    leftBtn.classList.add('carousel-btn-hidden');
    rightBtn.classList.remove('carousel-btn-hidden');
  } else if (targetIndex == slides.length - 1) {
    leftBtn.classList.remove('carousel-btn-hidden');
    rightBtn.classList.add('carousel-btn-hidden');
  } else {
    leftBtn.classList.remove('carousel-btn-hidden');
    rightBtn.classList.remove('carousel-btn-hidden');
  }
};

leftBtn.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const slideIndex = slides.findIndex((slide) => slide === prevSlide);
  const targetDot = dots[slideIndex];

  moveToSlide(currentSlide, prevSlide, targetDot, slideIndex);
  if (prevSlide == currentSlide) {
    leftBtn.classlist.add('carousel-btn-hidden');
    moveToSlide(currentSlide, prevSlide, targetDot);
  }
});

rightBtn.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const slideIndex = slides.findIndex((slide) => slide === nextSlide);
  const targetDot = dots[slideIndex];

  if (slideIndex != -1)
    moveToSlide(currentSlide, nextSlide, targetDot, slideIndex);
});

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
});

// TASK LIST //////////////////////////////////////////////////////////////////////////////////////////

const taskInput = document.querySelector('.taskList-form-input');
const addTaskBtn = document.querySelector('.taskList-form-btn');
const taskList = document.querySelector('.taskList-ul');
const filterBtn = document.querySelector('.filter-tasks');

// getting tasks from local storage
document.addEventListener('DOMContentLoaded', (e) => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
    <li class="task-item">${task}</li>
    <div class="taskList-wrapper">
      <button class="completed-btn"><i class="fa-solid fa-square-check"></i></button>
      <button class="trash-btn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  `;
    taskList.appendChild(newTask);
  });
});

// adding new task
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newTask = document.createElement('div');
  newTask.classList.add('task');
  newTask.innerHTML = `
    <li class="task-item">${taskInput.value}</li>
    <div class="taskList-wrapper">
      <button class="completed-btn"><i class="fa-solid fa-square-check"></i></button>
      <button class="trash-btn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  `;
  if (taskInput.value === '') {
    alert('Please add some task!');
    return;
  } else {
    taskList.appendChild(newTask);
    saveLocalTasks(taskInput.value);
  }
  taskInput.value = '';
  taskInput.focus();
});

// deleting and checking task
taskList.addEventListener('click', (e) => {
  const task = e.target;
  if (task.classList[0] === 'trash-btn') {
    task.parentElement.parentElement.classList.add('task-delete-effect');
    setTimeout(() => {
      task.parentElement.parentElement.remove();
      removeLocalTasks(task);
    }, 300);
  }
  if (task.classList[0] === 'completed-btn') {
    task.parentElement.parentElement.classList.toggle('completed-task');
  }
});

// filtering tasks
filterBtn.addEventListener('click', (e) => {
  const tasks = taskList.childNodes;
  tasks.forEach((task) => {
    switch (e.target.value) {
      case 'all':
        task.style.display = 'flex';
        break;
      case 'completed':
        if (task.classList.contains('completed-task')) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!task.classList.contains('completed-task')) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }
        break;
    }
  });
});

// local storage
function saveLocalTasks(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeLocalTasks(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const taskIndex = task.parentElement.parentElement.children[0].innerText;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
