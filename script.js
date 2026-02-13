// Story scenes configuration
const scenes = {
    start: {
        emoji: "💌",
        title: "vibe check incoming 👀",
        text: "yo avi kadivi 💅 remember when you slid into my DMs asking for laptop advice back in October 2020? (which you totally ignored btw 💀) well now I got something way more important to ask you...",
        options: [
            { text: "omg what is it 👀", next: "scene1" }
        ]
    },
    scene1: {
        emoji: "🥺👉👈",
        title: "no cap fr fr...",
        text: "being 8000km apart hits different when you're literally living rent free in my head 24/7 💀 you're out here studying anatomy and saving lives while I'm debugging code, but somehow you still make my heart go brrrrr 🫀✨",
        options: [
            { text: "this is so wholesome fr 🥺", next: "scene2" },
            { text: "you're making me emotional stopppp 😭", next: "scene2" }
        ]
    },
    scene2: {
        emoji: "💅✨",
        title: "remember AJSS batch 52?",
        text: "different batches, never met IRL, but you still took that leap of faith in December 2020 and said \"it doesn't matter if you like me back — but I do\" and honestly? that was the most main character moment ever 🔥 now it's my turn...",
        options: [
            { text: "wait what are you saying 😳", next: "question" }
        ]
    },
    question: {
        emoji: "💀💕",
        title: "so like... no pressure but...",
        text: "will you be my valentine? 🫶 June 16-21 can't come soon enough fr and I promise I'll actually listen to your tech advice this time (maybe) 👀",
        options: [
            { text: "YES FR YES 💕✨", next: "yes", class: "btn-primary" },
            { text: "nah", next: "no", class: "btn-no", id: "no-button" }
        ]
    },
    yes: {
        emoji: "🎉",
        title: "YEHEY WE'RE SO BACK 🔥💅",
        text: "YOU UNDERSTOOD THE ASSIGNMENT 💯 this is literally the best day ever and you just made me the happiest person in both hemispheres 😭💕 cant wait to see you in June!! 🫶✨",
        celebration: true,
        countdown: true,
        options: []
    },
    no: {
        emoji: "💀",
        title: "bestie... are you sure about that?",
        text: "I think you misclicked fr 🤔 maybe your hand slipped? happens to the best of us ngl 👀",
        options: [
            { text: "you right, YES! 💕", next: "yes", class: "btn-primary" },
            { text: "I said what I said", next: "pretty_please", class: "btn-no", id: "no-button" }
        ]
    },
    pretty_please: {
        emoji: "🥺",
        title: "not the rejection arc 😭",
        text: "listen I've been waiting since that \"leap of faith\" moment and went through 5+ years of long distance 💀 you're really gonna do this to me rn? 🫠",
        options: [
            { text: "okay fine YES 🙄💕", next: "yes", class: "btn-primary" },
            { text: "still no lol", next: "last_chance", class: "btn-no", id: "no-button" }
        ]
    },
    last_chance: {
        emoji: "🤡",
        title: "me waiting for your reply at 3am:",
        text: "POV: it's been 3+ days and you still haven't responded (we both know this scenario) 💀 the 'No' button is lowkey tired of this energy. maybe give 'Yes' a chance? 👉👈",
        options: [
            { text: "OKAY YES you got me 😭💕", next: "yes", class: "btn-primary" },
            { text: "nope", next: "trick", class: "btn-no", id: "no-button" }
        ]
    },
    trick: {
        emoji: "😈",
        title: "ratio + L + no more 'No' button",
        text: "the 'No' button said ✌️ peace out ✌️ and went on vacation 🏖️ looks like you're stuck with me now bestie 💅✨",
        options: [
            { text: "you're unhinged... YES 💀💕", next: "yes", class: "btn-primary" }
        ]
    }
};

let currentScene = "start";
let noButtonClicks = 0;
let countdownInterval = null;

// Initialize the story
function init() {
    showScene(currentScene);
}

