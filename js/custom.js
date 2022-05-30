$(document).ready(function(){
    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });

    //test parallax js
    $('.parallax-window').parallax({imageSrc: 'images/t.png'});
});