const gallery = document.getElementById("gallery");

const folders = ["construction","renovation","design"];

folders.forEach(folder => {

for(let i=1;i<=100;i++){

let img = document.createElement("img");

img.src = `images/${folder}/${folder}${i}.jpg`;

img.onerror = function(){
this.style.display="none";
};

// FULLSCREEN CLICK
img.onclick = function(){

document.getElementById("fullscreenViewer").style.display="flex";
document.getElementById("fullImage").src = this.src;

};

gallery.appendChild(img);

}

});


// CLOSE
document.getElementById("closeViewer").onclick = function(){
document.getElementById("fullscreenViewer").style.display="none";
};
