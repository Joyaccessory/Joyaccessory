$(function() {
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 900) {
            $(".addbtn").fadeIn();
        } else {
            $(".addbtn").fadeOut();
        }
    });

    const basket = document.querySelector('.basket');
    const addBtn = document.querySelector('.addbtn');
    const addBtnPopup = document.querySelector('.addBtn_popup')

    const add = document.querySelector('#before');
    const addBg = document.querySelector('#beforeBg');

    const showModal = () => {
        add.style.visibility = getComputedStyle(add).visibility === 'hidden' ? 'visible' : 'hidden';
    }

    //購物車icon點擊觸發
    basket.addEventListener('click', showModal);

    //earring_item右上角加入購物車點擊觸發
    addBtn.addEventListener('click', showModal);

    //點擊範圍外關閉彈出視窗
    addBg.addEventListener('click', () => {
        add.style.visibility = 'hidden';
    })

    //點擊彈出視窗的加入購物車按鈕跳出提示&關閉視窗
    addBtnPopup.addEventListener('click', () => {
        if(add.style.visibility === 'visible'){
            add.style.visibility = 'hidden';
            alert('成功加入購物車');
        }
    })

    
    document.querySelectorAll('.item .basket').forEach((node) => {
        node.addEventListener('click', showModal);
    })
});



//點擊中央加入購物車按鈕跳出提示
const addToShopCarBtn = document.querySelector('.button_addtoshopcar');

addToShopCarBtn.addEventListener('click', function() {
    alert('成功加入購物車')
})
