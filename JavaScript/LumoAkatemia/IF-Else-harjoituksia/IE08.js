function kirjainNumeroErikoismerkki(merkki) {
  let numero = /[0-9]/i;
  let kirjain = /[a-öA-Ö]/i;
  if (merkki.length == 1 && merkki.match(kirjain)) {
    console.log("Merkki on kirjain. ");
  } else if (merkki.match(numero)) {
    console.log("Merkki on numero.");
  } else {
    console.log("Merkki on erikoismerkki.");
  }
}
kirjainNumeroErikoismerkki("?");
// kirjainNumeroErikoismerkki("9");
// kirjainNumeroErikoismerkki("a");
