// FOOTBALL APP ////////////////////////////////////////////////////////////////////////////////////////

const footballApp = document.querySelector('.footballApp');

const getFootballData = () => {
  fetch('../../../data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data.forEach(item => {
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
        </div>`
      })
    });
};

getFootballData();
