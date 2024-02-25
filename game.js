const topScore = document.querySelector(".top-score-label .top-score");
const score = document.querySelector(".score");
const againButton = document.getElementById("again");
const checkButton = document.querySelector(".btn.check");
const tahminNumber = document.querySelector(".guess");
const msg = document.querySelector(".msg");
const bodybcc = document.querySelector("body");
const rastgeleSayı = Math.ceil(Math.random() * 20);
const tebrikSayısı = document.querySelector(".number");
console.log(rastgeleSayı);

let enYüksekSkor = 0;
let hak = 10;

checkButton.addEventListener("click", () => {
  // eger bos tıkladıysa
  if (!tahminNumber) {
    msg.textContent = "Lütfen Bir Sayı Giriniz!!";
    // eger bıldıyse
  } else if (tahminNumber == rastgeleSayı) {
    msg.textContent = "Tebrikler Bildiniz .....🙌👍";
    bodybcc.style.backgroundColor = "green";
    tebrikSayısı.textContent = rastgeleSayı;
    if (hak > enYüksekSkor) {
      hak = enYüksekSkor;
      topScore.textContent = hak;
    }
    // skor yanlıssa
  } else {
    // skor 1 den buyuk oldugu surece devam et
    if (hak > 1) {
      hak--;
      score.textContent = hak;
    }
  }
});
