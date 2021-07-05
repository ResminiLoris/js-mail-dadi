var giocatore1 = Math.floor(Math.random() * 6) + 1;
var giocatore2 = Math.floor(Math.random() * 6) + 1;
console.log("giocatore uno: ", giocatore1);
console.log("giocatore due: ", giocatore2);

if (giocatore1 > giocatore2) {
    console.log ("vince giocatore 1")
}else if (giocatore1 < giocatore2){
    console.log ("vince giocatore 2")
}else{
    console.log ("pareggio!")
}

