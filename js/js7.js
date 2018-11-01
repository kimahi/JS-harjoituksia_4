let voitto, maara, lista=[];
let kerta = 1;
let m = 0;
let tyhja = 0;

maara = prompt("Montako äänestäjää");

for (i=0; i<maara; i++){
  lista[i]=prompt(parseInt(i+1) + ". ääni");
  if (lista[i]===0) {
    tyhja++;
  }
}

for (w=0; w<lista.length; w++) {
  for (j=w; j<lista.length; j++) {
    if (lista[w] === lista[j])
      m++;
    if (kerta<m) {
      kerta=m;
      voitto = lista[w];
    }
  }
  m=0;
}
document.write("Voittaja on " + voitto + "! Ääniä hän sai " + kerta + ". Tyhjiä tuli " + tyhja) ;