/**
 * creare array di nomi autorizzati
 * prompt nome all'utente
 * se nome è autorizzato dire che può entrare
 */

//variabili
const nomiInvitati = ["Alberto", "Angelo", "Giuseppe", "Piera", "Giovanni", "Chiara"];
const nomeUtente = prompt("Come ti chiami?");
let risposta='';

//controllo dati
if (nomeUtente !== '') {
  if (nomiInvitati.includes(nomeUtente)) {
    risposta = 'Puoi entrare';
  } else risposta = 'Non sei invitato';
  //console.log(risposta);
  
  //output
  const output = document.getElementById('output');
  output.innerHTML = risposta;
} else {
  alert("Inserisci un valore valido");
  location.reload(); //autorefresh della pagina se non viene inserito nulla nel prompt
}

