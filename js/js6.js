let num, pituus, keski, pari, lista=[];

do {
  num = prompt("Anna numero (nolla lopettaa)");
  if (num!=0) {
    lista.push(num);
  }
} while (num!=0);

pituus = lista.length;
pari = lista.length%2;
keski = (pituus/2).toFixed();

lista.sort(function(a, b) {return a - b});
if (pari==0) {
  document.write("Mediaani on " + (parseInt(lista[keski])+parseInt(lista[keski-1]))/2);
}
else {
  document.write("Mediaani on " + lista[keski-1]);
}