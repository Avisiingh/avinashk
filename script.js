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
        
        // Add 3D effect based on mouse position
        const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
        
        sections.forEach(section => {
            section.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    });

    // Handle section transitions
    function showSection(index) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.pointerEvents = 'none';
        });
        
        sections[index].style.opacity = '1';
        sections[index].style.transform = 'translateY(0)';
        sections[index].style.pointerEvents = 'auto';
        currentSection = index;
    }

    // Add navigation buttons to each section
    sections.forEach((section, index) => {
        const nextButton = document.createElement('button');
        nextButton.className = 'next-section-btn';
        nextButton.innerHTML = 'Next Section →';
        nextButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background: var(--secondary-color);
            color: var(--background-color);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.2rem;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        nextButton.addEventListener('mouseover', () => {
            nextButton.style.transform = 'scale(1.1)';
        });
        nextButton.addEventListener('mouseout', () => {
            nextButton.style.transform = 'scale(1)';
        });
        nextButton.addEventListener('click', () => {
            if (index < sections.length - 1) {
                showSection(index + 1);
            }
        });
        section.appendChild(nextButton);
    });

    // Make all sections visible at once
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateZ(0)';
        section.style.pointerEvents = 'auto';
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transform = 'translateZ(20px)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
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