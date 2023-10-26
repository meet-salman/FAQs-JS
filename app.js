const buttonOne = document.querySelector('#one-btn');
const buttonTwo = document.querySelector('#two-btn');
const buttonThree = document.querySelector('#three-btn');

const ansOne = document.querySelector('#ans-one');
const ansTwoo = document.querySelector('#ans-two');
const ansThree = document.querySelector('#ans-three');



buttonOne.addEventListener('click', () => {

    if (buttonOne.innerHTML === '+') {

        buttonOne.innerHTML = '-'
        buttonTwo.innerHTML = '+'
        buttonThree.innerHTML = '+'

        ansOne.style.display = 'block'
        ansTwoo.style.display = 'none'
        ansThree.style.display = 'none'
    }
    else {
        buttonOne.innerHTML = '+'
        ansOne.style.display = 'none'
        ansTwoo.style.display = 'none'
        ansThree.style.display = 'none'
    }
});


buttonTwo.addEventListener('click', () => {

    if (buttonTwo.innerHTML === '+') {

        buttonOne.innerHTML = '+'
        buttonTwo.innerHTML = '-'
        buttonThree.innerHTML = '+'

        ansOne.style.display = 'none'
        ansTwoo.style.display = 'block'
        ansThree.style.display = 'none'
    }
    else {
        buttonTwo.innerHTML = '+'
        ansOne.style.display = 'none'
        ansTwoo.style.display = 'none'
        ansThree.style.display = 'none'
    }
});


buttonThree.addEventListener('click', () => {

    if (buttonThree.innerHTML === '+') {

        buttonOne.innerHTML = '+'
        buttonTwo.innerHTML = '+'
        buttonThree.innerHTML = '-'

        ansOne.style.display = 'none'
        ansTwoo.style.display = 'none'
        ansThree.style.display = 'block'
    }
    else {
        buttonThree.innerHTML = '+'
        ansOne.style.display = 'none'
        ansTwoo.style.display = 'none'
        ansThree.style.display = 'none'
    }
});
