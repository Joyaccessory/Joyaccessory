const point = document.querySelector('.point')
const add = document.querySelector('#before')
const addBg = document.querySelector('#beforeBg')
const understand = document.querySelector('.understand')

point.addEventListener('click', () => {
    add.style.visibility = 
    getComputedStyle(add).visibility === 'hidden' ? 'visible' : 'hidden';
})

const closeBg = () => {
    if(getComputedStyle(add).visibility === 'visible'){
        add.style.visibility = 'hidden';
    }
}

understand.addEventListener('click', closeBg)
addBg.addEventListener('click', closeBg)
