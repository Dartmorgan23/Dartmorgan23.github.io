function slide(target, side){
	var header_icon1=$(target);
	header_icon1.css('opacity', '0');
	header_icon1.css('position','relative');
	var q=(header_icon1.offset().left+300);
	
	if(side=='left'){q=-q;
		header_icon1.css('left',q);
	header_icon1.animate(
	{
		left:0,
		opacity:1
	}, 2500);
}	
	else if (side=="right"){
		q=q-600;
		header_icon1.css('left',q);
	header_icon1.animate(
	{
		left:0,
		opacity:1
	}, 2500);
	}
	else if(side=='top'){
		q=-600;
		header_icon1.css('top',q);
		header_icon1.animate(
	{
		top:0,
		opacity:1
	}, 2500);

	}
}