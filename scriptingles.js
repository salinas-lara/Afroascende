// --- CAROUSEL FUNCTIONALITY ---

const slidesContainer = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots');
const dynamicTextElement = document.getElementById('dynamic-carousel-text');

let currentSlide = 0;

// TEXTS TRANSLATED TO ENGLISH
const carouselTexts = [
    "Representation is crucial for the identity, self-esteem, and sense of belonging of marginalized individuals and groups. It reflects the real diversity in society, challenging limited narratives.",
    "Having Black references in media, politics, and art validates the experiences and aspirations of Black youth, combating racism by showcasing the success and complexity of Afro-Brazilian identity.",
    "Today, the movement for representation is growing, highlighting figures in various areas who inspire and empower. This includes political leaders, artists, and digital influencers who celebrate Black culture."
];

const totalSlides = carouselTexts.length;

function updateCarousel() {
    // 1. Update the slides position
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // 2. Update the dynamic text below the carousel
    dynamicTextElement.textContent = carouselTexts[currentSlide];

    // 3. Update the navigation dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('bg-amarelo-100'); // Active color
            dot.classList.remove('bg-white/50'); // Inactive color
        } else {
            dot.classList.remove('bg-amarelo-100');
            dot.classList.add('bg-white/50');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Initial setup for dots and first text
function initializeDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot', 'h-2', 'w-2', 'rounded-full', 'cursor-pointer', 'transition-colors');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}

// Event listeners for navigation
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Initialize the carousel on page load
initializeDots();
updateCarousel();