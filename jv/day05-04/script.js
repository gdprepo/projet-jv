'use strict';

//Affichez et cacher l'alerte #js-show-alert

$('#js-show-alert').click(() => {
  $('#js-alert').show();
});
$('#js-hide-alert').click(() => {
  $('#js-alert').hide();
});

// Méthodes afficher et cacher la bannière

$('#js-slide-example-address').click(() => {
    //$('#js-slide-example-links').slideDown(); 
    //$('#js-slide-example-links').slideToggle();
    $('#js-slide-example-links').fadeToggle();
  });

//   Afficher le div au clique avec l'animation

$('button#js-btn-fade-in').click(() => {
    $('div#js-div-fade-in-out').fadeIn();
})
$('button#js-btn-fade-out').click(() => {
    $('div#js-div-fade-in-out').fadeOut();
})

//Lancer l'animation

$('div#js-animation-1')
.delay(300)
.animate({
    left: '300px',
    width: '200px'
}, 700)
.animate({
    height: '400px'
});