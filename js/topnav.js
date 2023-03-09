const search = document.querySelector('.search')
const typeKeyword = document.querySelector('.typekeyword')
const carIcon = document.querySelector('.caricon')
const shopCar = document.querySelector('.shopcar')
const beforeShopcar = document.querySelector('.before-shopcar')

//搜尋JS
search.addEventListener('click', () => {
    if(typeKeyword.style.visibility === 'hidden'){
        typeKeyword.style.visibility = 'visible';
    }else{
        typeKeyword.style.visibility = 'hidden';
    }
});

//購物車JS
carIcon.addEventListener('click', () =>{
    if(shopCar.style.visibility === 'hidden'){
        shopCar.style.visibility = 'visible';
    }else {
        shopCar.style.visibility = 'hidden';
    }
})

window.addEventListener('mouseup', function(event){
    if(event.target = shopCar){
        shopCar.style.visibility = 'hidden';
    }
})

