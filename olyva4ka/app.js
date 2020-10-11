// let - динамическая (изменяется)
// const - (не изменяется)

let dict = {
    1: '16 лет',
    2: '13 лет',
    3: '54 года',
    123: 321,
    911: '1+police',
}

console.log(dict[911])

// почитать про объекты - дз


//array


// let randomArr = [] - мы создали пустой массив

// let randomArr = [1,2,3,4,5,6,7,8,9,10] - упордочный массив

// let randomArr = [1,2,3,4,5,6,7,8,9,10]
//                //0,1,2,3,4,5,6,7,8, 9
//               //у каждого элемента есть свой номер, отсчёт начинается с нуля
//              //true == 01
//             //false == 00


let numArr = [10,9,1,2,99,101,66,33,28,54]
           //[1,2,9,10,28,33,54,66,99,101]
console.log(numArr)

numArr.sort (function(a,b) {
    return a - b;
})
console.log(numArr)
// numArr[10] = 15

// console.log(numArr)

// console.log(numArr.length)

