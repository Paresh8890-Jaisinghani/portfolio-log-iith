ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .portfoilo-box, .contact form', { origin: 'bottom' });