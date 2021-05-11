console.log("Siemankoo!");

let buttonElement = document.querySelector(".gallery__button");
let mountainPhoto = document.querySelector(".js-gallery__imageMountain");
let seaPhoto = document.querySelector(".js-gallery__imageSea");

buttonElement.addEventListener("click", () => {
    mountainPhoto.classList.toggle("js-gallery__imageHide");
    seaPhoto.classList.toggle("js-gallery__imageHide");
 });