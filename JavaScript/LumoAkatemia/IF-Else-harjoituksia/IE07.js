function onkoVokaaliTaiKonsonantti(merkki) {
  if (merkki.match(/[aeiouy,AEIOUY]/)) {
    console.log("Annettu merkki on vokaali!!");
  } else if (merkki.match(/[ptkdmnshrlvj,PTKDMNSHRLVJ]/)) {
    console.log("Annettu merkki on konsonantti!!");
  } else {
    console.log("Annettu merkki ei ole vokaali tai konsonantti!");
  }
}
onkoVokaaliTaiKonsonantti("£");
