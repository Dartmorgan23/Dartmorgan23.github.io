var left=$('.arrow_left');var right=$('.arrow_right');var photo=$('.about_photo');var photo_text=$('.photo_text');var y=0;var q=-1;var x=0;right.click(function(){$(".about_photo").animate({left:"-295px"},200);setTimeout(function(){$(".about_photo .photo_text").eq(0).clone().appendTo(".about_photo");$(".about_photo .photo_text").eq(0).remove();$(".about_photo").css('left',"0px");},300);});left.click(function(){$(".about_photo .photo_text").eq(-1).clone().prependTo(".about_photo");$(".about_photo").css("left","-295px");$(".about_photo").animate({left:"0px"},200);$(".about_photo .photo_text").eq(-1).remove();});var design=$(".design");var all=$(".all");var brending=$('.brending');var development=$(".development");var item_start1=$(".item_start1");var item_start2=$(".item_start2");var item_start3=$(".item_start3");function go(it1,it2,it3){var item1=$("."+it1);var item2=$("."+it2);var item3=$("."+it3);var posTop1=(item_start1.position().top)-(item1.position().top);var posLeft1=(item_start1.position().left)-(item1.position().left);var posTop2=(item_start2.position().top)-(item2.position().top);var posLeft2=(item_start2.position().left)-(item2.position().left);var posTop3=(item_start3.position().top)-(item3.position().top);var posLeft3=(item_start3.position().left)-(item3.position().left);item1.animate({top:posTop1,left:posLeft1},1000);item2.animate({top:posTop2,left:posLeft2},1000);item3.animate({top:posTop3,left:posLeft3},1000);}function hiden1(){$(".brending3").css("visibility","hidden");$(".brending1").css("visibility","hidden");$(".brending2").css("visibility","hidden");$(".development1").css("visibility","hidden");$(".development2").css("visibility","hidden");$(".development3").css("visibility","hidden");}function hiden2(){$(".design1").css("visibility","hidden");$(".design2").css("visibility","hidden");$(".design3").css("visibility","hidden");$(".development1").css("visibility","hidden");$(".development2").css("visibility","hidden");$(".development3").css("visibility","hidden");}function hiden3(){$(".brending3").css("visibility","hidden");$(".brending1").css("visibility","hidden");$(".brending2").css("visibility","hidden");$(".design1").css("visibility","hidden");$(".design2").css("visibility","hidden");$(".design3").css("visibility","hidden");}function reset(){$('img').css("visibility","visible");$(".design1").css('top','0px');$(".design1").css('left','0px');$(".design2").css('top','0px');$(".design2").css('left','0px');$(".design3").css('top','0px');$(".design3").css('left','0px');$(".brending1").css('top','0px');$(".brending1").css('left','0px');$(".brending2").css('top','0px');$(".brending2").css('left','0px');$(".brending3").css('top','0px');$(".brending3").css('left','0px');$(".development1").css('top','0px');$(".development1").css('left','0px');$(".development2").css('top','0px');$(".development2").css('left','0px');$(".development3").css('top','0px');$(".development3").css('left','0px');}design.click(function(){design.addClass("image_action")
all.removeClass("image_action")
brending.removeClass("image_action")
development.removeClass("image_action")
reset();go('design1','design2','design3');hiden1();});brending.click(function(){brending.addClass("image_action")
design.removeClass("image_action")
all.removeClass("image_action")
development.removeClass("image_action")
reset();go('brending1','brending2','brending3');hiden2();});development.click(function(){development.addClass("image_action")
design.removeClass("image_action")
brending.removeClass("image_action")
all.removeClass("image_action")
reset();go('development1','development2','development3');hiden3();});all.click(function(){all.addClass("image_action")
design.removeClass("image_action")
brending.removeClass("image_action")
development.removeClass("image_action")
reset();});