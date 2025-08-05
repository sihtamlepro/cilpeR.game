const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajuster la taille du canvas à la fenêtre
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Caractères à utiliser (inspirés de Matrix)
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialiser les positions des gouttes
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    // Fond noir semi-transparent pour effet de traînée
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Style du texte (vert fluo)
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    // Parcourir chaque colonne
    for (let i = 0; i < drops.length; i++) {
        // Caractère aléatoire
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Position du texte
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Réinitialiser la goutte lorsqu'elle atteint le bas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrémenter la position Y
        drops[i]++;
    }
}

// Exécuter l'animation toutes les 30ms
setInterval(draw, 30);

// Ajuster le canvas lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
