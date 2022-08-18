// FOOTBALL APP ////////////////////////////////////////////////////////////////////////////////////////

const footballApp = document.querySelector('.footballApp');

document.addEventListener('DOMContentLoaded', (e) => {
  fetch('../../../data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        footballApp.innerHTML += `
        <div class="footballApp-clubCard">
          <div class="footballApp-clubCard-image">
            <img src="${item.image}" alt="logo" />
          </div>
          <h2 class="footballApp-clubCard-name">${item.name}</h2>
          <p class="footballApp-clubCard-p">Stadium - ${item.stadium}</p>
          <p class="footballApp-clubCard-p">Titles - ${item.titles}</p>
          <p class="footballApp-clubCard-p">Best player - ${item.best_player}</p>
          <button type="button" class="footballApp-clubCard-btn">
            See More
          </button>
        </div>
        `;
      });
      document.querySelectorAll('.footballApp-clubCard').forEach((card, i) => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('button')) {
            card.classList.add('footballApp-clubCard-closed');
            card.innerHTML = `
            <div class="footballApp-modal">
              <span title="Close details" class="footballApp-modal-closeBtn"><i class="fa-solid fa-xmark"></i></span>
              <p class="footballApp-modal-details">${data[i].details}</p>
            </div>
          `;
          }
          if (e.target.classList.contains('footballApp-modal-closeBtn')) {
            card.classList.remove('footballApp-clubCard-closed');
            card.innerHTML = `
            <div class="footballApp-clubCard-image">
              <img src="${data[i].image}" alt="logo" />
            </div>
            <h2 class="footballApp-clubCard-name">${data[i].name}</h2>
            <p class="footballApp-clubCard-p">Stadium - ${data[i].stadium}</p>
            <p class="footballApp-clubCard-p">Titles - ${data[i].titles}</p>
            <p class="footballApp-clubCard-p">Best player - ${data[i].best_player}</p>
            <button type="button" class="footballApp-clubCard-btn">
              See More
            </button>
          `;
          }
        });
      });
    });
});

/*
            const clubCard = e.target.parentElement;
            clubCard.classList.add('footballApp-clubCard-closed');
            clubCard.innerHTML = `
            <div class="footballApp-modal">
              <span title="Close details" class="footballApp-modal-closeBtn"><i class="fa-solid fa-xmark"></i></span>
              <p class="footballApp-modal-details">${data[i].details}</p>
            </div>
          `;
*/
