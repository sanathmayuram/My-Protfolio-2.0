const button1 = document.querySelector(".button");

const buttons = document.querySelectorAll("#projects button");

button1.addEventListener("click", () => {
    window.location.href= "#AboutMe";
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        window.open("https://github.com/sanathmayuram","_blank");
    })
})