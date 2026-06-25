const Modal=document.getElementById('modal');
const Button = document.getElementById('button');
Button.addEventListener('click', () => {
Modal.classList.toggle('hidden');
});
const close=document.getElementById('Close');
close.addEventListener('click',() => {
Modal.classList.toggle('hidden');
})