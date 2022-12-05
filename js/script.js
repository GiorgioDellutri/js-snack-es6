//1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student =[
    { 
    name : 'Sigismondo',
    lastname : 'Mandragola',
    age : 22
    },
    { 
    name : 'Rob',
    lastname : 'Rossi',
    age : 33
    },
    { 
    name : 'Jhon',
    lastname : 'Deer',
    age : 27
    },
];

for (let i = 0; i < student.length; i++){
    console.log(student[i])
}



