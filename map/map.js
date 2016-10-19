jQuery(document).ready(function($){

    var handle_resize = function() {
        var w = $(window).width();
        $('img').addClass('hidden');
        if (w >= 620) {
            $('#680').removeClass('hidden');
        }
        else if (w >= 520) {
            $('#520').removeClass('hidden');
        }
        else if (w >= 370) {
            $('#370').removeClass('hidden');
        }
        else {
            $('#278').removeClass('hidden');
        }
    };

    handle_resize();

    $( window ).resize(handle_resize);

});

