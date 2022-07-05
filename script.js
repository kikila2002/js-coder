alert("Convertidor de un producto del exterior en USD a Pesos Argentino")

const IVA = 1.21


function multiplicar (num1,num2){
    return num1 * num2
}

let dolar, producto, totalsinIva, totalconIva;



do {
    producto = parseFloat(prompt("Ingrese el valor de su productor en USD"));
    dolar = parseFloat(prompt("Ingrese el valor del dolar TURISTA HOY"));


    if(isNaN(producto) || isNaN(dolar)) {
        alert("Por favor ingresame numeros validos ")
    } 
 
    if (dolar <= 10) {
        alert("Ni vos te crees que el dolar sale menos que 10 pesos xd")
    }


} while ((isNaN(producto) || isNaN(dolar)) || (dolar <= 10))


totalsinIva = multiplicar(producto,dolar);

totalconIva = multiplicar(totalsinIva , IVA);

alert(`SOLAMENTE su producto sin IVA equivale a ${totalsinIva} y con IVA equivale a ${totalconIva}`)