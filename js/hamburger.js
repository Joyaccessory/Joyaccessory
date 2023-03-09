//點擊icon展開漢堡選單
const hamBtn = document.querySelector('.ham-btn')
const beforeHamburger = document.querySelector('#before-hamburger')
const beforeHamburgerBg = document.querySelector('#before-hamburgerBg')

hamBtn.addEventListener('click', () =>{
  beforeHamburger.style.visibility = getComputedStyle(beforeHamburger).visibility === 'hidden' ? 'visible' : 'hidden';
})
beforeHamburgerBg.addEventListener('click', () => {
  beforeHamburger.style.visibility = 'hidden';
})


//點擊主項目箭頭展開子選單
const downMenu1 = document.querySelector('.downmenu1')
const downMenu2 = document.querySelector('.downmenu2')
const downMenu3 = document.querySelector('.downmenu3')

function toggleMenu1() {
  downMenu1.classList.toggle('active1')
}
function toggleMenu2() {
  downMenu2.classList.toggle('active2')
}
function toggleMenu3() {
  downMenu3.classList.toggle('active3')
}


//點擊子項目箭頭展開下層選單
const downMenu21 = document.querySelector('.downmenu2-1')
const downMenu22 = document.querySelector('.downmenu2-2')
const downMenu23 = document.querySelector('.downmenu2-3')
const downMenu24 = document.querySelector('.downmenu2-4')
const downMenu25 = document.querySelector('.downmenu2-5')
const downMenu26 = document.querySelector('.downmenu2-6')
const downMenu27 = document.querySelector('.downmenu2-7')

function toggleMenu21() {
  downMenu21.classList.toggle('active21')
}
function toggleMenu22() {
  downMenu22.classList.toggle('active22')
}
function toggleMenu23() {
  downMenu23.classList.toggle('active23')
}
function toggleMenu24() {
  downMenu24.classList.toggle('active24')
}
function toggleMenu25() {
  downMenu25.classList.toggle('active25')
}
function toggleMenu26() {
  downMenu26.classList.toggle('active26')
}
function toggleMenu27() {
  downMenu27.classList.toggle('active27')
}


//點擊觸發箭頭旋轉
$(".chevron").click(function () {
  $(this).toggleClass("down");
})