## **Chiamate alle API REST con JavaScript utilizzando `fetch`**

### **Introduzione**

La tecnologia `fetch` in JavaScript consente di effettuare chiamate HTTP in modo asincrono. Questa guida si concentra sull'utilizzo di `fetch` per interagire con API REST.

### **1. Effettuare una Richiesta GET**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log('Dati ricevuti:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

#### Il metodo `.json()`

Il metodo `.json()` in JavaScript è un metodo della classe `Response` dell'interfaccia `fetch` che viene utilizzato per estrarre il corpo della risposta JSON come oggetto. 

Questo metodo restituisce una Promise che risolve con l'oggetto JavaScript risultante dalla decodifica del corpo JSON della risposta.

Ecco un esempio di come utilizzare il metodo `.json()` con una richiesta `fetch`:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore di rete o risposta non valida');
    }
    return response.json(); // Questo restituisce una Promise
  })
  .then(data => {
    console.log('Dati ricevuti:', data);
  })
  .catch(error => {
    console.error('Errore durante la richiesta:', error);
  });
```

Nel codice sopra, `response.json()` restituisce una Promise che risolverà con il corpo della risposta interpretato come JSON. Quando la Promise si risolve, l'oggetto JSON risultante viene passato alla successiva funzione di callback del `.then()`, dove è possibile manipolare e utilizzare i dati.

Ecco alcuni punti importanti da considerare riguardo al metodo `.json()`:

1. **Il Parsing è Necessario:** Il metodo `.json()` si occupa di parsare il corpo della risposta come JSON. Se il corpo della risposta non è valido JSON, o se ci sono problemi di parsing, la Promise si trasformerà in uno stato di "rejected" e passa alla successiva funzione di callback nel `.catch()`.

2. **Asincrono:** Poiché `fetch` è asincrono, l'utilizzo di `.json()` consente di gestire i dati in modo asincrono, garantendo che il codice non venga bloccato mentre attende la risposta.

3. **Gestione degli Errori:** Nell'esempio sopra, abbiamo incluso una verifica (`if (!response.ok)`) per controllare se la richiesta ha avuto successo prima di chiamare `.json()`. Questo aiuta a gestire errori di rete o risposte non valide.

4. **Promise:** Il metodo `.json()` restituisce una Promise, il che significa che è possibile concatenare più `.then()` per eseguire ulteriori azioni una volta che i dati sono stati elaborati.

In sintesi, `.json()` è un metodo chiave quando si lavora con `fetch` per ottenere e utilizzare dati JSON da una richiesta API REST.

### **2. Effettuare una Richiesta POST**

```javascript
const endpoint = 'https://api.example.com/data';
const data = {
  key1: 'value1',
  key2: 'value2'
};

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Altri header se necessario
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log('Dati ricevuti:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **3. Effettuare una Richiesta PUT (Aggiornamento)**

```javascript
const endpoint = 'https://api.example.com/data/123';
const updatedData = {
  key1: 'newvalue1',
  key2: 'newvalue2'
};

fetch(endpoint, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    // Altri header se necessario
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log('Dati aggiornati:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **4. Effettuare una Richiesta DELETE**

```javascript
const endpoint = 'https://api.example.com/data/123';

fetch(endpoint, {
  method: 'DELETE',
  // Altri opzioni della richiesta...
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore durante la cancellazione');
    }
    console.log('Dati cancellati con successo');
  })
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **5. Gestire gli Header della Richiesta**

```javascript
const endpoint = 'https://api.example.com/data';

fetch(endpoint, {
  headers: {
    'Authorization': 'Bearer <token>',
    // Altri header se necessario
  }
})
  .then(response => response.json())
  .then(data => console.log('Dati ricevuti:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **6. Gestire la Risposta della Richiesta**

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore di rete o risposta non valida');
    }
    return response.json();
  })
  .then(data => console.log('Dati ricevuti:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **7. Gestire gli Errori della Richiesta**

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore di rete o risposta non valida');
    }
    return response.json();
  })
  .then(data => console.log('Dati ricevuti:', data))
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### **8. Gestire la cancellazione o l'aggiornamento dei dati:**

```javascript
// Esempio di una richiesta DELETE
fetch('https://api.example.com/data/123', {
  method: 'DELETE',
  // Altri opzioni della richiesta...
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore durante la cancellazione');
    }
    console.log('Dati cancellati con successo');
  })
  .catch(error => console.error('Errore durante la richiesta:', error));
```

### Esempio di chiamata con fetch con OAuth2

Ecco un esempio di come eseguire una chiamata API con `fetch` in JavaScript utilizzando l'autenticazione OAuth 2.0. In questo esempio, si assume che tu stia cercando di ottenere un token OAuth 2.0 e quindi utilizzare questo token per autenticare la tua chiamata API.

```javascript
// Funzione per ottenere un token OAuth 2.0
async function ottieniToken() {
  const urlTokenEndpoint = 'https://esempio.com/oauth/token';
  const clientID = 'il_tuo_client_id';
  const clientSecret = 'il_tuo_client_secret';
  const username = 'il_tuo_username';
  const password = 'la_tua_password';
  const scope = 'il_tuo_scope';

  const tokenResponse = await fetch(urlTokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${clientID}:${clientSecret}`)
    },
    body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&scope=${encodeURIComponent(scope)}`
  });

  if (!tokenResponse.ok) {
    throw new Error(`Errore durante l'ottenimento del token. Codice: ${tokenResponse.status}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

// Funzione per eseguire una chiamata API autenticata con OAuth 2.0
async function eseguiChiamataAPI() {
  try {
    // Ottieni il token OAuth 2.0
    const token = await ottieniToken();

    // URL dell'API
    const urlApi = 'https://esempio.com/api/dati';

    // Opzioni della richiesta API
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
        // Altri header se necessari
      }
    };

    // Esegui la chiamata API con l'autenticazione OAuth 2.0
    const response = await fetch(urlApi, options);

    if (!response.ok) {
      throw new Error(`Errore durante la chiamata API. Codice: ${response.status}`);
    }

    const dati = await response.json();
    console.log('Dati ottenuti dalla chiamata API:', dati);
  } catch (error) {
    console.error('Errore durante l\'esecuzione della chiamata API:', error.message);
  }
}

// Chiamare la funzione per eseguire la chiamata API
eseguiChiamataAPI();
```

In questo esempio:

1. La funzione `ottieniToken` ottiene un token OAuth 2.0 utilizzando il flusso di concessione delle password (grant type password).
2. La funzione `eseguiChiamataAPI` utilizza il token ottenuto per autenticare una chiamata API utilizzando il metodo `fetch`.
3. L'autenticazione viene gestita aggiungendo l'header `Authorization` con il valore "Bearer {token}" alla richiesta.

Assicurati di sostituire i valori come `il_tuo_client_id`, `il_tuo_client_secret`, `il_tuo_username`, `la_tua_password`, `il_tuo_scope`, `https://esempio.com/oauth/token` e `https://esempio.com/api/dati` con i valori corretti per il tuo caso specifico.
