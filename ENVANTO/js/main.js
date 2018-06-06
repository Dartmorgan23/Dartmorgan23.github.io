$('#book').ready(function() {
    $('.flex_menu').slideUp(0);
  });
$(function(){
    
    $('.mobile_menu img').click(function(){
        $('.flex_menu').slideToggle();
    });
    $('footer .buton_up').click(function(){
        if($(" html, body ").scrollTop()!==0){
        $(" html, body ").stop();
        $(" html, body ").clearQueue();
        $(" html, body ").animate( { scrollTop: 0}, 2000 )
        }
    });
    var date_to=new Date(2018, 05, 22, 10, 00, 00);
    function get_Date (){
        let date_now=new Date();
        var arr_date={
            day:Math.floor((date_to-date_now)/(1000*3600*24)),
            hours:(date_to-date_now)/(1000*3600),
            minutes:(date_to-date_now)/(1000*60),
            seconds:(date_to-date_now)/(1000)
        }
        var hours=Math.floor(arr_date.hours-arr_date.day*24);
        arr_date.hours=hours;
        var minutes=Math.floor(arr_date.minutes- arr_date.day*24*60 -arr_date.hours*60);
        arr_date.minutes=minutes;
        var seconds=Math.floor(arr_date.seconds - arr_date.day*24*3600 -arr_date.hours*3600-arr_date.minutes*60);
        arr_date.seconds=seconds;
        return arr_date
    }
    function get_Timer(arr){
        $('#day').text(arr.day); 
        $('#hour').text(arr.hours);
        $('#minute').text(arr.minutes);
        $('#second').text(arr.seconds);
    }
    let arr=get_Date();
        get_Timer(arr);
    var timerId = setInterval(function(){
        let arr=get_Date();
        get_Timer(arr);
    },1000)
   
})
