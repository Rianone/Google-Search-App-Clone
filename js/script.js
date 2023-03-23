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


const button = document.getElementById("triggger-mic");
const modal = document.querySelector(".modal-voice-container");

const speechRecognition = window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const textbox = document.getElementById("entered-text")
const instructions = document.getElementById("instructions")
const recognition_button = document.getElementById("recognition-button")
var content = ''

recognition.onstart = function () {
    instructions.innerHTML = "Listening ....";
}

recognition.onspeechend = function () {
    instructions.innerHTML = "No Activity !";
}

recognition.onerror = function () {
    instructions.innerHTML = "Try Again !";
}

recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript

    content += transcript
    textbox.innerHTML = content

    recognition_button.addEventListener("click", () => {
        modal.style.display = "none";
        recognition.stop()
        window.location.assign("https://www.google.nl/search?q=" + content)
    })
}

button.addEventListener("click", function () {
    modal.style.display = "flex";
    recognition.start()
});

window.addEventListener("click", function (evt) {
    if (evt.target == modal) {
        modal.style.display = "none";
        recognition.stop()
    }
});


