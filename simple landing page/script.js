const icon = document.getElementById("icon")
const music = document.getElementById("music")


icon.addEventListener("click", () => {
    if (icon.src.endsWith('pause.png')) {
        music.pause();
        icon.src = 'img/play.png';
    } else {
        music.play();
        icon.src = 'img/pause.png';
    }
});
