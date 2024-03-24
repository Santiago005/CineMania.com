const slider = document.querySelector("#slider");
let sliderImg = document.querySelectorAll(".slider-img")
let sliderImgLast = sliderImg[sliderImg.length -1];

const btnIzquierda = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");

slider.insertAdjacentElement('afterbegin', sliderImgLast)

function moverDerecha(){
    let sliderImgFirst = document.querySelectorAll(".slider-img")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderImgFirst);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function moverIzquierda(){
    let sliderImg = document.querySelectorAll(".slider-img");
    let sliderImgLast = sliderImg[sliderImg.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderImgLast);
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnDerecha.addEventListener('click', function(){
    moverDerecha();
});

btnIzquierda.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 5000);