const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");

function openVideo(url) {
    iframe.src = url;
    modal.style.display = "flex";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
    iframe.src = ""; // Stop videoafspilning
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
    }
}

