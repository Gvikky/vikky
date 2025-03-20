function openImage(imgElement) {
    document.getElementById("fullImage").src = imgElement.src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
