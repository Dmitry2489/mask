

let progress = document.getElementById("progressbar"),
    totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function () {
    let progressHight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHight + "%";
});

new WOW().init();

function loadPlayer() {
    if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubePlayerAPIReady = function () {
            onYouTubePlayer();
        };
    }
}

var player;
function onYouTubePlayer() {
    player = new YT.Player("video", {
        height: "360",
        width: "640",
        videoId: "MeaWvgsUGvc",
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

$(function () {
    loadPlayer();
});

const popUp = document.querySelector(".popup");
const btn = document.querySelectorAll(".btns-price");

popUp.classList.add("animated", "fadeIn");

popUp.addEventListener("click", (e) => {
    if (e.target == popUp) {
        popUp.style.display = "none";
    }
});

btn.forEach((item) => {
    
    item.addEventListener("click", () => {
        popUp.style.display = "flex";
    });
});
