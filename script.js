document.addEventListener("DOMContentLoaded", function() {
  fetch('portfolioItems.json')
    .then(response => response.json())
    .then(portfolioItems => {
        const carouselContainer = document.getElementById("carouselContainer");

        let indicatorsHTML = '<div class="carousel-indicators">';
        let itemsHTML = '<div class="carousel-inner">';

        portfolioItems.forEach((item, index) => {
            indicatorsHTML += `
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="${index}"
                    class="${index === 0 ? 'active' : ''}"
                    aria-current="${index === 0 ? 'true' : 'false'}"
                    aria-label="Slide ${index + 1}"
                ></button>
            `;

            itemsHTML += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <a href="${item.githubLink}" target="_blank">
                        <img src="${item.imgSrc}" class="d-block" alt="${item.alt}" />
                    </a>
                    <div class="carousel-caption d-none d-md-block">
                        <section class="mb-3">
                            <a href="${item.websiteLink}" target="_blank" rel="noreferrer" class="btn btn-warning btn-lg">Ir al sitio web</a>
                            <a href="${item.githubLink}" target="_blank" class="btn btn-warning btn-lg">Ver el código en Github</a>
                        </section>
                    </div>
                </div>
            `;
        });

        indicatorsHTML += '</div>';
        itemsHTML += '</div>';

        carouselContainer.innerHTML = `
            <div id="carouselExampleCaptions" class="carousel slide custom-carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
                ${indicatorsHTML}
                ${itemsHTML}
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;

        const myCarousel = document.querySelector('#carouselExampleCaptions');
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000
        });
    });
});
