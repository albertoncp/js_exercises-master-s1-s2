let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    
    return array.indexOf(text) !== -1 
    ? "esta en la posición "+ array.indexOf(text) 
    : "no está en el array" 
}




console.log(findArrayIndex(array, "Mosquito"));