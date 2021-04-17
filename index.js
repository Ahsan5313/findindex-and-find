const number = [10,20,30,50,41,20]

const newNumber = (value, index, array) =>{

    if(value%3===1){
        return value
    }
}

const oddNumber = number.find(newNumber)

const oddNumberIndex = number.findIndex(newNumber)

document.write(oddNumber);
document.write(oddNumberIndex);