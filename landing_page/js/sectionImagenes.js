let slidesContador = 1;
cambiarSlice(slidesContador);

function plusSlides(n){
    cambiarSlice(slidesContador += n);
}

function cambiarSlice(n){
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length){
        slidesContador.length = 1;
    }
    if (n < 1){
        slidesContador = slides.length;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }    
}

slides[slidesContador-1].style.display = "block";