



// document.querySelector('.enter').addEventListener('click', createPrism);

// function createPrism() {
//   const rows = document.querySelector('.inone').value;
//   const prism = document.getElementById('prism');
//   prism.innerHTML = ''; // Clear previous circles

//   for (let i = 1; i <= rows; i++) {
//     const rowDiv = document.createElement('div');
//     rowDiv.style.display = 'flex';
//     rowDiv.style.justifyContent = 'center';
    
//     for (let j = 0; j < i; j++) {
//       const circle = document.createElement('div');
//       circle.className = 'circle';
//       rowDiv.appendChild(circle);
//     }
//     prism.appendChild(rowDiv);
//   }
// }

// document.querySelector('.start').addEventListener('click', () => {
//   const rowsInput = document.querySelector('.inone');
//   rowsInput.value = '';
//   document.getElementById('prism').innerHTML = '';
// });

// document.querySelector('.stop').addEventListener('click', () => {
//   document.getElementById('prism').innerHTML = '';
// });



document.querySelector('.enter').addEventListener('click', function() {
    const numRows = document.querySelector('.inone').value;
    const prismArea = document.querySelector('.prismshowingarea');
    prismArea.innerHTML = '';

    if (numRows > 0){
        for (let row = 1; row <= numRows; row++){
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('prism-row');
            rowDiv.style.textAlign = 'center';

            for (let circleCount = 1; circleCount <= row; circleCount++){
                const circle = document.createElement('div')
                circle.classList.add('circle');
                rowDiv.appendChild(circle);
            }

            prismArea.appendChild(rowDiv);
        }
    }
});


function refreshPage(){
    location.reload();
}


// document.querySelector('.start').addEventListener('click', function() {
//     const rows = document.querySelectorAll('.prism-row');
//     setTimeout(() => { 
//         rows.forEach((cc) => {
//             cc.classList.add('active');
//         });
//     }, 500); 
// });

let period;
let currentIndex = 0;

document.querySelector('.start').addEventListener('click', function() {
    const rows = document.querySelectorAll('.prism-row');
    let currentIndex = 0;

    // if (period) {
    //     clearInterval(period);
    // }

    period = setInterval(() => {
        rows.forEach(row => {
            row.classList.remove('active');
        });

        rows[currentIndex].classList.add('active');

        currentIndex = (currentIndex + 1) % rows.length;
    }, 500); 
});

document.querySelector('.stop').addEventListener('click', function(){
    clearInterval(period);
});
