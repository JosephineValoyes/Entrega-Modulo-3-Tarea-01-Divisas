let items= document.getElementById("items");
let template= document.getElementById("template-card");
let fragment= document.createDocumentFragment();

const moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
monedas.foreach(monedas=> console.log(monedas));
 // Dolar
 // Peso Mexicano
 // Peso Colombiano
 // Euro
 // Libra Esterlina

let prompt= (CantidadDeDinero);
switch (CantidadDeDinero){
    case Dolar:
        console.log('4.0011,65');
    break;
    case PesoMexicano:
        console.log('195,65');
    break;
    case PesoColombiano:
        console.log('0.00025');
    break;
    case Euro:
        console.log('4.553,13');
    break;
    case LibraEsterlina:
        console.log('5.455,92');
    break;
    default:
        console.log('la moneda ingresa no es valida');
    break;
}
 
var element= document.getElementById('ul'); //assuming ul exists
var fragment= document.createDocumentFragment();
var monedas= ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
var element= document.getElementById('ul'); //assuming ul exists
var fragment= document.createDocumentFragment();
var monedas= ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
monedas.forEach(function(monedas){
    var li= Document.createElement('li');
    li.textContent= monedas;
    fragment.appendChild(li);

 element.appendChild(fragment)
} 
(document.body.onload= addElement
(function addElement() {
    //convertir monedas
    //['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
 var newDiv= document.createElement("div");
 var newContent= document.createTextNode("convertir monedas");
 newDiv.appendChild(newContent); //convertir monedas

 //['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
 var currentDiv= document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);

}

var b= document.querySelector('button')
 b.setAttribute("Cantidad de Dinero","button");
 b.setAttribute("disabled","false");


isNaN(NaN)//devuelve true 
isNaN("Dolar") //devuelve true 
isNaN("4.0011,65")//devuelve false
isNaN(4.0011,65)//devuelve false

let Validacionesdelformulario

validacionesdelformulario= prompt("Validaciones del formulario");
document.write("validaciones del formulario");
