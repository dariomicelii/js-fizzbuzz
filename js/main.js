/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//*Faccio un ciclo for per stampare ogni numero

for(let i = 1; i < 100; i++){

if(i % 3 === 0 && i % 5 === 0){   //*controllo se il numero è divisibile per 3 e per 5 (lo metto all'inizio perchè senno non controlla entrambe le condizioni)
    console.log("FizzBuzz")      //* se lo è stampo 'FizzBuzz'
}
else if(i % 3 === 0){            //*controllo se il numero è divisibile per 3
    console.log("Fizz")          //* se lo è stampo 'Fizz'
}
else if(i % 5 === 0){            //*controllo se il numero è divisibile per 5
    console.log("Buzz")          //* se lo è stampo 'Buzz'
}

else{
    console.log(i)               //* se non è nessuno dei precedenti lascio che stampi il numero normale
}
}

