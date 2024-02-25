let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;
let enYüksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
  let tahmin = document.querySelector(".guess").value;
  // console.log(tahmin);

  //! tahmin girilmeden checke basınca
  if (!tahmin) {
    mesaj.textContent = "Lütfen geçerli bir sayı giriniz !!";
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz 🙌👌";
    document.querySelector(".check").disabled = true;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    //! top score kontrolu
  } else {
    //! tahmın yanlıssa
    //! skor 1 den buyuk oldugu surece hakkım olsun
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır ")
        : (mesaj.textContent = "Azalt");
    } else {
      mesaj.textContent = "Game Over😢";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 10;
  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log("yenı rastgele sayı ", rastgeleSayi);
});
