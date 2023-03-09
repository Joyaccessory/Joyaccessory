const feedback = document.querySelector('.feedback')
const beforeComment = document.querySelector('#before_comment')
const beforeCommentBg = document.querySelector('#before_commentBg')
const cross = document.querySelector('.cross')

const showModal = () => {
    beforeComment.style.visibility = getComputedStyle(beforeComment).visibility === 'hidden' ? 'visible' : 'hidden';
}

document.querySelectorAll('.feedback').forEach((node) => {
    node.addEventListener('click', showModal);
})


//離開
const closeBg = () => {
    if(getComputedStyle(beforeComment).visibility === 'visible'){
        beforeComment.style.visibility = 'hidden';
    }
}

cross.addEventListener('click', closeBg);
beforeCommentBg.addEventListener('click', closeBg);

