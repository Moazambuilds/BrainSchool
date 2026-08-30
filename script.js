// Reload header and footer first
document.addEventListener("DOMContentLoaded", function () {

    fetch("/shared/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

        const toggleIcon = document.querySelector(".toggle-icon");
        const menu = document.querySelector(".menu");
        const cross = document.querySelector(".cross-icon");

        toggleIcon.addEventListener("click", function () {
            menu.classList.toggle("active");
            toggleIcon.style.display="none";
            cross.style.display="block";
        })

        cross.addEventListener("click", function () {
            menu.classList.remove("active");
            toggleIcon.style.display="block";
            cross.style.display="none";
        });

        // =========================
        // DROPDOWN
        // =========================

        const dropdownToggles =
            document.querySelectorAll(".dropdown-toggle");

        dropdownToggles.forEach(function (toggle) {

            toggle.addEventListener("click", function (event) {

                if (window.innerWidth <= 992) {

                    event.preventDefault();

                    const parent = toggle.parentElement;

                    parent.classList.toggle("dropdown-open");

                }

            });

        });
            // Header load hone ke BAAD ye code chalega
            const links = document.querySelectorAll(".menu ul a:not(.no-active)");

            links.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add("active");
                }
            });

            const searchopen = document.querySelector(".opensearch");
            const searchbox1 = document.querySelector(".searchbox");
            const searchclose = document.querySelector(".closesearch");

            searchopen.addEventListener("click", function () {
                searchbox1.style.display = "flex";
            });

            searchclose.addEventListener("click", function () {
                searchbox1.style.display = "none";
            });
        });


    fetch("/shared/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});


// Header scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});