 let moreitems=document.querySelector('.moreitems');
 moreitems.addEventListener('click', function() {
    let ap = document.querySelector('.item2');
    if (ap.style.display == "none") { 
        ap.style.display = "block";
        let btn=document.querySelector('button');
        btn.style.display = "none";
    } else {
        ap.style.display = "none";
    }
});
 let phone=document.querySelector('.phonemenu');
 phone.addEventListener('click', function() {
    let a = document.querySelector('nav ul');
    if(a.classList.contains("active"))
    {
        a.classList.remove('active');
    }
    else{
        a.classList.add('active');
    }
});

let p = document.querySelector('#head p');
let i = 0;
let text = "Discover the best food & drinks in Delhi NCR";
function typeWriter() {
    if (i < text.length) {
        p.innerHTML = p.innerHTML + text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

let box = document.querySelectorAll('.box');
box.forEach((i) => {
i.addEventListener('mouseover', function (){
    i.classList.add('visible');
});
    i.addEventListener('mouseout', function() {
        i.classList.remove('visible');
});
});

 let cards = document.querySelectorAll('.customer-card .card-inner');
 cards.forEach(i => {
    i.addEventListener('click', () => {
    if(i.classList.contains("flip"))
    {
        i.classList.remove('flip');
    }
    else{
        i.classList.add('flip');
    }
    });
});

function validation() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name) {
        alert("Please enter your name.");
        return false;
    }
    if (!email) {
        alert("Please enter your email.");
        return false;
    }
    if (!message) {
        alert("Please enter your message.");
        return false;
    }
    alert("Your message has been sent");
    return true; 
}
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slidercontainer");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let j = 0;

slides[j].classList.add('active');

next.addEventListener('click', function () {
    slides[j].classList.remove('active');
    j = (j === slides.length - 1) ? 0 : j + 1;
    slides[j].classList.add('active');
});

prev.addEventListener('click', function () {
    slides[j].classList.remove('active');
    j = (j === 0) ? slides.length - 1 : j - 1;
    slides[j].classList.add('active');
});

let cursor = document.querySelector(".cursor");
let timeout;

let showCursor = (x, y) => {
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
    cursor.style.display = "block";

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cursor.style.display = "none";
    }, 1000);
};
document.addEventListener("mousemove", (j) => {
    showCursor(j.clientX,j.clientY);
});
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
