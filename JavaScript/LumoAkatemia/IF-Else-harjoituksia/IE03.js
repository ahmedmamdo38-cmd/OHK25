function jaollinen(luku) {
  if (luku % 5 == 0 && luku % 11 == 0) {
    console.log("Luku on jaollinen 5:llä ja 11:llä");
  } else if (luku % 5 == 0 || luku % 11 == 0) {
    console.log("Luku jaolline 5:llä tai 11:llä");
  } else {
    console.log("Luku ei jaollinen 5:llä ja 11:llä");
  }
}
jaollinen(2);
