// ===== AUTO GALLERY LOADER =====

// Get folder name from body attribute
const folder = document.body.getAttribute("data-folder");

const gallery = document.getElementById("gallery");
// STOP if gallery doesn't exist

if (!gallery || !folder) {
    console.log("Gallery not available on this page.");
} else {
// Load images automatically (1–100)
for (let i = 1; i <= 100; i++) {

    let img = document.createElement("img");
    img.src = `images/${folder}/${folder}${i}.jpg`;
    img.loading = "lazy";

    // Hide image if not found
    img.onerror = function () {
        this.style.display = "none";
    };

    // Open fullscreen on click
    img.onclick = function () {
        document.getElementById("fullscreenViewer").style.display = "flex";
        document.getElementById("fullImage").src = this.src;
    };

    gallery.appendChild(img);
}


// Close fullscreen
document.getElementById("closeViewer").onclick = function () {
    document.getElementById("fullscreenViewer").style.display = "none";
};

}

