// Reload header and footer first
document.addEventListener("DOMContentLoaded", function () {

    fetch("/shared/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

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