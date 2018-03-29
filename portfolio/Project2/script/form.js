var form_name=$("#name");
var form_name2=$("#name2");
var email=$("#email");
var coment=$("#coment");
function sub(){
	form_name.css('border','1.5px solid white');
	form_name2.css('border','1.5px solid white');
	email.css('border','1.5px solid white');
	coment.css('border','1.5px solid white');
	var action=true;
	if(form_name.val()==""){
		form_name.css('border','1.5px solid red');
		alert("Вы не ввели ваше Имя")
		action=false;
	}
	if(form_name2.val()==""){
		alert("Вы не ввели вашу Фамилию")
		form_name2.css('border','1.5px solid red');
		action=false;
	}
	if(email.val()==""){
		alert("Вы не ввели ваш Email")
		email.css('border','1.5px solid red');
		action=false;
	}
	if(coment.val()==""){
		alert("Вы не ввели сообщение")
		coment.css('border','1.5px solid red');
		action=false;
	}
	if(action==true){
		alert("Ваша заявка принята");
	}
	return action;
	
}
$('#form').submit(sub)