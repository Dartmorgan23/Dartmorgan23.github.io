var player='x';
player_name='ходят крестики'
var colum=[];
var colum_value = [
 '', '', '',
 '', '', '',
 '', '', ''
]
for(i=0;i<9;i++){
  colum[i]=$(`td:eq(${i})`);
}
function all_drow(){
    for (i = 0; i < 9; i++) {
        colum[i].text(colum_value[i]);
    }
}
all_drow();

function drow_X(i){
    colum_value[i]='X';
    all_drow();
    player='o';
    $('.player').text('Ходят нолики');
}
function drow_O(i) {
    colum_value[i] = 'O';
    all_drow();
    player='x';
    $('.player').text(player_name);
}
for(let i=0;i<9;i++){
        colum[i].one('click',function () {
            if (player == 'x')
                drow_X(i);
            else if (player == 'o')
                drow_O(i);
        });
} 
function del(){
    for(let i=0;i<9;i++){
        colum[i].unbind();
    }
}
function winner(){
    $('.win').text(`Победили Крестики`)
}
function chek(){
    if (colum_value[0] == "X" & colum_value[4] == "X" & colum_value[8] == "X"){
        colum[0].css('color','red');
        colum[4].css('color','red');
        colum[8].css('color','red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    winner();
    clearInterval(timerId);
}
    else if (colum_value[2] == "X" & colum_value[4] == "X" & colum_value[6] == "X") {
        colum[2].css('color', 'red');
        colum[4].css('color', 'red');
        colum[6].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
        winner();
        clearInterval(timerId);
    }
    else if (colum_value[0] == "X" & colum_value[1] == "X" & colum_value[2] == "X") {
        colum[0].css('color', 'red');
        colum[1].css('color', 'red');
        colum[2].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
        winner();
        clearInterval(timerId);
    }
    else if (colum_value[3] == "X" & colum_value[4] == "X" & colum_value[5] == "X") {
        colum[3].css('color', 'red');
        colum[4].css('color', 'red');
        colum[5].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
        winner();
        clearInterval(timerId);
    }
    else if (colum_value[6] == "X" & colum_value[7] == "X" & colum_value[8] == "X") {
        colum[6].css('color', 'red');
        colum[7].css('color', 'red');
        colum[8].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
        winner();
        clearInterval(timerId);
    }
    else if (colum_value[0] == "X" & colum_value[3] == "X" & colum_value[6] == "X") {
        colum[0].css('color', 'red');
        colum[3].css('color', 'red');
        colum[6].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
        winner();
        clearInterval(timerId);
    }
    else if (colum_value[1] == "X" & colum_value[4] == "X" & colum_value[7] == "X") {
        colum[1].css('color', 'red');
        colum[4].css('color', 'red');
        colum[7].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    winner();
        clearInterval(timerId);
    }
    else if (colum_value[2] == "X" & colum_value[5] == "X" & colum_value[8] == "X") {
        colum[2].css('color', 'red');
        colum[5].css('color', 'red');
        colum[8].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    winner();
        clearInterval(timerId);
    }
    else if (colum_value[0] == "O" & colum_value[4] == "O" & colum_value[8] == "O") {
        colum[0].css('color', 'red');
        colum[4].css('color', 'red');
        colum[8].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[2] == "O" & colum_value[4] == "O" & colum_value[6] == "O") {
        colum[2].css('color', 'red');
        colum[4].css('color', 'red');
        colum[6].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[0] == "O" & colum_value[1] == "O" & colum_value[2] == "O") {
        colum[0].css('color', 'red');
        colum[1].css('color', 'red');
        colum[2].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[3] == "O" & colum_value[4] == "O" & colum_value[5] == "O") {
        colum[3].css('color', 'red');
        colum[4].css('color', 'red');
        colum[5].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[6] == "O" & colum_value[7] == "O" & colum_value[8] == "O") {
        colum[6].css('color', 'red');
        colum[7].css('color', 'red');
        colum[8].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[0] == "O" & colum_value[3] == "O" & colum_value[6] == "O") {
        colum[0].css('color', 'red');
        colum[3].css('color', 'red');
        colum[6].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[1] == "O" & colum_value[4] == "O" & colum_value[7] == "O") {
        colum[1].css('color', 'red');
        colum[4].css('color', 'red');
        colum[7].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
    else if (colum_value[2] == "O" & colum_value[5] == "O" & colum_value[8] == "O") {
        colum[2].css('color', 'red');
        colum[5].css('color', 'red');
        colum[8].css('color', 'red');
        for(let i=0;i<9;i++){
        colum[i].unbind();
    }
    $('.win').text("Победили Нолики");
        clearInterval(timerId);
    }
}
var timerId=setInterval(chek,300);
function play(){
    colum_value = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
    $('.win').text('');
    all_drow();
    del();
    $('.win').text("Идет игра с другом");
    $('.player').text(player_name);
    player = 'x';
    for (let i = 0; i < 9; i++) {
        colum[i].one('click', function () {
            if (player == 'x')
                drow_X(i);
            else if (player == 'o')
                drow_O(i);
        });
        for (let i = 0; i < 9; i++) {
            colum[i].css('color', 'black');
        }
    }
    var timerId = setInterval(chek, 300);
}
$('button:eq(0)').on('click',play);
function chekClass(){
if($('button:eq(1)').attr('class')=='freind')
    {
        $('.win').text("Идет игра с другом");
        $('button:eq(1)').text("Играть с компьютером");
} 
if ($('button:eq(1)').attr('class') == 'computer')
    {
        $('.win').text("Идет игра с компьютером");
    $('button:eq(1)').text("Играть с другом");
}
}
/*
$('button:eq(1)').on('click',function(){
    $('button:eq(1)').toggleClass('freind');
    $('button:eq(1)').toggleClass('computer');
    chekClass();
   
});*/
$('button:eq(1)').click(function(){
    alert('Эта возможность на данный момент находится в разработке');
})

