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
const zucchine =[
    {
        varieta : 'varieta-1',
        peso : '200 cm',
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '100 cm' ,
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '300 cm' ,
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '600 cm' ,
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '300 cm',
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '400 cm',
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '500 cm' ,
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '900 cm' ,
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '100 cm',
        lunghezza : ' 20 cm'
    },
    {
        varieta : 'varieta-1',
        peso : '150 cm',
        lunghezza : ' 20 cm'
    },
] 

for (let i = 0; i < zucchine.length; i++){
    pesoTotale +=parseInt(zucchine[i].peso) ;
}
pesoMedio = parseInt(pesoTotale / zucchine.length) ;

console.log(pesoTotale)
console.log(pesoMedio);