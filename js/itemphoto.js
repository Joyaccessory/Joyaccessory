//點擊顏色更換外框highlight
const colorActive = document.querySelectorAll('.coloractive')

function changeColor() {
    colorActive.forEach (c => c.classList.remove('highlight_color'));
    this.classList.add('highlight_color');
};

colorActive.forEach (c => c.addEventListener('click', changeColor));



//點擊顏色更換對應圖片
function changecolor1(){
    document.getElementById('change-img').src='img/earring_item/1.png';
}
function changecolor2(){
    document.getElementById('change-img').src='img/earring_item/2.png';
}
function changecolor3(){
    document.getElementById('change-img').src='img/earring_item/3.png';
}
function changecolor4(){
    document.getElementById('change-img2').src='img/earring_item/1.png';
}
function changecolor5(){
    document.getElementById('change-img2').src='img/earring_item/2.png';
}
function changecolor6(){
    document.getElementById('change-img2').src='img/earring_item/3.png';
}



//點擊選擇購買數量
const plus = document.getElementsByClassName('plus')
const reduce = document.getElementsByClassName('reduce')

//點擊增加數量
for(var i = 0; i < plus.length; i++){
    var button = plus[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}

//點擊減少數量
for(var i = 0; i < reduce.length; i++){
    var button = reduce[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        if (newValue >= 1){
            input.value = newValue;
        }else {
            input.value = 1
            // alert('購買數量不可為0')
        }
    })
}

