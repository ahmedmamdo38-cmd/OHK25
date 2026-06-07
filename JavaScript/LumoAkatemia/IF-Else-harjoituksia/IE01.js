function suurempi(a, b) {
  if (a > b) {
    console.log("Luku a " + a + " on suurempi, kuin luku b " + b);
  } else if (b > a) {
    console.log("Luku b " + b + " on suurempi, kuin luku a " + a);
  } else {
    console.log("Molemmat luvut ovat yhtääsuremmat");
  }
}
suurempi(4, 5);
