let sidebar = document.querySelector(".sidebar")
let container = document.querySelector(".container")
let closer = document.getElementById("closebtn")
let opener = document.getElementById("open-button")

opener.addEventListener("click", (e) => {
   e.preventDefault()
    sidebar.style.width = "300px";
    closer.style.width = "calc(100% + 300px)";
    container.style.opacity = "1";
    closer.style.opacity = "1";
    sidebar.classList.remove("hide");
    sidebar.classList.add("show");
})

closer.addEventListener("click", (e) => {
   e.preventDefault()
    sidebar.style.width = "0";
    closer.style.width = "0";
    container.style.opacity = "1";
    closer.style.opacity = "0.2";
    sidebar.style.transition = "0.5s cubic-bezier(0.19, 1, 0.22, 1)"
    sidebar.classList.remove("show");
    sidebar.classList.add("hide");
})



