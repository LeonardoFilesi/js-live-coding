// console.log("ciao");
// console.log("ciao");
// console.log("ciao");
// console.log("ciao");
// console.log("ciao");

//invece di scrivere le cose più volte, ci creiamo una funzione
function greetings (){
    console.log("hello")
}
// ora che l'ho stabilita, la invoco
greetings();
greetings();
greetings();
greetings();

//se poi voglio cambiare da hello, a bounjour, o ciao
//basta che cambio la funzione


const userName = prompt("Ciao, dimmi come ti chiami");
const userLastName = prompt("Qual è il tuo cognome?");
const userAge = prompt("Quanti anni hai?");

greetings(userName, userLastName, userAge);
// greetings("Paolo", "Bianchi", "25");
// greetings("Francesca");

function greetings (name, lastname, age) {
    console.log(`Ciao ${userName} ${userLastName}, hai ${userAge} anni`);
}

const myResult = dividiDueNumeri(8, 4);


/**
 * Description placeholder
 * @date 3/16/2023 - 11:52:27 AM
 *
 * @param {*} dividendo
 * @param {*} divisore
 * @returns {(number | "Errore")}
 */
function dividiDueNumeri (dividendo, divisore) {
    if (divisore === 0) {
        return "Errore";
    } else {
        console.log(dividendo, divisore);
        const result = dividendo / divisore;
        return result;
    }
   
}