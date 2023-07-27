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
    console.log('é palindroma')\
//ALTRIMENTI
}else{
    //stampo 'non é palindroma'
    console.log('non é palindroma')
}


// ! FUNCTION VERSION-|

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