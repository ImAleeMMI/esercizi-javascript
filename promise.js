// 1 - Creare una promise che si risolve dopo 2 secondi utilizzando setTimeout():
const myPromiseresolve = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Task completed!');
    }, 2000);
});

myPromiseresolve.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

// 2 - Creare una promise che viene rifiutata dopo 3 secondi utilizzando setTimeout():
const myPromiseReject = new Promise ((reject) => {
    setTimeout(() => {
        reject('Task failed!');
    }, 3000);
});

myPromiseReject.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// 3 - Eseguire una serie di chiamate asincrone in sequenza ad una funzione che risolve una Promise dopo 1 secondo.
// Creare una funzione che accetta un parametro e restituisce una Promise risolta dopo 1 secondo che ritorna il paramento concatenato a una stringa a piacere
// Utilizzare "then + catch" per effettuare chiamate sequenziali alla funzione

function myPromise(param){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(param == 'errore'){
                reject('errore - promise non risolta')
            }

            const result = param + " - concatenated";
            resolve(result);
        }, 1000);
    });
}

// myPromise('bello ciao - concatenated') // bello ciao - concatenated - concatenated - con

myPromise('tutto ok')
.then(function(promise1) {
    console.log(promise1); // bello ciao - concatenated
    return myPromise(promise1); // Promise
}).then(promise2 => { // 
    console.log(promise2);
})
.catch(error => {
    console.log("Error: ", error);
})


/*

async function test(){
    try{
        let result = await myPromise('tutto ok')  // tutto ok - concatenated
        console.log(result)
    }catch(e){
        alert(e.message)
    }
}

function test2(){
    myPromise('tutto ok').then(function (result){
        console.log(result)
    }).catch(e =>{alert(e.message)})
}
*/

// 4 -  Utilizzare Promise.all per eseguire più promise contemporaneamente:
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 1500);
});

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 500);
});

const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 4 resolved'), 2000);
});

const allPromises = Promise.all([myPromise1, myPromise2, myPromise3, myPromise4]);

allPromises.then(results => {
    console.log('All promise resolved : ', results);
}).catch(error => {
    console.log('One of the promises was rejected : ', reject(error));
});
