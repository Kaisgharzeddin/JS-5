// // Oppgave 1

var num1 = Number(prompt("Skriv inn det første tallet"))
var num2 = Number(prompt("Skriv inn det andre tallet"))
var num3 = Number(prompt("Skriv inn det tredje tallet"))

function tall() {
    result = num1 + num2 + num3;
    return console.log(result)
}

tall();

// // oppgave 2 

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

// // oppgave 3

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

// // oppgave 4 

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

// oppgave 5 

function halla() {
    let a1 = Math.round(Math.random()*20) 
    let a2 = Math.round(Math.random()*20) 
    let a3 = Math.round(Math.random()*20) 
    let a4 = Math.round(Math.random()*20) 
    let a5 = Math.round(Math.random()*20) 
    let a6 = Math.round(Math.random()*20) 
    let a7 = Math.round(Math.random()*20) 
    let a8 = Math.round(Math.random()*20) 
    let a9 = Math.round(Math.random()*20) 
    let a10 = Math.round(Math.random()*20)

    sum = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10
    
    return console.log("De tilfeldige tallene er", a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,  "og summen er", sum);
}

console.log(halla())

// Opgave 6 

let svarErFeil = false
alert("I dette programmet så skal du gjette et tall mellom 1 og 100")

function gjetting() {
    var b1 = Number(Math.round(Math.random()*100))
    
    svar = Number(prompt("Gjett et tall mellom 1 og 100"))

    while (svar < 1) {
        alert ("Vennligst skriv inn et tall som er mer enn 0")
        svar = Number(prompt("Gjett et tall mellom 1 og 100"))
    }
    while (svar > 100) {
        alert ("Vennligst skriv inn et tall som er mindre enn 100")
        svar = Number(prompt("Gjett et tall mellom 1 og 100"))
    }

    while (svarErFeil == false) {
        if (svar < b1) {
            alert("Tallet du har gjettet er for lavt")
            svar = Number(prompt("Gjett et tall mellom 1 og 100"))
        } else if (svar > b1) {
            alert("Tallet du har gjettet er for høyt")
            svar = Number(prompt("Gjett et tall mellom 1 og 100"))
        } else {
            alert("Grattulerer, du har gjettet riktig")
            svarErFeil = true
        }
    }


}

console.log(gjetting());



