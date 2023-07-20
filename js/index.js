const popup = document.querySelector('.popup-js')
const btn = document.querySelector('.btn-js')
const closeBtn = document.querySelector('.btn__close-js')


btn.addEventListener('click', function() {
    popup.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open')
})