// Display a scene
function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    const container = document.getElementById("story-container");
    
    // Clear any existing countdown interval when switching scenes
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    // Clear previous content
    container.innerHTML = "";
    
    // Create scene elements
    const sceneDiv = document.createElement("div");
    sceneDiv.className = "scene";
    
    if (scene.celebration) {
        sceneDiv.className += " celebration";
    }
    
    // Add emoji
    const emoji = document.createElement("span");
    emoji.className = "emoji";
    emoji.textContent = scene.emoji;
    sceneDiv.appendChild(emoji);
    
    // Add title
    const title = document.createElement("h1");
    title.textContent = scene.title;
    sceneDiv.appendChild(title);
    
    // Add text
    const text = document.createElement("p");
    text.textContent = scene.text;
    sceneDiv.appendChild(text);
    
    // Add options
    if (scene.options.length > 0) {
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
        
        scene.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.className = option.class || "btn-secondary";
            if (option.id) {
                button.id = option.id;
            }
            
            button.addEventListener("click", () => {
                if (option.id === "no-button") {
                    handleNoButton(button, option.next);
                } else {
                    showScene(option.next);
                }
            });
            
            optionsDiv.appendChild(button);
        });
        
        sceneDiv.appendChild(optionsDiv);
    }
    
    container.appendChild(sceneDiv);
    
    // Add countdown for June visit if this is the yes scene
    if (scene.countdown) {
        const countdownDiv = document.createElement("div");
        countdownDiv.className = "countdown";
        countdownDiv.id = "visit-countdown";
        sceneDiv.appendChild(countdownDiv);
        
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // Trigger celebration if needed
    if (scene.celebration) {
        celebrate();
    }
}

// Handle the "No" button with fun interactions
function handleNoButton(button, nextScene) {
    noButtonClicks++;
    
    // Make the button shake
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 500);
    
    // Make the button move away on hover after a few clicks
    if (noButtonClicks > 1 && !button.dataset.listenerAdded) {
        button.dataset.listenerAdded = "true";
        button.style.position = "absolute";
        button.addEventListener("mouseenter", () => {
            // Account for button size and viewport boundaries
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
            const maxX = window.innerWidth - buttonWidth - 20;
            const maxY = window.innerHeight - buttonHeight - 20;
            const randomX = Math.max(20, Math.random() * maxX);
            const randomY = Math.max(20, Math.random() * maxY);
            button.style.left = randomX + "px";
            button.style.top = randomY + "px";
        });
    }
    
    // Progress to next scene
    setTimeout(() => {
        showScene(nextScene);
    }, 500);
}

// Celebration animation
function celebrate() {
    // Add confetti
    createConfetti();
    
    // Add floating hearts
    createFloatingHearts();
    
    // Play a simple "yehey" sound effect (using Web Audio API)
    playCheerSound();
}

// Create confetti effect
function createConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ["#f093fb", "#f5576c", "#4facfe", "#00f2fe", "#ffd700", "#ff69b4"];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            rotation: Math.random() * 360,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5
        });
    }
    
    // Animate confetti
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Iterate backwards to safely remove elements
        for (let i = confettiPieces.length - 1; i >= 0; i--) {
            const piece = confettiPieces[i];
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            ctx.restore();
            
            piece.y += piece.speed;
            piece.rotation += 5;
            
            if (piece.y > canvas.height) {
                confettiPieces.splice(i, 1);
            }
        }
        
        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.createElement("div");
    container.className = "floating-hearts";
    document.body.appendChild(container);
    
    const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝"];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDelay = Math.random() * 2 + "s";
            heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, i * 200);
    }
    
    setTimeout(() => {
        container.remove();
    }, 8000);
}

// Play a simple cheer sound using Web Audio API
function playCheerSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create a simple ascending tone sequence
        const notes = [523.25, 659.25, 783.99]; // C, E, G (major chord)
        
        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = "sine";
            
            const startTime = audioContext.currentTime + (index * 0.15);
            const duration = 0.3;
            
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        });
    } catch (error) {
        // Audio not supported or blocked, fail silently
        console.log("Audio not available");
    }
}

// Countdown to June visit
function updateCountdown() {
    const visitDate = new Date('2026-06-16T00:00:00+11:00'); // June 16, 2026 Melbourne time
    const now = new Date();
    const diff = visitDate - now;
    
    if (diff <= 0) {
        document.getElementById('visit-countdown').innerHTML = '<p class="countdown-text">🎉 the wait is over fr!! 🎉</p>';
        // Clear the interval since countdown is done
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('visit-countdown').innerHTML = `
        <p class="countdown-text">time until june visit fr fr ✈️</p>
        <div class="countdown-numbers">
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">hrs</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">min</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">sec</span>
            </div>
        </div>
        <p class="countdown-subtext">can't wait to see you avi kadivi 🥺💕</p>
    `;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", init);
