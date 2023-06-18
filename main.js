let d = document;
d.querySelector(".burger").addEventListener("click", (event) => {
    d.querySelector(".menu").style.display = "block";
    event.target.style.display = "none";
})
