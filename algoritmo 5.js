 // Algoritmos 4     

// Ejercicio 1

function resetNegativos(array){
    for(i=0; i<array.length; i++){
        if(array[i]<0){
            array[i]=0
        }
    }
console.log(array)
}
resetNegativos([1,2,-1,-3])
// resultado [1,2,0,0]
// Ejercicio 2

function moverAdelante(array){
    for(i=0; i<array.length;i++){
        array[i]=array[i+1]
    }
    array[array.length-1]=0
    console.log(array)
}

moverAdelante([1,2,3])

 //  resultado [2,3,0].

// Ejercicio 3

function returnReverso(array){
    arrayaux = []
    for(i=array.length-1;i>=0;i--){
        arrayaux.push(array[i])
    }
console.log(arrayaux)
}

returnReverso([1,2,3]) 
// resultado [3,2,1].

// Ejercicio 4

function repetirValores(array){
      arrayaux = []
    for(i=0;i<array.length;i++){
        arrayaux.push(array[i])
        arrayaux.push(array[i])
    }
console.log(arrayaux)
}

repetirValores([4,"Ulysses", 42, false]) 
// resultado [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].