const days = document.querySelectorAll('.gymPlan-day');

window.addEventListener('hashchange', (e) => {
  switch (window.location.hash) {
    case '#monday':
      showDay('monday');
      break;
    case '#tuesday':
      showDay('tuesday');
      break;
    case '#wednesday':
      showDay('wednesday');
      break;
    case '#thursday':
      showDay('thursday');
      break;
    case '#friday':
      showDay('friday');
      break;
    case '#saturday':
      showDay('saturday');
      break;
    case '#sunday':
      showDay('sunday');
      break;
  }
});

const showDay = (dayName) => {
  days.forEach((day) => {
    if (day.classList.contains(`gymPlan-${dayName}`)) {
      day.classList.add('active-day');
    } else {
      day.classList.remove('active-day');
    }
  });
};

showDay('monday');
