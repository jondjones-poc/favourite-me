const main = document.querySelector('.main');
const times = document.getElementById('times');

let clickTime = 0;
let numberOfClickTimes = 0;

const createLike = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const rightOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y-  rightOffset;
    console.log(xInside, yInside)
    heart.style.top = `${yInside}px`; 
    heart.style.left = `${xInside}px`; 

    main.appendChild(heart);
}

main.addEventListener('click', (e) => {

    // Custom double-click, could use double-click event handler instead
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createLike(e);
            numberOfClickTimes++;
            clickTime = 0;
            times.innerHTML = numberOfClickTimes;
        } else {
            clickTime = new Date().getTime()
        }
    }
})