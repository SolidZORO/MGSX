$(function () {



    $('.section').bind('inview', function (event, visible, visiblePartX, visiblePartY) {

        if (visible) {
            $(this).css({
                'border-left-color': "#75A89C",
                'transition': "all 1s ease"
            });
            if (visiblePartY == 'bottom') {
                $(this).find('audio').css({
                    'visibility': "visible",
                    'position': "fixed",
                    'top': "5px",
                    'transition': "all .5s ease"

                });
            } else if (visiblePartY == 'top') {
                $(this).find('audio').css({
                    'visibility': "visible",
                    'position': "static",
                    'top': "5px",
                    'transition': "all .5s ease"
                });

            } else if (visiblePartY == undefined) {
                $(this).find('audio').css({
                    'visibility': "hidden",
                    'transition': "all .5s ease"
                });

            }
        } else {
            $(this).css({
                'border-left-color': "#2D403C",
                'transition': "all 1s ease"
            });
            $(this).find('audio').css({
                'visibility': "hidden",
                'transition': "all .5s ease"
            });

        }



    });







    $('.gallery').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            if (visiblePartY == 'top' || visiblePartY == undefined) {
                $('audio').css({
                    'visibility': "hidden",
                    'transition': "all .5s ease"

                });
            }
        } else {
            $('audio').css({
                'visibility': "visible",
                'transition': "all .5s ease"
            });
        }
    });

})