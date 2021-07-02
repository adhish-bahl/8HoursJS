const click = document.querySelector(".btn");

click.addEventListener("click", generate);

function generate () {
    const image = document.createElement("img");
    image.setAttribute("src", "https://thecatapi.com/api/images/get?/format=src&type=gif&size=small");
    document.querySelector(".output").appendChild(image);
}