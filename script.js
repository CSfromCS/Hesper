// Story scenes configuration
const scenes = {
    start: {
        emoji: "💌",
        title: "A Special Message",
        text: "Hey there! I have something important to ask you... right between your anatomy flashcards and my bug fixes.",
        options: [
            { text: "I'm curious, go on! 🤔", next: "scene1" }
        ]
    },
    scene1: {
        emoji: "🌹",
        title: "You Know...",
        text: "Every time I see you, my heart does a little happy dance — even when you're buried in med notes and I'm buried in code. You make ordinary days feel extraordinary.",
        options: [
            { text: "That's so sweet! 😊", next: "scene2" },
            { text: "Tell me more! 💕", next: "scene2" }
        ]
    },
    scene2: {
        emoji: "✨",
        title: "The Thing Is...",
        text: "I've been thinking about this for a while, between your hospital rounds and my sprint reviews, and Valentine's Day seems like the perfect moment to finally ask...",
        options: [
            { text: "Ask what? 😳", next: "question" }
        ]
    },
    question: {
        emoji: "💝",
        title: "Will You Be My Valentine?",
        text: "So here's my question: Would you make this Valentine's Day special and be my Valentine? I'll fix the bugs if you keep my heart racing.",
        options: [
            { text: "YES! 💕", next: "yes", class: "btn-primary" },
            { text: "No", next: "no", class: "btn-no", id: "no-button" }
        ]
    },
    yes: {
        emoji: "🎉",
        title: "YEHEY! 🎊",
        text: "This is the best news ever! You just made me the happiest person! Let's make this Valentine's Day unforgettable! 💖",
        celebration: true,
        options: []
    },
    no: {
        emoji: "🥺",
        title: "Are You Sure?",
        text: "Maybe you clicked the wrong button? Give it another thought? Pretty please? 🥺",
        options: [
            { text: "Okay, YES! 💕", next: "yes", class: "btn-primary" },
            { text: "Still no", next: "pretty_please", class: "btn-no", id: "no-button" }
        ]
    },
    pretty_please: {
        emoji: "🙏",
        title: "Pretty Please?",
        text: "I promise to make you smile every day! Just one chance? 🌟",
        options: [
            { text: "Alright, YES! 💕", next: "yes", class: "btn-primary" },
            { text: "No thanks", next: "last_chance", class: "btn-no", id: "no-button" }
        ]
    },
    last_chance: {
        emoji: "💔",
        title: "One More Thing...",
        text: "The 'No' button is getting tired. Maybe it wants a break? The 'Yes' button is much more comfortable! 😄",
        options: [
            { text: "Fine, YES! 💕", next: "yes", class: "btn-primary" },
            { text: "Nope", next: "trick", class: "btn-no", id: "no-button" }
        ]
    },
    trick: {
        emoji: "😅",
        title: "Oops!",
        text: "The 'No' button is on vacation now! Looks like 'Yes' is your only option! 😉",
        options: [
            { text: "YES! You got me! 💕", next: "yes", class: "btn-primary" }
        ]
    }
};

let currentScene = "start";
let noButtonClicks = 0;

// Initialize the story
function init() {
    showScene(currentScene);
}

// Display a scene
function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    const container = document.getElementById("story-container");
    
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

// Initialize on page load
document.addEventListener("DOMContentLoaded", init);
