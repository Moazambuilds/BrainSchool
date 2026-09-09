
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

//view image on click and move next and prevs
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

// Create map
        const map = L.map("map").setView(
            [32.15, 74.20],
            11
        );
        // Add OpenStreetMap tiles      
 L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; OpenStreetMap contributors &copy; CARTO'
    }
).addTo(map);
        // ================= CAMPUS DATA =================

        const campuses = [

            {
                name: "Daska City Campus",
                address: "Daska",
                contact: "03268282325",
                lat: 32.3246,
                lng: 74.3500
            },

            {
                name: "Al-Rehmat Campus",
                address: "Gujranwala",
                contact: "03268282324 03268282325 03268282326",
                lat: 32.1617,
                lng: 74.1883
            },

            {
                name: "Kids & Boys Campus",
                address: "Gujranwala",
                contact: "03268282324 03268282325 03268282326",
                lat: 32.1620,
                lng: 74.1950
            },

            {
                name: "Jinnah Campus",
                address: "Gujranwala",
                contact: "03268282321 03268282322 03268282334",
                lat: 32.1750,
                lng: 74.2050
            },

            {
                name: "Fatima Campus",
                address: "Gujranwala",
                contact: "03268282326",
                lat: 32.1780,
                lng: 74.1850
            },

            {
                name: "Sakina Campus",
                address: "Gujranwala",
                contact: "03268282332",
                lat: 32.1680,
                lng: 74.2150
            },

            {
                name: "Khadija Campus",
                address: "Daska",
                contact: "03268282330",
                lat: 32.3300,
                lng: 74.3450
            },

            {
                name: "Naseem Campus",
                address: "Daska",
                contact: "03268282331",
                lat: 32.3100,
                lng: 74.3650
            }

        ];
        // ================= MARKERS =================

        const markers = [];

        campuses.forEach(function (campus) {
            // Create marker
          const marker = L.marker(
    [campus.lat, campus.lng],
    {
        icon: L.divIcon({
            className: "custom-marker",
            html: '<i class="fa-solid fa-location-dot"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        })
    }
).addTo(map);


            // Popup content
            const popup = `

                <div class="info-card">

                    <h3>${campus.name}</h3>

                    <div class="info-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${campus.address}</span>
                    </div>

                    <div class="info-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>${campus.contact}</span>
                    </div>

                    <a class="direction-btn"
                        href="https://www.google.com/maps/dir/?api=1&destination=${campus.lat},${campus.lng}"
                        target="_blank">

                        <i class="fa-solid fa-location-arrow"></i>
                        Get Directions
                    </a>
                </div>
            `;


            // Attach popup to marker
            marker.bindPopup(popup);

            // Save marker
            markers.push(marker);

        });


        // ================= CAMPUS CARDS =================

        const cards = document.querySelectorAll(
            ".campus-card"
        );


        cards.forEach(function (card) {


            card.addEventListener("click",function () {
                    // Get card index
                    const index = card.dataset.index;
                    // Get related marker
                    const marker = markers[index];
                    // Move map to marker
                    map.setView(
                        marker.getLatLng(),
                        16
                    );
                    // Open marker popup
                    marker.openPopup();

                }
            );

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
// api key
// AIzaSyDQ7o8Pqetc4w06zFsWXDore9_uhcd07C4