(function($) {
    
    // menu tree
    $('.menu-arrow').on('click', function(){
        $(this).parent().toggleClass('actif');
    });
    
    
    $('input[type="search"]').on('search keyup' , function() {
        var s = $(this).val();
        if ( s == '' ) {
            $('#menu').find('li').show().removeClass('actif');
            return ;
        }
        $('#menu').find('li').each(function( ) {
            var str = $(this).find('a').text() ;
            var reg = new RegExp(s,'i');
            if ( !str.match(reg) ) {
                $(this).removeClass('matched').hide();
                
            }else{
                $(this).addClass('matched').show();
            }
        }).filter('.matched').parents('li').addClass('matched').show();
        
        $('#menu').find('.parent.matched').addClass('actif');
    });
    
    
    
})(jQuery);