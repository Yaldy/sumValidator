function twoNumberSum(array, targetSum) {
    let salida = []
    let i = 0
    let j = 0
    for(let i=0; i < array.length; i++) {
        let num1 = array[i]
        let num2 = targetSum-num1
        let arrayCortado= array.filter((num)=>num!=num1)
        for(let j=0; j < arrayCortado.length; j++) {
            if (arrayCortado[j] == num2){
                salida = [num1,num2]
                return salida
            }

        }
    }
    if(salida=[]){
        return []
    }
}

console.log(twoNumberSum([1,2,3,4,5],2))