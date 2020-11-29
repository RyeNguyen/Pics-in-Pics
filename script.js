const videoElement = document.getElementById("video");
const button = document.querySelector("a");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log("Damn! Error: ", err);
    }
}

button.addEventListener("click", async () => {
    //Disable Button
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
})

//On load
selectMediaStream().then(r => console.log(r));