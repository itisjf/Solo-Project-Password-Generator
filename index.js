const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one-field")
let passwordTwoEl = document.getElementById("password-two-field")

function generateRandomPassword() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for(let i = 0; i < 15; i++) {
        randomPasswordOne += characters[generateRandomIndex()]
        randomPasswordTwo += characters[generateRandomIndex()]
    }
    passwordOneEl.textContent = randomPasswordOne
    passwordTwoEl.textContent = randomPasswordTwo
}

function generateRandomIndex() {
    let randomIndex
    randomIndex = Math.floor( Math.random() * characters.length )
    return randomIndex
}
