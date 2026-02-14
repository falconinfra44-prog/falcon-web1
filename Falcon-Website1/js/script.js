// AUTO PROJECT GALLERY

window.onload = function(){

const gallery = document.getElementById("gallery");

const folders = ["construction","renovation","design"];

folders.forEach(folder => {

for(let i=1;i<=10;i++){

let img = document.createElement("img");

img.src = `images/${folder}/${folder}${i}.jpg`;

img.onerror = function(){
this.style.display="none";
};

gallery.appendChild(img);

}

});

};


// PARTICLES

particlesJS("particles-js", {
particles: {
number: { value: 110 },
size: { value: 3 },
move: { speed: 2 },
line_linked: {
enable:true,
distance:140,
color:"#ffffff",
opacity:0.6
}
}
});
