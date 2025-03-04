// Para recorrer un array usando forEach e imprimir el valor de cada elemento en mayúsculas,
//  así como su posición, puedes hacerlo de la siguiente manera:

const frutas = ["mandarina", "pera", "melón", "sandía", "manzana"];

frutas.forEach((fruta, indice) => {
  console.log(`En la posición ${indice}, el valor es: ${fruta.toUpperCase()}`);
});

//2. Para lograr la salida deseada, 
// puedes utilizar el método forEach de JavaScript de la siguiente manera:

const numeros = [10, 20, 30, 40, 50];

numeros.forEach((numero, indice) => {
  const cuadrado = numero ** 2;
  console.log(`El elemento en la posición ${indice} tiene el valor ${numero}. Su valor al cuadrado es ${cuadrado}. Nota: No puede multiplicar el elemento por si mismo, por 2 o`);
});

// https://www.perplexity.ai/

//3. En JavaScript, existen varias formas de comprobar si un objeto tiene una propiedad específica. 
// A continuación, te presento las principales opciones:

// 1. Método hasOwnProperty()
// Este método verifica si un objeto tiene una propiedad 
// específica como propiedad propia, sin considerar la cadena de prototipos.

const objeto = { nombre: "Juan", edad: 30 };

console.log(objeto.hasOwnProperty("nombre")); // true
console.log(objeto.hasOwnProperty("edad"));   // true
console.log(objeto.hasOwnProperty("altura"));  // false

// 2. Método Object.hasOwn()
// Este método es similar a hasOwnProperty(), pero es un método estático de Object,
//  lo que lo hace más seguro al evitar posibles sobrescrituras del método hasOwnProperty() en el objeto.

console.log(Object.hasOwn(objeto, "nombre")); // true
console.log(Object.hasOwn(objeto, "edad"));    // true
console.log(Object.hasOwn(objeto, "altura"));  // false

//3. El hasOwnProperty() El método es parte del prototipo del objeto y devuelve un valor booleano 
// (true o false ) que indica si el objeto tiene la propiedad especificada como propiedad propia.

const food = {
    pizza: "pizza",
    burger: "hamburguesa",
    fries: "papas",
    cake: "pastel"
};

//El siguiente ejemplo usa el 
// hasOwnProperty() método para comprobar si el fries la propiedad existe en el food objeto:

let exists = food.hasOwnProperty('fries');

console.log(exists); // true

//Si la propiedad no existe en el objeto, 
// el hasOwnProperty() método devuelve false como se muestra a continuación:

exists = food.hasOwnProperty('snacks');

console.log(exists); // false

// Si la propiedad es parte del prototipo del objeto, no se considera como propiedad propia del objeto.
//  Por ejemplo, el hasOwnProperty() el método no detecta el toString propiedad porque se hereda
//  del prototipo del objeto:

exists = food.hasOwnProperty('toString');

console.log(exists); // false

// in Operador
// El in El operador es otra forma de verificar la presencia de una propiedad en un objeto 
// en JavaScript. Devuelve true si la propiedad existe en un objeto. De lo contrario, devuelve false
//Por ejemplo, contrario a hasOwnProperty() ,
//  el in operador detecta que el toString heredado la propiedad existe en el food objeto:

food.toString;    // function() {...}
'toString' in food;     // true

// Si intenta acceder a una propiedad que no existe desde un objeto, el valor devuelto es undefined

food.pizza;     
food.rice;      

// El food.rice evalúa a undefined porque el food el objeto no contiene el rice propiedad.

food.pizza !== undefined;     // true
food.rice === undefined;      // false

const user = {
    name: 'John Doe',
    job: undefined
};

user.job !== undefined;     // false

'cake' in food;     // true
'drink' in food;    // false

//https://javascript.19633.com/es/tags-js-3/object-3/1003110843.html

class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    sonido() {
      console.log("El animal hace un sonido.");
    }
  }

  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la superclase
      this.raza = raza;
    }
  
    sonido() {
      console.log("El perro ladra.");
    }
  
    mostrarInfo() {
      console.log(`El perro se llama ${this.nombre} y es de raza ${this.raza}.`);
    }
  }

  const miPerro = new Perro("Max", "Golden Retriever");
miPerro.sonido(); // "El perro ladra."
miPerro.mostrarInfo(); // "El perro se llama Max y es de raza Golden Retriever."

// https://www.perplexity.ai/


