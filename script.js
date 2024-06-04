const inputShow = document.querySelector('#show');
const inputHide = document.querySelector('#hide');
const image = document.querySelector('.img')
const text = document.querySelector('.subtitle')


inputShow.addEventListener('click', () => {
    image.style.transform = 'scale(1)';
    image.style.transition = '0.8s';
    image.style.opacity = '1';
    text.textContent = '¡Mirá la siguiente imagen!'; 
})

inputHide.addEventListener('click', () => {
    image.style.transform = 'scale(0)';
    image.style.transition = '0.8s';
    image.style.opacity = '0';
    text.textContent = '¡No tenemos ninguna imagen!'; 

})