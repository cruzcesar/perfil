/*Efectos scrollback */
$(document).ready(function () {
    $(".do-nicescrol").niceScroll({
        cursorcolor: "#4f0423",
        cursorwidth: "1px",
        background: "rgba(20,20,20,0.3)",
        cursorborder: "1px solid #4f0423",
        cursorborderradius: 0
    });
});

/*Transaccion dentro de la misma pagina*/
   $('#efect-memu > li > a').on('click', function(event) {
    var target = $(this).attr('href');
   if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(target).offset().top-150
        }, 650);
    }
 });