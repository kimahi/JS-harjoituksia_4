let num, taulu=[];

for (;;) {
  num = prompt("Anna numero (1-1000)");

  if (num < 1 || num > 1000) {
    alert("Numero väliltä 1-1000!!!!!!!");
  }
  else if (taulu.includes(num)) {
    alert("Luku jo annettu lopetetaan")
    break;
  }
  taulu.push(num);
}