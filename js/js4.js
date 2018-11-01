let num, taulu = [];

num=1

for (i=0; num!=0; i++) {
  num = prompt("Anna numero (nolla lopettaa)");
  if (num!=0) {
    taulu[i] = num;
  }
}

taulu.sort(function(a, b) {return a - b});
document.write(taulu.reverse());