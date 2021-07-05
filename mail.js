var users = [
    "resminiloris@gmail.com",
    "challeo@gmail.com",
    "dobby@gmail.com",
    "desyspano@gmail.com",
    "goro@libero.it",
]

var userMail = prompt("inserisci mail")

var isAllowed = false;

for (var i = 0; i < users.length; i++){
    if (userMail === users[i]) {
      console.log("mail: ", userMail);
      isAllowed = true;  
    }
}

console.log("mail is allowed: " + isAllowed)