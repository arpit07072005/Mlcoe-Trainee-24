let horse = document.querySelector('.boy');
document.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowUp') {
        horse.classList.add('jump');
        setTimeout(() => {
            horse.classList.remove('jump');
        }, 900);
    }
    if (e.code === 'ArrowRight') {
        let horseX = parseInt(window.getComputedStyle(horse).left);
        horse.style.left = (horseX + 112) + "px";
    }
    if (e.code === 'ArrowLeft') {
        let horseX = parseInt(window.getComputedStyle(horse).left);
        horse.style.left = (horseX - 112) + "px";
    }
});
let score = 0;

 let a =setInterval(() => {
    let horseRect = horse.getBoundingClientRect();
    let obstacle = document.querySelector('.obstacle');
    let obstacleRect = obstacle.getBoundingClientRect();
    let scoreElement = document.querySelector('.score');
    if ((horseRect.left < obstacleRect.right && horseRect.right > obstacleRect.left ) &&(horseRect.bottom > obstacleRect.top)
    ) {
        let text = document.querySelector('.gameover');
        text.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove('speedops');
        clearInterval(a)
    }
    else {
        score++;
        scoreElement.innerHTML = "Your score: " + score;
    }
}, 100);

