//chiedo all'utente una parola
const parola = prompt('immetti una parola da testare')
//ribalto la parola
let reversed =''
for (let i = parola.length -1; i >= 0; i--) {
    reversed += parola[i]
}
//SE la parola ribaltata é uguale a quella data dall'utente
if (reversed == parola) {
    //stampo 'é palindroma'
    console.log('é palindroma')
//ALTRIMENTI
}else{
    //stampo 'non é palindroma'
    console.log('non é palindroma')
}


//? FUNCTION VERSION-|

function palOrNot(){
    x = prompt('immetti una parola da testare')
    let reversed =''
for (let i = x.length -1; i >= 0; i--) {
    reversed += x[i]
}

if (reversed == x) {
    console.log('é palindroma')
    return true 
}else{
    console.log('non é palindroma')
    return false 
}
}
//TODO Un-comment this line to call the function
//palOrNot()

//!#### EX. 2 ####

//salvo il numero scelto dall'utente
const number = parseInt(prompt('immetti un numero'))
const select = prompt('scegli "pari" o "dispari"')
//genero un numero randomico per il pc
let randomNum = Math.floor(Math.random() * 10)
//sommo i due numeri insieme e salvo il valore
let sum = number + randomNum
//SE la somma dei numeri da un numero pari
if (sum % 2 == 0) {
    //dichiaro vincitore chi ha scelto pari
    console.log('ha vinto pari')
    if (select == 'pari') {
        console.log('congratulazioni hai vinto')
    }else{
        console.log('spiacente, hai perso')
    }
//ALTRIMENTI
}else{
    //dichiaro vincitore chi ha scelto dispari
    console.log('ha vinto dispari')
    if (select == 'dispari') {
        console.log('congratulazioni hai vinto')
    }else{
        console.log('spiacente, hai perso')
    }
}


//? FUNCTION VERSION-|

function evenOddGame(num,selection){
    let randomNum = Math.floor(Math.random() * 10)
    let sum = num + randomNum
//SE la somma dei numeri da un numero pari
if (sum % 2 == 0) {
    //dichiaro vincitore chi ha scelto pari
    console.log('ha vinto pari')
    if (selection == 'pari') {
        console.log('congratulazioni hai vinto')
    }else{
        console.log('spiacente, hai perso')
    }
//ALTRIMENTI
}else{
    //dichiaro vincitore chi ha scelto dispari
    console.log('ha vinto dispari')
    if (selection == 'dispari') {
        console.log('congratulazioni hai vinto')
    }else{
        console.log('spiacente, hai perso')
    }
}
}
//TODO Un-comment this line to call the function
//evenOddGame()

//faccio una funzione per derterminare se la somma di due numeri é pari
function sumIsOdd(x,y){
    //salvo il valore sella somma dei due numeri
    let xYsum = x + y
    //SE la somma dei due numeri da un numero PARI
    if (xYsum % 2 == 0) {
        // ritorno come valore falso
        console.log('false')
        return false 
        //ALTRIMENTI   
    }else{
        // riutorno come valore vero
        console.log('true')
        return true
    }
}

sumIsOdd(40,342)