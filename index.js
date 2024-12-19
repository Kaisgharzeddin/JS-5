// Oppgave 1

var num1 = Number(prompt("Skriv inn det første tallet"))
var num2 = Number(prompt("Skriv inn det andre tallet"))
var num3 = Number(prompt("Skriv inn det tredje tallet"))

function tall() {
    result = num1 + num2 + num3;
    return console.log(result)
}

tall();

// oppgave 2 

var tall1 = Math.round(Math.random()*10)
var tall2 = Math.round(Math.random()*10)

function sammenlign() {
    if (tall1>tall2) {
        return console.log(`${tall1} er større enn ${tall2}`)
    } else if (tall1<tall2) {
        return console.log(`${tall2} er større enn ${tall1}`)
    } else {
        return console.log(`${tall1} er lik ${tall2}`)
    }
}

sammenlign();

// oppgave 3

var n1 = Number(prompt("Skriv inn et tall"))
var n2 = Number(prompt("Skriv inn et tall"))
var n3 = prompt("Skriv inn form for kalkulering : +, -, *, /")

function kalkulator() {
    if (n3 == "+") {
        return console.log(n1 + n2)
    } else if(n3 == "-"){
        return console.log(n1 - n2)
    } else if (n3 == "*") {
        return console.log(n1 * n2)
    } else if (n3 == "/") {
        return console.log(n1 / n2)
    } else {
        return console.log(prompt("Vennligst skriv inn et av disse regnemetodene: +, -, *, /"))
    }
}
kalkulator();

// oppgave 4 

alert("Du skal skrive et tall som er mellom 0-100, ikke mer")
var nu1 = Number(prompt("Skriv inn det minste talet som programmet skal generere"))

while (nu1 < 0) {
    nu1 = prompt("Vennligst skriv inn et tall som er mer enn 0:")
    if(nu1>0){
        break
    }
} 

var nu2 = Number(prompt("Skriv inn det største talet som programmet skal generere"))


while (nu2 < nu1) {
    nu2 = prompt("Vennligst skriv inn et tall som er mindre enn det minste tallet:")
} 

function rano(nu2, nu1){
    var randomNumber = Math.round(Math.random()*100)
    if (randomNumber < nu1 || randomNumber > nu2) {
        console.log(rano(nu2, nu1));
    } else {
        return randomNumber
    }
}

console.log(rano(nu2, nu1));



