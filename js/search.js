$(function() {
    $("#form-search").hide();
    $(".search-btn").on('click', function() {
        $("#form-search").show();
        appNormalise();
    })



});
$(document).mouseup(function (e){
    var div = $("#form-search");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.hide();
    }
});