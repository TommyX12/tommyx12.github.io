var $div_main;
var $div_main_content;

function ready(){
    
    $('#header').load('components/header/header.html')
    $('#footer').load('components/footer/footer.html')
    
    
    /* $div_main = $('.main');
    $div_main_content = $('.main-content');
    $div_main.hide();
    $div_main_content.hide();
    
    $div_main.fadeIn(500);
    $div_main_content.slideDown(500); */
}

$(document).ready(ready);
