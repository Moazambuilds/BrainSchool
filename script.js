
document.addEventListener("DOMContentLoaded", function () {

    const headerMount = document.getElementById("header");
    const footerMount = document.getElementById("footer");

    // =========================
    // HEADER
    // =========================

    function initHeaderInteractions() {

        const toggleIcon = document.querySelector(".toggle-icon");
        const menu = document.querySelector(".menu");
        const cross = document.querySelector(".cross-icon");

        // Mobile menu
        if (toggleIcon && menu && cross) {

            toggleIcon.addEventListener("click", function () {
                menu.classList.add("active");
                toggleIcon.style.display = "none";
                cross.style.display = "block";
            });

            cross.addEventListener("click", function () {
                menu.classList.remove("active");
                toggleIcon.style.display = "block";
                cross.style.display = "none";
            });
        }

        // Dropdown
        const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

        dropdownToggles.forEach(function (toggle1) {

            toggle1.addEventListener("click", function (event) {

               

                    event.preventDefault();

                    const parent = toggle1.parentElement;

                    if (parent) {
                        parent.classList.toggle("dropdown-open");
                    }
                
            });
        });

        // Active menu link
        const links = document.querySelectorAll(".menu ul a:not(.no-active)");

        links.forEach(function (link) {

            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });

        // Search
        const searchOpen = document.querySelector(".opensearch");
        const searchBox = document.querySelector(".searchbox");
        const searchClose = document.querySelector(".closesearch");

        if (searchOpen && searchBox) {

            searchOpen.addEventListener("click", function () {
                searchBox.style.display = "flex";
            });
        }

        if (searchClose && searchBox) {

            searchClose.addEventListener("click", function () {
                searchBox.style.display = "none";
            });
        }
    }


    // Load Header
    if (headerMount) {

        fetch("/shared/header.html")
            .then(response => response.text())
            .then(data => {

                headerMount.innerHTML = data;

                initHeaderInteractions();
            })
            .catch(() => {
                console.log("Header could not be loaded.");
            });
    }


    // Load Footer
    if (footerMount) {

        fetch("/shared/footer.html")
            .then(response => response.text())
            .then(data => {

                footerMount.innerHTML = data;
            })
            .catch(() => {
                console.log("Footer could not be loaded.");
            });
    }
const filterButtons = document.querySelectorAll(".filterbox .btn");
const galleryGrids = document.querySelectorAll(".gallery-grid");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Large class remove
        galleryItems.forEach(item => {
            item.classList.remove("large");
        });

        // Grids show / hide
        galleryGrids.forEach(grid => {

            const category = grid.dataset.category;

            if (filter === "all" || category === filter) {
                grid.style.display = "grid";
            } else {
                grid.style.display = "none";
            }

        });

        // Images show / hide
        galleryItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


const images = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const close = document.querySelector(".close");
const next =document.querySelector(".next");
const prevs =document.querySelector(".prevs");

images.forEach(function(image) {

    image.addEventListener("click", function() {

        modal.style.display = "flex";
        largeImage.src = image.src;

    });
let index = 0;
    next.addEventListener("click",()=>{
        index++;
        if(index >= images.length){
      index = 0;
        }

        
    largeImage.src=images[index].src;
});

prevs.addEventListener("click",()=>{
    index--;
    if(index < 0)
    {
        index=images.length-1;
    }
    largeImage.src=images[index].src;
});
close.addEventListener("click", function() {
    modal.style.display = "none";
});
});



});
// =========================
// HEADER SCROLL
// =========================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }
});

