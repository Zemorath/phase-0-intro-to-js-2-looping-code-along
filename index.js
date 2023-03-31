// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names) {
    const namesWithMessages = [];
    for (let i = 0; i < names.length; i++) {
        namesWithMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return namesWithMessages;
}

function countDown(n) {
    let i = 0;
    while (i <= n) {
        console.log(n)
        n--;
    }
}