const display = document.querySelector('.display')
const shopcarContent = document.querySelector('.showcontent')

display.addEventListener('click', () => {
    shopcarContent.classList.toggle('show2');
});