const days = document.querySelectorAll('.gymPlan-day');

window.addEventListener('hashchange', (e) => {
  switch (window.location.hash) {
    case '#monday':
      showDay('monday');
      showModals('monday');
      break;
    case '#tuesday':
      showDay('tuesday');
      showModals('tuesday');
      break;
    case '#wednesday':
      showDay('wednesday');
      showModals('wednesday');
      break;
    case '#thursday':
      showDay('thursday');
      showModals('thursday');
      break;
    case '#friday':
      showDay('friday');
      showModals('friday');
      break;
    case '#saturday':
      showDay('saturday');
      showModals('saturday');
      break;
    case '#sunday':
      showDay('sunday');
      showModals('sunday');
      break;
  }
});

const showDay = (dayName) => {
  days.forEach((day) => {
    if (day.classList.contains(`gymPlan-${dayName}`)) {
      day.classList.add('active-day', 'tracker');
    } else {
      day.classList.remove('active-day', 'tracker');
    }
  });
};

showDay('monday');

// MODAL

const gymPlan = document.querySelector('.gymPlan');
const modalMain = document.querySelector('.modal');
const modals = document.querySelectorAll('.modal-day');

const showModals = (dayName) => {
  modals.forEach((modal) => {
    if (modal.classList.contains(`modal-${dayName}`)) {
      modal.classList.add('tracker', 'showModalDay');
    } else {
      modal.classList.remove('tracker', 'showModalDay');
    }
  });
};

showModals('monday');

gymPlan.addEventListener('click', (e) => {
  if (e.target.classList.contains('gymPlan-day-btn')) {
    modalMain.classList.add('modal-active');

    modalMain.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-x')) {
        modalMain.classList.remove('modal-active');
      }
    });
  }
});
