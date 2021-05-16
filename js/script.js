{
    function welcome() {
        console.log("Siemankoo!");
    }
    welcome();

    let togglePhoto = () => {
        mountainPhoto.classList.toggle("js-gallery__imageHide");
            seaPhoto.classList.toggle("js-gallery__imageHide");
        };

        let buttonElement = document.querySelector(".gallery__button");
        let mountainPhoto = document.querySelector(".js-gallery__imageMountain");
        let seaPhoto = document.querySelector(".js-gallery__imageSea");

        buttonElement.addEventListener("click", togglePhoto);
}
