$(function() {

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    $(document).ready(function(){
        $('.sidenav').sidenav();
    });
    
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });

    $(document).ready(function(){
        $('.fixed-action-btn').floatingActionButton();
    });

    

    let x = window.matchMedia("(max-width: 600px)");

    function centerCompLi(x){
        if (x.matches) {
            $('.comp_ul').addClass('center');
        }
        else {
            $('.comp_ul').removeClass('center');
        }
    }

    x.addListener(centerCompLi);
    centerCompLi(x);
});


