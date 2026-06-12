function aanestys(ika) {
  ika = parseInt(ika);

  if (ika >= 18) {
    console.log("Voit äänestää.");
  } else if (isNaN(ika)) {
    console.log("Et antanut numero. Sinun pitää antaa numeroa.");
  } else {
    console.log("Et voi äänestää.");
  }
}
aanestys(19);
aanestys(7);
aanestys("moi");
