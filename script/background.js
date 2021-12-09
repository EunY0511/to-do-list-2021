const images = [];

for(let image = 1; image < 26; image++) {
    images.push(`${image}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.classList = "background";