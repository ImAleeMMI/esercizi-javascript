/*
RICORDA:
Ogni volta che viene chiamata una funzione asincrona, restituisce una nuova Promise che verrà risolta con
il valore restituito dalla funzione stessa o rifiutata con un'eccezione.

Le funzioni asincrone possono contenere zero o più espressioni "wait".

Le espressioni "await" (attesa) sospendono l'esecuzione della funzione asincrona finchè una Promise non viene risolta o rifiutata.

Il valore risolto della promessa viene trattato come il valore restituito dell'espressione wait.
L'uso di async e wait consente l'uso dei normali blocchi try/catch attorno al codice asincrono.

*/
var wait1 
// 1 - Creare una funzione asincrona che attende l'esecuzione di "resolveAfter2Seconds"
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function waitResolveAfter2Seconds() {
  console.log('Start of the function');

  // Utilizza await per attendere che resolveAfter2Seconds si completi
  const result = await resolveAfter2Seconds();

  // La funzione si ferma finché resolveAfter2Seconds non è completato
  console.log('After the wait:', result);
}
// Chiamata alla funzione asincrona

waitResolveAfter2Seconds();



// 2 - Gestire l'errore all'interno di una funzione asincrona utilizzando try/catch:
async function waitResolveAfter2Seconds() {
  try {
    console.log('Start of the function');

    // Utilizza await per attendere che resolveAfter2Seconds si completi
    const result = await resolveAfter2Seconds();

    // La funzione si ferma finché resolveAfter2Seconds non è completato
    console.log('After the wait: ', result);

  } catch (e) {
    // Gestore degli errori
    alert(e.message);
  }
}


// 3 - Utilizzare await con una funzione asincrona per eseguire operazioni in sequenza.

// Funzione 1 che restituisce una Promise
async function operazione1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Operazione 1 completata");
    }, 1000);
  });
}

// Funzione 2 che restituisce una Promise
async function operazione2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Operazione 2 completata");
    }, 2000);
  });
}

// Scrivere una funzione asincrona che esegue Funzione 1 e successivamente Funzione 2
async function executes() {
  try{
    // Attendo che la prima operazione si risolva
    const result1 = await operazione1();
    console.log("Result 1: ", result1);

    // Attendo che la seconda operazione si risolva
    const result2 = await operazione2();
    console,log("Result 2: ", result2);
  } catch (error) {
    // Gestore degli errori
    console.log("Error: ", error);
  }
}

// Chiama la funzione asincrona
executes();
