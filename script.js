
 // ===== FLOATING EFFECTS =====
const fx = document.getElementById('fx');

const cols = [
    '#ff3d8b',
    '#ffe14d',
    '#17d4c4',
    '#7b3fe4',
    '#fff',
    '#ff9f1c'
];

// ===== CONFETTI =====
function confetti(n) {
    if (!fx) return;

    for (let i = 0; i < n; i++) {
        const e = document.createElement('i');
        e.className = 'p';

        const s = 6 + Math.random() * 10;

        e.style.cssText = `
            left: ${Math.random() * 100}vw;
            width: ${s}px;
            height: ${s * 1.6}px;
            background: ${cols[i % cols.length]};
            animation-duration: ${3 + Math.random() * 4}s;
            animation-delay: ${-Math.random() * 6}s;
            border-radius: 2px;
        `;

        fx.appendChild(e);
    }
}

// ===== FLOATING BALLOONS AND HEARTS =====
function balloons() {
    if (!fx) return;

    const em = ['🎈', '💖', '✨', '🎈', '🌸'];

    for (let i = 0; i < 14; i++) {
        const e = document.createElement('span');
        e.className = 'b';
        e.textContent = em[i % em.length];

        e.style.cssText = `
            left: ${Math.random() * 95}vw;
            font-size: ${28 + Math.random() * 30}px;
            animation-duration: ${7 + Math.random() * 7}s;
            animation-delay: ${-Math.random() * 10}s;
        `;

        fx.appendChild(e);
    }
}

// ===== START EFFECTS =====
confetti(60);
balloons();

// ===== PAGE NAVIGATION (BOTH PAGES) =====
function route() {

    // Works with index.html OR second.html
    const firstPage =
        document.getElementById('home') ||
        document.getElementById('moments');

    const surprise = document.getElementById('surprise');

    if (!firstPage || !surprise) return;

    const showSurprise = location.hash === '#surprise';

    firstPage.classList.toggle('on', !showSurprise);
    surprise.classList.toggle('on', showSurprise);

    window.scrollTo(0, 0);

    if (showSurprise) {
        confetti(40);
    }
}

window.addEventListener('hashchange', route);
route();

// ===== FIRST PAGE MUSIC =====
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

if (musicButton && backgroundMusic) {

    musicButton.addEventListener('click', async () => {

        if (backgroundMusic.paused) {
            try {
                await backgroundMusic.play();

                musicButton.innerHTML = `
                    💗 Music Playing 💗
                    <span>🎧 Enjoy listening</span>
                `;

            } catch (error) {
                console.log('Music could not play:', error);
            }

        } else {
            backgroundMusic.pause();

            musicButton.innerHTML = `
                💗 Romantic Music for You 💗
                <span>🎧 Listen & Read</span>
            `;
        }
    });
}

// ===== SECOND PAGE MUSIC =====
const birthdayMusic = document.getElementById('birthdayMusic');
const musicBtn = document.getElementById('musicBtn');

if (birthdayMusic && musicBtn) {

    musicBtn.addEventListener('click', async () => {

        if (birthdayMusic.paused) {
            try {
                await birthdayMusic.play();
                musicBtn.textContent = '⏸ Pause Music';

            } catch (error) {
                console.log('Music could not play:', error);
            }

        } else {
            birthdayMusic.pause();
            musicBtn.textContent = '🎵 Play Music';
        }
    });
}

// ===== REPLAY BUTTON (BOTH PAGES) =====
const backButton = document.getElementById('back');

if (backButton) {

    backButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Return to the first section on the current page
        location.hash = '';

        const firstPage =
            document.getElementById('home') ||
            document.getElementById('moments');

        const surprise = document.getElementById('surprise');

        if (firstPage && surprise) {
            firstPage.classList.add('on');
            surprise.classList.remove('on');
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
