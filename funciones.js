// Arreglo inicial
let arreglo = [1, 2, 3, 4, 5];

// Función para mostrar el arreglo en la pantalla
function mostrarArreglo() {
    document.getElementById('arreglo-inicial').textContent = JSON.stringify(arreglo);
}

// 1. Pop: Elimina el último elemento del arreglo
function popElemento() {
    arreglo.pop();
    mostrarResultado('Pop', arreglo);
}

// 2. Shift: Elimina el primer elemento del arreglo
function shiftElemento() {
    arreglo.shift();
    mostrarResultado('Shift', arreglo);
}

// 3. Push: Añade un elemento al final del arreglo
function pushElemento() {
    arreglo.push(6); 
    mostrarResultado('Push', arreglo);
}

// 4. Unshift: Añade un elemento al principio del arreglo
function unshiftElemento() {
    arreglo.unshift(0); 
    mostrarResultado('Unshift', arreglo);
}

// 5. Splice: Añade y/o elimina elementos del arreglo
function spliceElemento() {
    arreglo.splice(2, 1, 7); // Elimina 1 elemento en la posición 2 y añade el número 7
    mostrarResultado('Splice', arreglo);
}

// 6. Delete: Elimina un elemento del arreglo sin modificar el tamaño del arreglo
function deleteElemento() {
    delete arreglo[1]; // Elimina el elemento en la posición 1
    mostrarResultado('Delete', arreglo);
}

// 7. Reverse: Invierte el orden de los elementos en el arreglo
function reverseArreglo() {
    arreglo.reverse();
    mostrarResultado('Reverse', arreglo);
}

// 8. Sort: Ordena los elementos del arreglo
function sortArreglo() {
    arreglo.sort((a, b) => a - b); // Ordena numéricamente
    mostrarResultado('Sort', arreglo);
}

// 9. Concat: Concatena el arreglo con otro arreglo
function concatArreglo() {
    let arreglo2 = [8, 9, 10];
    let nuevoArreglo = arreglo.concat(arreglo2);
    mostrarResultado('Concat', nuevoArreglo);
}

// 10. Join: Une todos los elementos del arreglo en una cadena
function joinArreglo() {
    let cadena = arreglo.join(', ');
    mostrarResultado('Join', cadena);
}

// 11. Length: Muestra la longitud del arreglo
function getLength() {
    mostrarResultado('Length', arreglo.length);
}

// Función para mostrar el resultado de las operaciones
function mostrarResultado(operacion, resultado) {
    document.getElementById('resultado').innerHTML = `<strong>${operacion}:</strong> ${JSON.stringify(resultado)}`;
    document.getElementById('resultado').classList.remove('hidden');
    mostrarArreglo(); 
}

mostrarArreglo();
