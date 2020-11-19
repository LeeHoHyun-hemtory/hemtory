const gameMode = ['EASY', 'NORMAL', 'HARD'];

function init() {
  const bg = document.querySelector('#bg');
  const initDiv = document.createElement('div');
  initDiv.classList.add('initDiv');
  initDiv.innerHTML = `<p class='gameName'>ENEMY RAIN</p><button class='button' id='btnStart'>GAME START</button>`;
  bg.appendChild(initDiv);
  initDiv.addEventListener('click', (e) => {
    if(e.target.id === 'btnStart') {
      while(initDiv.firstChild) {
        initDiv.removeChild(initDiv.firstChild);
      }

      const btnModeArr = selectMode(gameMode);
      btnModeArr.forEach(mode => initDiv.innerHTML += mode);

      bg.appendChild(initDiv);
    }

    if(gameMode.includes(e.target.id)) {
      const speed = gameMode.indexOf(e.target.id);
      
      bg.removeChild(bg.firstChild);

      gameStart((speed + 1) * 2);
    }
  });
}

function selectMode(modes) {
  return modes.map(mode => `<button class='button' id='${mode}'>${mode}</button>`);;
}

function gameStart(speed) {
  const bg = document.querySelector('#bg');
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('heroDiv');
  bg.appendChild(heroDiv);

  const hero = new Hero(0, 0, {x: 0, y: 0});
  const enemyArr = [];
  let enemyID = 0;

  window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') {
      console.log(e.key);
      hero.xPosition += 10;
      hero.img.x = -105;
    }
    else if(e.key === 'ArrowLeft') {
      console.log(e.key);
      hero.xPosition -= 10;
      hero.img.x = -70;
    }
    console.log(hero.img.x)
    heroDiv.style.backgroundPositionX = `${hero.img.x}px`;
    heroDiv.style.left = `${hero.xPosition}px`;
  });

  const enemySpawn = setInterval(() => {
    const xInit = Math.floor(Math.random() * window.innerWidth) - 45;
    const enemy = new Enemy(xInit, 0);
    const enemyDiv = document.createElement('div');
    enemyDiv.classList.add('enemyDiv');
    enemyDiv.id = enemyID;
    enemyID++;
    enemyDiv.style.left = `${xInit}px`;
    bg.appendChild(enemyDiv);
    enemyArr.push({enemyDiv, enemy});
  }, 3000 / speed);

  const enemyMove = setInterval(() => {
    enemyArr.forEach((el, idx) => {
      el.enemy.yPosition += 50;
      el.enemyDiv.style.top = `${el.enemy.yPosition}px`;
      if(el.enemy.yPosition > window.innerHeight - 200) {
        document.getElementById(`${el.enemyDiv.id}`).remove();
        enemyArr.splice(idx, 1);
      }
    });
  }, 3000 / speed);
}

init();

// gameStart();