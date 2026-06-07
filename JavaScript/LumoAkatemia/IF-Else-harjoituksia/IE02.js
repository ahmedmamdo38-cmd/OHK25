function suurempi(a, b, c) {
  if (a > b && a > c) {
    console.log(
      "Luku a " + a + " on suurempi, kuin luvut b: " + b + " ja c: " + c,
    );
  } else if (b > a && b > c) {
    console.log(
      "Luku b " + b + " on suurempi, kuin luvut a: " + a + " ja c: " + c,
    );
  } else if (c > a && c > b) {
    console.log(
      "Luku c " + c + " on suurempi, kuin luvut a: " + a + " ja b: " + b,
    );
  } else {
    console.log("Kaikki luvut ovat yhtä suuria");
  }
}
suurempi(2, 5, 100);
