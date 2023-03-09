//取消訂單點擊觸發
const cancel = document.querySelector('.cancel');
const cancel2 = document.querySelector('.cancel2');
const doNotCancel = document.querySelector('.donotcancel');
const beforeCancelOrder = document.querySelector('#before_cancel-order');


const cancelModal = () => {
    beforeCancelOrder.style.visibility = getComputedStyle(beforeCancelOrder).visibility === 'hidden' ? 'visible' : 'hidden';
}
document.querySelectorAll('#person .cancel').forEach((node) => {
    node.addEventListener('click',cancelModal);
})

doNotCancel.addEventListener('click', () => {
    beforeCancelOrder.style.visibility = 'hidden';
})


//待評價點擊觸發
const yet = document.querySelector('.yet');
const beforeComment2 = document.querySelector('#before_comment2');
const cross = document.querySelector('.cross');
const submiComment = document.querySelector('.submit-comment');

const showModalYet = () => {
    beforeComment2.style.visibility = getComputedStyle(beforeComment2).visibility === 'hidden' ? 'visible' : 'hidden';
}
yet.addEventListener('click', showModalYet);
document.querySelectorAll('#person .yet').forEach((node) => {
    node.addEventListener('click', showModalYet);
})

const closeModal = () => {
    beforeComment2.style.visibility = 'hidden';
}
cross.addEventListener('click', closeModal)
submiComment.addEventListener('click', closeModal)


//已評價點擊觸發
const already = document.querySelector('.already');
const beforeComment = document.querySelector('#before_comment');
const beforeCommentBg = document.querySelector('#before_commentBg');
const cross2 = document.querySelector('.cross2');

already.addEventListener('click', () => {
    beforeComment.style.visibility = 
    getComputedStyle(beforeComment).visibility === 'hidden' ? 'visible' : 'hidden';
})

const closeBg = () => {
    if(getComputedStyle(beforeComment).visibility === 'visible'){
        beforeComment.style.visibility = 'hidden';
    }
}

cross2.addEventListener('click', closeBg);
beforeCommentBg.addEventListener('click', closeBg);
