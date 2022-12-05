/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

let pesoMedio = 0;
let pesoTotale = 0;
let lunghezzaMedia = 0;
const zucchine =[
    {
        varieta : 'varieta-1',
        peso : '200 cm',
        lunghezza : ' 10 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '100 cm' ,
        lunghezza : ' 230 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '300 cm' ,
        lunghezza : ' 210 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '600 cm' ,
        lunghezza : ' 430 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '300 cm',
        lunghezza : ' 110 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '400 cm',
        lunghezza : ' 480 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '500 cm' ,
        lunghezza : ' 880 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '900 cm' ,
        lunghezza : ' 120 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '100 cm',
        lunghezza : ' 340 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '150 cm',
        lunghezza : ' 10 cm'
    },
] 

for (let i = 0; i < zucchine.length; i++){
    pesoTotale += parseInt(zucchine[i].peso) ;
    lunghezzaMedia = parseInt(zucchine[i].lunghezza)
}
pesoMedio = parseInt(pesoTotale / zucchine.length) ;

console.log(pesoTotale)
console.log(pesoMedio);
console.log(lunghezzaMedia);