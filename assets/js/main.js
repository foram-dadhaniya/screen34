/*
$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});
*/
$(document).ready(function () {
$('#exampleModal').on('shown.bs.modal', function (e) {
    $(".screen").css({ opacity: 0.3 });
})
    $('#exampleModal').on('hide.bs.modal', function (e) {
        $(".screen").css({ opacity: 1 });
    })

});
