//Desestructuracion de objetos  (nombre de elementos)
let Objeto={
id:123,
nombre:'Cesar',
edad:20,
listaNumeros:[0,1,2,3]
}
console.log(Objeto);
const {nombre,listaNumeros}=Objeto;
console.log(nombre,listaNumeros);

//Otro Tipo por Posicion
const [posicion01, posicion02]=listaNumeros;
console.log(posicion01,posicion02);
