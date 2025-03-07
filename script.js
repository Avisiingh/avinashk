// DOM Elements
const sections = document.querySelectorAll('.section');
const nextBtn = document.querySelector('.next-section-btn');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const customCursor = document.querySelector('.custom-cursor');
const loadingScreen = document.querySelector('.loading-screen');
const enterBtn = document.querySelector('.enter-btn');

// State
let currentSection = 0;
let isMusicPlaying = false;
let isAnimating = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);

    // Initialize sections
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        if (index === 0) {
            section.classList.add('active');
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });

    // Initialize custom cursor
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });
});

// Navigation
nextBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    // Fade out current section
    sections[currentSection].style.opacity = '0';
    sections[currentSection].style.transform = 'translateY(-50px)';

    // Update current section
    currentSection = (currentSection + 1) % sections.length;

    // Fade in next section
    setTimeout(() => {
        sections[currentSection].style.opacity = '1';
        sections[currentSection].style.transform = 'translateY(0)';
        sections[currentSection].classList.add('active');
        isAnimating = false;
    }, 1000);
});

// Music Toggle
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🎵';
    } else {
        bgMusic.play();
        musicToggle.textContent = '⏸️';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Enter Button
enterBtn.addEventListener('click', () => {
    sections[0].style.opacity = '0';
    sections[0].style.transform = 'translateY(-50px)';
    setTimeout(() => {
        sections[0].style.display = 'none';
        sections[1].style.display = 'block';
        sections[1].style.opacity = '1';
        sections[1].style.transform = 'translateY(0)';
        sections[1].classList.add('active');
    }, 1000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const speed = 0.5;
        const yPos = -(window.pageYOffset * speed);
        section.style.backgroundPositionY = yPos + 'px';
    });
});

// Intersection Observer for Fade In
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Handle Yes Button Click
const yesBtn = document.querySelector('.yes-btn');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        yesBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 200);
        // Add your proposal acceptance logic here
        alert('Thank you for making me the happiest person alive! ❤️');
    });
}

// Desire cards reveal
document.querySelectorAll('.desire-card').forEach(card => {
    card.addEventListener('click', () => {
        const hiddenText = card.querySelector('.hidden');
        hiddenText.style.opacity = '1';
        hiddenText.style.transform = 'translateZ(20px)';
    });
});

// World map locations
const locations = {
    switzerland: {
        name: 'Switzerland',
        story: 'In the snowy peaks of Switzerland, we\'ll build snowmen and warm each other by the fire. The breathtaking views of the Alps will be the perfect backdrop for our love story. We\'ll ski together, drink hot chocolate in cozy cafes, and create memories that will last a lifetime.'
    },
    newyork: {
        name: 'New York',
        story: 'Walking through Central Park, holding hands as the city lights twinkle around us. We\'ll visit the Empire State Building at sunset, take a romantic carriage ride, and explore the city that never sleeps. Every street corner will be a new adventure with you.'
    },
    miami: {
        name: 'Miami',
        story: 'Dancing under the stars on Miami Beach, the waves whispering our love story. We\'ll watch the sunrise over the ocean, explore the vibrant art scene, and create our own paradise in this tropical city. The warm breeze and your smile will make every moment magical.'
    },
    spain: {
        name: 'Spain',
        story: 'Watching Real Madrid play at Santiago Bernabéu, sharing your passion for football. We\'ll explore the historic streets of Madrid, taste authentic paella, and dance to flamenco music. The passion of Spain will match the passion in our hearts.'
    }
};

document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
        const locationData = locations[location.dataset.location];
        const storyContainer = document.querySelector('.destination-story');
        const locationName = storyContainer.querySelector('.location-name');
        const storyContent = storyContainer.querySelector('.story-content');

        locationName.textContent = locationData.name;
        storyContent.textContent = locationData.story;
        storyContainer.classList.remove('hidden');
        storyContainer.style.transform = 'translateZ(30px)';
    });
});

// Future scenes reveal
document.querySelectorAll('.scene').forEach(scene => {
    scene.addEventListener('click', () => {
        const hiddenText = scene.querySelector('.hidden');
        hiddenText.style.opacity = '1';
        hiddenText.style.transform = 'translateZ(20px)';
    });
});

// Timeline items reveal on scroll
const observerOptions = {
    threshold: 0.2
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transform = 'translateZ(20px)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
    item.style.transform = 'translateZ(10px)';
});

// Final proposal button
document.querySelector('.yes-btn').addEventListener('click', () => {
    // Create fireworks effect
    createFireworks();
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h2>I Love You, Insha!</h2>
        <p>You've made me the happiest man alive!</p>
        <p>Every moment with you is a blessing, and I can't wait to start our forever together.</p>
        <p>❤️ Forever Yours ❤️</p>
    `;
    document.querySelector('.proposal-content').appendChild(successMessage);
});

// Fireworks effect
function createFireworks() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1000);
        }, i * 100);
    }
} 