let taulu = [];

for (i=0; i<5; i++) {
  taulu[i] = prompt("Anna luku");
}

taulu.reverse();

for (i=0; i<5; i++) {
  document.write(taulu[i] + " ");
}