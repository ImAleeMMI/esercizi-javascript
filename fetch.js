// 1 - Eseguire una richiesta GET con fetch e ottenere i dati (array o oggetto) da un'API.
// endpoint = https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
/*
fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(response => response.json())
    .then(data => console.log('Dati ricevuti:', data))
    .catch(error => console.error('Errore durante la richiesta:', error.message));


// 2 - Eseguire una richiesta POST per inviare dati a un'API e ottenere la risposta.
// endpoint = https://api.example.com/dati
const endpoint = 'https://api.example.com/dati';
const data = {
  key1: 'value1',
  key2: 'value2'
};

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())//response restituisce il valore risolto
  .then(data => console.log('Dati ricevuti: ', data))
  .catch(error => console.error('Errore durante la richiesta: ', error));

// 3 - Creare una funziona asincrona che effettua una chiamata GET e ritorna la risposta.
// Utilizzare "async + await"
// Gestire una risposta in caso di errore con "try + catch"
*/
async function callGet() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Esegui la chiamata
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', options);
        if (!response.ok) {
            throw new Error(`Errore: ${response.status}`);
        }

        const dati = await response.json();
        console.log('Dati ottenuti: ', dati);
    } catch (error) {
        // Gestore degli errori
        console.log('Errore', error.messag);
    }
}

callGet();