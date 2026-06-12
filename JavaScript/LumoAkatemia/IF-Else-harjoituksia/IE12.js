function viikonpaiva(paivanNro) {
  if (paivanNro == 1) {
    console.log("Päivä on: Maanantai");
  } else if (paivanNro == 2) {
    console.log("Päivä on: Tiistai");
  } else if (paivanNro == 3) {
    console.log("Päivä on: Keskiviikko");
  } else if (paivanNro == 4) {
    console.log("Päivä on: Torstai");
  } else if (paivanNro == 5) {
    console.log("Päivä on: Perjantai");
  } else if (paivanNro == 6) {
    console.log("Päivä on: Lauantai");
  } else if (paivanNro == 7) {
    console.log("Päivä on: Sununtai");
  } else {
    console.log("Anna numero välillä 1-7");
  }
}
viikonpaiva(9);
