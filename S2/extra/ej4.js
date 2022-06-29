let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    
    return array.indexOf(text)  
}

function removeItem(array, text) {
    let position = findArrayIndex;
    array.splice(position,1)
    console.log(array)
    
}


removeItem(array,"Caracol")





