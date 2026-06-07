let input = prompt("Anna merkki tai kirjain:");

if (isNaN(input)) {
  console.log("Syötit tekstiä:" + input);
} else {
  console.log("Syötit numeroa:" + input);
}
