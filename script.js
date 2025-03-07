// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    const sections = document.querySelectorAll('.section');
    const loadingScreen = document.querySelector('.loading-screen');
    const customCursor = document.querySelector('.custom-cursor');
    const musicPlayer = document.querySelector('.music-player');
    const backgroundMusic = document.getElementById('background-music');
    let currentSection = 0;
    let isMusicPlaying = false;

    // Remove loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Custom cursor movement
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // Handle section transitions
    function showSection(index) {
        sections.forEach(section => section.classList.remove('active'));
        sections[index].classList.add('active');
        currentSection = index;
    }

    // Scroll handling
    let isScrolling = false;
    document.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 1000);

        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            showSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            showSection(currentSection - 1);
        }
    });

    // Enter button click handler
    document.querySelector('.enter-btn').addEventListener('click', () => {
        showSection(1);
    });

    // Music player toggle
    musicPlayer.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicPlayer.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            backgroundMusic.play();
            musicPlayer.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Desire cards reveal
    document.querySelectorAll('.desire-card').forEach(card => {
        card.addEventListener('click', () => {
            const hiddenText = card.querySelector('.hidden');
            hiddenText.style.opacity = '1';
            hiddenText.style.transform = 'translateY(0)';
        });
    });

    // World map locations
    const locations = {
        switzerland: {
            name: 'Switzerland',
            story: 'In the snowy peaks of Switzerland, we\'ll build snowmen and warm each other by the fire...'
        },
        newyork: {
            name: 'New York',
            story: 'Walking through Central Park, holding hands as the city lights twinkle around us...'
        },
        miami: {
            name: 'Miami',
            story: 'Dancing under the stars on Miami Beach, the waves whispering our love story...'
        },
        spain: {
            name: 'Spain',
            story: 'Watching Real Madrid play at Santiago Bernabéu, sharing your passion for football...'
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
        });
    });

    // Future scenes reveal
    document.querySelectorAll('.scene').forEach(scene => {
        scene.addEventListener('click', () => {
            const hiddenText = scene.querySelector('.hidden');
            hiddenText.style.opacity = '1';
            hiddenText.style.transform = 'translateY(0)';
        });
    });

    // Timeline items reveal on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
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

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize first section
    showSection(0);
}); 