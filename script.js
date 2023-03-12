



$( document ).ready(function() {
    $("video").prop("volume", 0.2);



    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log( scroll );
        if(scroll >=537){
            $('#topAptitude').addClass('hr')
            $('#botAptitude').addClass('hr1')

            $('.apt-center p')
        }
        else if(scroll <=100){
            $('#topAptitude').removeClass('hr')
            $('#botAptitude').removeClass('hr1')


        }
    });

    $( "figure" ).each(function( index ) {
        $( this ).click(function() {
            let myImg = $(this).find("img");
            let myDesc = $(this).find(".desc");
            let myVideo = $(this).find("video");
            myImg.hide()
            myDesc.hide()

            if (!myVideo.hasClass('play')){
                myVideo.addClass('play')
                myVideo.removeClass('pause')
                myVideo.get(0).play()
            }
            else if (myVideo.hasClass('pause')){
                myVideo.addClass('play')
                myVideo.removeClass('pause')

            }
            myVideo.toggleClass('status')

        })
        $( this ).mouseleave(function() {
            let myImg = $(this).find("img");
            let myDesc = $(this).find(".desc");
            let myVideo = $(this).find("video");
            myImg.show()
            myDesc.show()
            myVideo.get(0).pause()
        })

    });
});