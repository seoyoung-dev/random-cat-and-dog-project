const catScreen = document.querySelector("#cat_result");
const dogScreen = document.querySelector("#dog_result");

const catBtn = document.querySelector("#cat_btn");
const dogBtn = document.querySelector("#dog_btn");

catBtn.addEventListener("click", getCatPic);
dogBtn.addEventListener("click", getDogPic);

function getCatPic() {
    fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => (catScreen.innerHTML = `<img src= "${data.file}" />`));
}

function getDogPic() {
    fetch("https://random.dog/woof.json")
        .then((res) => res.json())
        .then((data) => (dogScreen.innerHTML = `<img src= "${data.url}" />`));
}
