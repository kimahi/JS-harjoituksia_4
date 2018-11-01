let koirot = [];

for (i=0; i<6; i++) {
  koirot[i] = prompt("Koiron nimi");
}

koirot.sort();
koirot.reverse();

document.write("<ul>");

for (j=0; j<6; j++) {
  document.write("<li>" + koirot[j] + "</li>");
}

document.write("</ul>");