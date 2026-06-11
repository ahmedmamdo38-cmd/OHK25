function isoVaiPieni(kirjain) {
  let isoKirjain = /[A-ÖÅŒÆ]/;
  let pieniKirjain = /[a-öåœæ]/;

  if (kirjain.match(isoKirjain)) {
    console.log("'" + kirjain + "' on iso kirjain.");
  } else if (kirjain.match(pieniKirjain)) {
    console.log("'" + kirjain + "' on pieni kirjain.");
  } else {
    console.log("'" + kirjain + "' ei ole kirjain.");
  }
}
isoVaiPieni("A");
isoVaiPieni("a");
isoVaiPieni("?");
