const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circle.length) {
        currentActive = circle.length;
    }
    update();
})


previous.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update(){
    circle.forEach((circle,index)=>{
        if(index < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = (((actives.length - 1) / (circle.length - 1))*100+"%" );

    if(currentActive == 1){
        previous.disabled = true;
    } else if (currentActive == circle.length){
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }
}