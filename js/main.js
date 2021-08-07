// Mobile navbar collapse //
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
// Mobile navbar collapse //

// Mouse on-click //
function playAudio() {
    var myAudio = new Audio();
    myAudio.src = "audio/mouse-click.mp3";
    myAudio.play();
}
jQuery(function () {
    $('#on-click').click(function () {
        playAudio();
    });
});
// Mouse on-click //

// Unitegallery initiate the gallery - enter //
jQuery(document).ready(function () {
    jQuery("#gallery").unitegallery();
});
// Unitegallery initiate the gallery - enter //

// Google-search //
(function () {
    var cx = '012716393544523327759:xljwpfjdnsw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
// Google-search //
