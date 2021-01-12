const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

// imgs = thumbBar.querySelectorAll('img');
// for(let i = 0; i < 5; i++) {
//     imgs[i].addEventListener('click', changeImg);
// }
thumbBar.querySelectorAll('img').forEach(
    item => {
        item.addEventListener('click', changeImg)
    }
);

function changeImg(e) {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
}

// const newImage = document.createElement('img');
// newImage.setAttribute('src', e.target.getAttribute('src'));
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0, 0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})