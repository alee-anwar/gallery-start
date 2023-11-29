const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const altTextObject = {
    'pic1.jpg': 'Alternative text for pic1',
    'pic2.jpg': 'Alternative text for pic2',
    'pic3.jpg': 'Alternative text for pic3',
    'pic4.jpg': 'Alternative text for pic4',
    'pic5.jpg': 'Alternative text for pic5'
};  

/* Looping through images */
imgArray.forEach((fileName) => {
    const imgElement = document.createElement('img');

    imgElement.alt = altTextObject[fileName];
    imgElement.src = `images/${fileName}`;

    imgElement.addEventListener('click', () => {
        displayedImage.alt = imgElement.alt;
        displayedImage.src = imgElement.src;
    })

    thumbBar.appendChild(imgElement);
})

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    displayedImage.classList.toggle
})