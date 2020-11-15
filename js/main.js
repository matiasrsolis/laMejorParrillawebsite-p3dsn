$(document).ready(function(){
    $("#btnMenu").click(function(){
        $(".mainNav").toggleClass("hideMenu");
        $(".iconMenu").toggleClass("none");
        $(".iconCloseHide").toggleClass("iconClose");
        $("#logoHeader").toggleClass("logoSmall");
    })
})