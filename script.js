 document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".menu ul a:not(.no-active)");

    links.forEach(link => {

        if (link.href === window.location.href) {
            link.classList.add("active");
        }

    });

});
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
