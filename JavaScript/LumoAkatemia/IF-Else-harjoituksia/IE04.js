function karkausvuosi(vuosi) {
  if (vuosi % 4 == 0) {
    console.log("Vuosi on karkausvuosi ");
  } else if (vuosi % 400 == 0) {
    console.log("Vuosi on karkausvuosi");
  } else if (vuosi % 100 == 0) {
    console.log("Vuosi ei ole karkausvuosi");
  } else {
    console.log("Vuosi ei ole karkausvuosi");
  }
}
karkausvuosi(2026);
