
let furbos= ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let auxiliar=[];

function swap(array, indice1, indice2) {
    auxiliar = array[indice2]
    array[indice2] = array[indice1]
    array[indice1] = auxiliar

    return array

}

console.log(furbos[1])

console.log(swap(furbos, 0,1))