var w=$(window).width();
var h=$(window).height();
if(w<430){
	$('#view').attr('content','width=430px, initial-scale=1')
}
slide('.header_colum:eq(2)', 'right');
slide('.header_colum:eq(0)', 'left');
slide('.header_colum:eq(1)', 'top');

$(window).scroll(function() 
{
   if($(window).scrollTop() >= $('.colum').offset().top-h)
    {
		slide('.colum:eq(1)', 'top');
		slide('.colum:eq(0)', 'left');
		slide('.colum:eq(2)', 'right');
    }
    if($(window).scrollTop() >= $('.credo_colum').offset().top-h)
    {
		slide('.credo_colum:eq(1)', 'top');
		slide('.credo_colum:eq(0)', 'left');
		slide('.credo_colum:eq(2)', 'right');
    }
    if($(window).scrollTop() >= $('.first_head').offset().top-h)
    {
		slide('.first_text:eq(0)', 'left');
		slide('.first_img:eq(0)', 'right');
    }
    if($(window).scrollTop() >= $('.first_text:eq(1)').offset().top-h)
    {
		slide('.first_text:eq(1)', 'left');
		slide('.first_img:eq(1)', 'right');
    }
    if($(window).scrollTop() >= $('.first_text:eq(2)').offset().top-h)
    {
		slide('.first_text:eq(2)', 'left');
		slide('.first_img:eq(2)', 'right');
    }

});
