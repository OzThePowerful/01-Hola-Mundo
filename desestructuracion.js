
/*const deadpool = {         OBJETO
     nombre:   'Wade',         Declaramos PROPIEDADES
     apellido: 'Wilson',
     poder:    'Regeneracion',
     getNombre: function (){

        return `${this.nombre } ${this.apellido } ${this.poder } `
     }       ----ABAJO SE MUETRA UNA VERSION SIMPLIFICADA-----

}*/   

const deadpool = {        
     nombre:   'Wade',        
     apellido: 'Wilson',
     poder:    'Regeneracion',
     //edad:      50,
     getNombre(){
        return `${this.nombre } ${this.apellido } ${this.poder } `
     }     
}

//console.log(deadpool.getNombre() );

//const nombre   = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder    = deadpool.poder;

//let { nombre, apellido, poder, edad = 45 } = deadpool;
//console.log(nombre, apellido, poder, edad );

 
/*function imprimeHeroe( heroe ){

let { nombre, apellido, poder, edad = 45 } = heroe;   ---(AQUI SE HACE DE UNA MANERA, DESESTRUCTURACION)---
console.log(nombre, apellido, poder, edad );
}
*/

//  AQUI SE HACE DE OTRA

function imprimeHeroe( {nombre, apellido, poder, edad = 45 } ){
    nombre = 'Osmar';
console.log(nombre, apellido, poder, edad );
}
 
imprimeHeroe (deadpool);
 
const heroes = ['deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [ , , h3 ] = heroes;

console.log(h3);

