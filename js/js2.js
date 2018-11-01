let maara, taulu = [];

maara = prompt("Osallistujien määrä");

for (i=0; i<maara; i++) {
  taulu[i] = prompt("Osallistujan " + (parseInt(i)+1) + " nimi")
}

document.write("<ol>");

for (j=0; j<maara; j++) {
  document.write("<li>" + taulu[j] + "</li>");
}

document.write("</ol>")