// Code your solutions in this file

function writeCards() {
  const cards = ["Guadalupe", "Ollie", "Aki"];
  const surprise = "surprise";
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
  }
  return cards;
}
writeCards();

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
countDown(10);
