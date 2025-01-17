// function primeNumber(x){
//     if(x= 2||3){
//         console.log('prime')
//     }else if(x<1){
//         console.log('error')
//     }
//     for(let i=3; i<x; i++){
//         if(x % i == 0){
//             return 'not a prime'
//         }
//         else{
//             return 'is a prime'
//         }
//     }

// }
// console.log(primeNumber(5))



// function primeNumber(x){
//     if(x== 2||3){
//         console.log('prime')
//     }else if(x<1){
//         console.log('error')
//     }
//     for(let i=2; i<x; i++){
//         if(x % i === 0){
//             return 'not a prime'
//         }
//         // else{
//         //     return 'is a prime'
//         // }
//     }
//     return 'is a prime'

// }
// console.log(primeNumber(5))


// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')
// const addbtn = document.querySelector('.add__btn')

// btn,addEventListener('click',() =>{
//     function primeNumber(x){
//         if(x== 2||3){
//             console.log('prime')
//         }else if(x<1){
//             console.log('error')
//         }
//         for(let i=2; i<x; i++){
//             if(x % i === 0){
//                 return 'not a prime'
//             }

//         }
//         return 'is a prime'

//     }
//     console.log(primeNumber(5))

// })

// function alertBtn (){
//     alert()
// }
// btn.addEventListener('click', alertBtn )


// const inputNew = document.querySelector('.input')
// const btn = document.querySelector('.btn')
// const addbtn = document.querySelector('.add__btn')
// const result = document.querySelector('.result')

// function primeNumber(x) {
//     if (x == 2 || 3) {
//         return 'prime'
//     } else if (x < 1) {
//         return 'error'
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return 'not a prime'
//         }

//     }
//     return 'is a prime'

// }


// btn.addEventListener('click',() =>{
//     const number= trying(inputNew.number)
//     const resultNew = document.createElement('div')
//     resultNew.innerText=primeNumber(number)
//     result.appendChild(resultNew)

// })

// const inputNew = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const addbtn = document.querySelector('.add__btn');
// const result = document.querySelector('.result');

// function primeNumber(x) {
//     if (x === 2 || x === 3) {
//         return 'prime';
//     } else if (x < 2) {
//         return 'error';
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return 'not a prime';
//         }
//     }
//     return 'is a prime';
// }

// btn.addEventListener('click', () => {
//     const number = parseInt(inputNew.value); 
//     const resultNew = document.createElement('div');
//     resultNew.innerText = primeNumber(number);
//     result.appendChild(resultNew);
// });



// const inputNew = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// function primeNumber(x) {
//     if (x === 2 || x === 3) {
//         return { status: 'prime', color: 'green' };
//     } else if (x < 2) {
//         return { status: 'error', color: 'grey' };
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return { status: 'not a prime', color: 'red' };
//         }
//     }
//     return { status: 'is a prime', color: 'green' };
// }

// btn.addEventListener('click', () => {
//     const number = parseInt(inputNew.value); 
//     const resultNew = document.createElement('div');
//     const primeResult = primeNumber(number);
//     resultNew.innerText = primeResult.status;
//     resultNew.style.backgroundColor = primeResult.color;
//     result.appendChild(resultNew);
// });



// const inputNew = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// function primeNumber(x) {
//     if (x === 2 || x === 3) {
//         return { status: 'prime', color: 'green' };
//     } else if (x < 2) {
//         return { status: 'error', color: 'grey' };
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             return { status: 'not a prime', color: 'red' };
//         }
//     }
//     return { status: 'is a prime', color: 'green' };
// }

// btn.addEventListener('click', () => {
//     const number = parseInt(inputNew.value);
//     result.innerHTML = '';
//     const resultNew = document.createElement('div');
//     const primeResult = primeNumber(number);
//     resultNew.innerText = primeResult.status;
//     resultNew.style.backgroundColor = primeResult.color;
//     result.appendChild(resultNew);
// });






const inputNew = document.querySelector('.primechecker');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function primeNumber(x) {
    if (x === 2 || x === 3) {
        return { status: 'prime', color: 'green' };
    } else if (x < 2) {
        return { status: 'error', color: 'grey' };
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return { status: 'not a prime', color: 'red' };
        }
    }
    return { status: 'is a prime', color: 'green' };
}

btn.addEventListener('click', () => {
    let number = parseInt(inputNew.value);
    result.innerHTML = '';
    const resultNew = document.createElement('div');
    const primeResult = primeNumber(number);
    resultNew.innerText = primeResult.status;
    resultNew.style.backgroundColor = primeResult.color;
    result.appendChild(resultNew);
});


