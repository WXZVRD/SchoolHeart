document.getElementById("subscribeButton").addEventListener("click", function () {
    const button = this;

    button.disabled = true;
    button.textContent = "";
    button.classList.add("processing");

    const loader = document.createElement("div");
    loader.className = "loader";
    loader.innerHTML = '<span></span><span></span><span></span>';
    button.appendChild(loader);

    setTimeout(() => {
        button.classList.remove("processing");
        loader.remove();
        button.textContent = "Success!";
        button.style.backgroundColor = "#28a745";

        setTimeout(() => {
            button.disabled = false;
            button.style.backgroundColor = "#FF6551";
            button.textContent = "Subscribe";
        }, 2000);
    }, 3000);
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add("scrolled");
        header.classList.remove("transparent");
    } else {
        header.classList.add("transparent");
        header.classList.remove("scrolled");
    }
});