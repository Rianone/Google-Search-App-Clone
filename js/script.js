const search_input = document.getElementById('search_input')

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        if (search_input.value != ' ') {
            window.location.assign("https://www.google.nl/search?q=" + search_input.value)
        }
    }
});

const images = document.querySelectorAll(".image_photo")
const body = document.querySelector(".container")

for (let i = 0; i < images.length; i++) {
    const image = images[i];

    image.addEventListener("click", () => {
        body.style.background = `url(../images/bg${i + 1}.avif) no-repeat`;
        body.style.backgroundSize = "cover";
    })
    
}

