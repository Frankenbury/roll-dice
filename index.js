// function to roll the dice
const rollEm = (e) => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const diceImage1 = "images/dice" + randomNumber1 + ".png";
  const image1 = document.querySelector(".img1");
  image1.setAttribute("src", diceImage1);

  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const diceImage2 = "images/dice" + randomNumber2 + ".png";
  const image2 = document.querySelector(".img2");
  image2.setAttribute("src", diceImage2);

  const winMessage = document.querySelector(".header");
  if (randomNumber1 > randomNumber2) {
    winMessage.innerHTML = "🇺🇸 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    winMessage.innerHTML = "🏴‍☠️ Player 2 wins!";
  } else {
    winMessage.innerHTML = "It's a tie!";
  }
}

const rollBtn = document.getElementById('rollBtn');
rollBtn.addEventListener('click', rollEm);