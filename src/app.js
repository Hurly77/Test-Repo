const body = document.querySelector('body')
const hex = [0,1,2,3,4,5,6,7,8,9,'a', 'b', 'c', 'd', 'e','f']

function onClick (e) {
    let color = '#'; 
    const radN = (n) => Math.round(Math.random()* n);
    for (let i = 0; i < 6; i++) { 
        let n = radN (hex.length - 1);
        let l = hex[n];
        color += l;
    }
    console.log(color);
    body.style.backgroundColor = color;
}
document.addEventListener('click', onClick)