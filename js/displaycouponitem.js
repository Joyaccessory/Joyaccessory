const use = document.querySelector('#use')
const coupon = document.querySelector('#before')
const couponBg = document.querySelector('#couponBg')
const correct = document.querySelector('#correct')
const couponitem = document.querySelector('.couponitem')
const canNot1 = document.querySelector('.cannot1')
const can2 = document.querySelector('.can2')
const canNot3 = document.querySelector('.cannot3')
const img = document.querySelector('.img')
const item1 = document.querySelector('.item_1')
const item2 = document.querySelector('.item_2')
const item3 = document.querySelector('.item_3')


//彈出視窗
use.addEventListener('click', () => {
    coupon.style.visibility = getComputedStyle(coupon).visibility === 'hidden' ? 'visible' : 'hidden';
})


//選擇優惠券
item1.addEventListener('click', () => {
    canNot1.classList.toggle('active')
})

item2.addEventListener('click', () => {
    can2.classList.toggle('active')
})

item3.addEventListener('click', () => {
    canNot3.classList.toggle('active')
})

//離開視窗
const closeBg = () => {
    if(getComputedStyle(coupon).visibility === 'visible'){
        coupon.style.visibility = 'hidden';
        can2.classList.remove('active');
    }
}
couponBg.addEventListener('click', closeBg)
correct.addEventListener('click', closeBg)


// //選擇優惠券後取消hover
// const disableModal = () => {
//     img.style.opacity = getComputedStyle(img).opacity === '0.7' ? '1' : '0.7';
//     img.style.scale = getComputedStyle(img).scale === '1.03' ? '1' : '1.03';
// }
// document.querySelectorAll('.couponitem').forEach((node) => {
//     node.addEventListener('mousedown', disableModal);
// })

// couponitem.addEventListener('mousedown', () =>{
//     if(img.style.opacity = '0.7', img.style.scale = '1.03'){
//         img.style.opacity = '1', img.style.scale = '1';
//     }else {
//         img.style.opacity = '0.7', img.style.scale = '1.03';
//     }
// })