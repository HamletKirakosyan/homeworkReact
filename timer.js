let p = document.getElementById('p');
let button = document.getElementById('button');

const startingTime = 1;
let time = startingTime * 60;

button.addEventListener("click", 
    function() {
            setInterval(updateTimer, 1000) 
            })


function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(seconds < 10) {
        seconds = "0" + seconds
    }

    p.innerHTML = `${minutes}: ${seconds}`
    time--;

    if(time == 0) {
        alert("The End")
    }

}