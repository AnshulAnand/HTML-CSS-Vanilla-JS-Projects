const player = document.getElementById("player");
const computer = document.getElementById("computer");
const restart = document.getElementById("restart");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const modal = document.querySelector(".modal");
const body = document.getElementsByTagName("body");

rock.addEventListener("click", showModalRock);
paper.addEventListener("click", showModalPaper);
scissors.addEventListener("click", showModalScissors);

var playerPoints = 0;
var computerPoints = 0;

function showModalRock() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    modal.innerHTML = `
    <div id="modal-content">
    <h2>Draw!</h2>
    <h3>Computer chose</h3>
    <i id="rock" class="choice fas fa-hand-rock fa-10x"></i>
    <p>Rock</p>
  </div>
    `;
  } else if (computerChoice < 0.67) {
    computerPoints++;
    modal.innerHTML = `
    <div id="modal-content" class="lost">
    <h2>You lost!</h2>
    <h3>Computer chose</h3>
    <i id="paper" class="choice fas fa-hand-paper fa-10x"></i>
    <p>Paper</p>
  </div>
    `;

    computer.innerHTML = `
    <h2>computer</h2>
    <p>${computerPoints}</p>`;
  } else {
    playerPoints++;
    modal.innerHTML = `
    <div id="modal-content" class="win">
    <h2>You won!</h2>
    <h3>Computer chose</h3>
    <i id="scissors" class="choice fas fa-hand-scissors fa-10x"></i>
    <p>Scissors</p>
  </div>
    `;
    player.innerHTML = `
    <h2>computer</h2>
    <p>${playerPoints}</p>`;
  }

  modal.style.display = "block";
}

function showModalPaper() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    playerPoints++;
    modal.innerHTML = `
      <div id="modal-content" class="win">
      <h2>You won!</h2>
      <h3>Computer chose</h3>
      <i id="rock" class="choice fas fa-hand-rock fa-10x"></i>
      <p>Rock</p>
    </div>
      `;
    player.innerHTML = `
      <h2>computer</h2>
      <p>${playerPoints}</p>`;
  } else if (computerChoice <= 0.67) {
    modal.innerHTML = `
      <div id="modal-content">
      <h2>Draw!</h2>
      <h3>Computer chose</h3>
      <i id="paper" class="choice fas fa-hand-paper fa-10x"></i>
      <p>Paper</p>
    </div>
      `;
  } else {
    computerPoints++;
    modal.innerHTML = `
      <div id="modal-content" class="lost">
      <h2>You lost!</h2>
      <h3>Computer chose</h3>
      <i id="scissors" class="choice fas fa-hand-scissors fa-10x"></i>
      <p>Scissors</p>
    </div>
      `;
    computer.innerHTML = `
      <h2>computer</h2>
      <p>${computerPoints}</p>`;
  }
  modal.style.display = "block";
}

function showModalScissors() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerPoints++;
    modal.innerHTML = `
      <div id="modal-content" class="lost">
      <h2>You lost!</h2>
      <h3>Computer chose</h3>
      <i id="rock" class="choice fas fa-hand-rock fa-10x"></i>
      <p>Rock</p>
    </div>
      `;
    computer.innerHTML = `
      <h2>computer</h2>
      <p>${computerPoints}</p>`;
  } else if (computerChoice < 0.67) {
    playerPoints++;
    modal.innerHTML = `
      <div id="modal-content" class="win">
      <h2>You win!</h2>
      <h3>Computer chose</h3>
      <i id="paper" class="choice fas fa-hand-paper fa-10x"></i>
      <p>Paper</p>
    </div>
      `;
    player.innerHTML = `
      <h2>computer</h2>
      <p>${playerPoints}</p>`;
  } else {
    modal.innerHTML = `
      <div id="modal-content">
      <h2>Draw!</h2>
      <h3>Computer chose</h3>
      <i id="scissors" class="choice fas fa-hand-scissors fa-10x"></i>
      <p>Scissors</p>
    </div>
      `;
  }
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function restartGame() {
  computerPoints = 0;
  computer.innerHTML = `
    <h2>computer</h2>
    <p>${computerPoints}</p>`;
  playerPoints = 0;
  player.innerHTML = `
    <h2>computer</h2>
    <p>${playerPoints}</p>`;
}
