$(document).ready(function(){
    $("#btnMenu").click(function(){
        $(".mainNav").toggleClass("hideMenu");
        $(".iconMenu").toggleClass("none");
        $(".iconCloseHide").toggleClass("iconClose");
        $("#logoHeader").toggleClass("logoSmall");
    });
    
    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
})