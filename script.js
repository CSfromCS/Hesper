// Story scenes configuration (coded with love, stackoverflow, and way too much coffee :>)
const scenes = {
    start: {
        emoji: "💌",
        title: "vibe check incoming 👀",
        text: "yo avi kadivi 💅 remember when you slid into my DMs asking for laptop advice back in October 2020? (which you totally ignored btw 💀) well i got something way more important to ask you... like ACTUALLY important this time :>",
        options: [
            { text: "omg what is it 👀", next: "scene1" },
            { text: "is this about laptops again? :>", next: "scene1" }
        ]
    },
    scene1: {
        emoji: "🥺👉👈",
        title: "no cap fr fr...",
        text: "being 8000km apart hits different when you're literally living rent free in my head 24/7 💀 you're out here studying anatomy and saving lives while i'm debugging code at 3am... but somehow you still make my heart go brrrrr 🫀✨ (and yes that's the technical term :>)",
        options: [
            { text: "this is so wholesome fr 🥺", next: "scene2" },
            { text: "you're making me emotional stopppp 😭", next: "scene2" },
            { text: "brrrrr? really? 💀", next: "scene1b" }
        ]
    },
    scene1b: {
        emoji: "😤",
        title: "okay okay hear me out",
        text: "\"brrrrr\" is a perfectly valid way to describe feelings okay?? medical school didn't teach you about heart brrrs? 💀 it's when your heart goes all printer mode whenever you see someone special :> total scientific phenomenon trust me bro",
        options: [
            { text: "that's the cutest thing ever 🥺", next: "scene2" },
            { text: "you're so silly i love it 💕", next: "scene2" }
        ]
    },
    scene2: {
        emoji: "💅✨",
        title: "remember AJSS batch 52?",
        text: "different batches, never met IRL, but you still took that leap of faith in December 2020 and said \"it doesn't matter if you like me back — but I do\" :> honestly? that was the most main character moment ever 🔥 you literally wrote the blueprint for romantic confessions ngl... now it's my turn to be brave (plz be patient i'm nervous 💀)",
        options: [
            { text: "wait what are you saying 😳", next: "question" },
            { text: "you got this bestie! 💪", next: "question" }
        ]
    },
    question: {
        emoji: "💀💕",
        title: "so like... no pressure but...",
        text: "will you be my valentine? 🫶 June 16-21 can't come soon enough fr fr and i promise i'll actually listen to your tech advice this time (maybe) (okay probably not) (but i'll PRETEND to listen very convincingly :>) also fun fact: i've been planning this for weeks and i'm sweating rn 💀",
        options: [
            { text: "YES FR YES 💕✨", next: "yes", class: "btn-primary" },
            { text: "aww you're nervous? cute 🥺", next: "question2", class: "btn-secondary" },
            { text: "nah", next: "no", class: "btn-no", id: "no-button" }
        ]
    },
    question2: {
        emoji: "😳",
        title: "okay you caught me",
        text: "YES i'm nervous okay?? 💀 i've rewritten this like 47 times and i STILL don't know if it's good enough :> you make me all soft and mushy and i have a REPUTATION to maintain (jk i have no reputation i'm a nerd who codes on friday nights lmaooo) so... be my valentine? 🥺👉👈",
        options: [
            { text: "YES OF COURSE 💕✨", next: "yes", class: "btn-primary" },
            { text: "nah", next: "no", class: "btn-no", id: "no-button" }
        ]
    },
    yes: {
        emoji: "🎉",
        title: "YEHEY WE'RE SO BACK 🔥💅",
        text: "YOU UNDERSTOOD THE ASSIGNMENT 💯 this is literally the best day ever and you just made me the happiest person in both hemispheres 😭💕 cant wait to see you in June!! (fun fact: my heart is doing the brrr thing SO HARD right now :>) i love you avi kadivi 🫶✨",
        celebration: true,
        countdown: true,
        options: []
    },
    no: {
        emoji: "💀",
        title: "bestie... are you sure about that?",
        text: "i think you misclicked fr 🤔 maybe your hand slipped? happens to the best of us ngl 👀 OR maybe you're just testing my dedication?? well JOKE'S ON YOU i have 5+ years of long distance experience i'm basically a professional at this point :>",
        options: [
            { text: "you right, YES! 💕", next: "yes", class: "btn-primary" },
            { text: "i said what i said", next: "pretty_please", class: "btn-no", id: "no-button" }
        ]
    },
    pretty_please: {
        emoji: "🥺",
        title: "not the rejection arc 😭",
        text: "listen i've been waiting since that \"leap of faith\" moment and went through 5+ years of long distance 💀 i've survived timezone differences, voice call lag, and you falling asleep mid-conversation (it's okay you were tired from med school :>) you're really gonna do this to me rn? after i made this whole WEBSITE for you?? 🫠",
        options: [
            { text: "okay fine YES 🙄💕", next: "yes", class: "btn-primary" },
            { text: "the website IS pretty impressive...", next: "pretty_please2", class: "btn-secondary" },
            { text: "still no lol", next: "last_chance", class: "btn-no", id: "no-button" }
        ]
    },
    pretty_please2: {
        emoji: "😌",
        title: "RIGHT?? i worked so hard on this",
        text: "i learned javascript JUST to make this for you 💀 (okay that's a lie i already knew javascript but STILL) i added confetti! and hearts! and a COUNTDOWN TIMER!! do you know how long it took me to get the countdown working?? (2 hours and 3 stack overflow tabs :>) plz say yes i'm running out of content here 🥺",
        options: [
            { text: "omg YES you sweet nerd 💕", next: "yes", class: "btn-primary" },
            { text: "still thinking...", next: "last_chance", class: "btn-no", id: "no-button" }
        ]
    },
    last_chance: {
        emoji: "🤡",
        title: "me waiting for your reply at 3am:",
        text: "POV: it's been 3+ days and you still haven't responded (we both know this scenario) 💀 me: \"maybe they're busy\" also me: *checks phone every 5 minutes* :> the 'No' button is lowkey tired of this energy. maybe give 'Yes' a chance? pretty pretty please with medical school coffee on top? 👉👈",
        options: [
            { text: "OKAY YES you got me 😭💕", next: "yes", class: "btn-primary" },
            { text: "medical school coffee? 🤔", next: "coffee_tangent", class: "btn-secondary" },
            { text: "nope", next: "trick", class: "btn-no", id: "no-button" }
        ]
    },
    coffee_tangent: {
        emoji: "☕",
        title: "okay TANGENT TIME",
        text: "medical school coffee is basically jet fuel right?? like i'm convinced it's 90% caffeine and 10% pure stress 💀 but you STILL look cute when you're cramming for exams at ungodly hours :> okay okay back to the point: BE MY VALENTINE plzzzzz i promise to bring you better coffee in June 🥺",
        options: [
            { text: "you're such a dork... YES 💕", next: "yes", class: "btn-primary" },
            { text: "still no (sorry)", next: "trick", class: "btn-no", id: "no-button" }
        ]
    },
    trick: {
        emoji: "😈",
        title: "ratio + L + no more 'No' button",
        text: "the 'No' button said ✌️ peace out ✌️ and went on vacation 🏖️ apparently it needed a break from all this emotional labor 💀 looks like you're stuck with me now bestie :> (don't worry i'm a catch i promise) (i can cook minute rice in 58 seconds) (that's impressive right??)",
        options: [
            { text: "you're unhinged... YES 💀💕", next: "yes", class: "btn-primary" },
            { text: "minute rice in 58 seconds?? okay YES 🤣", next: "yes", class: "btn-primary" }
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
        document.getElementById('visit-countdown').innerHTML = '<p class="countdown-text">🎉 the wait is over fr!! :> 🎉</p>';
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
        <p class="countdown-text">time until june visit fr fr ✈️ :></p>
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
        <p class="countdown-subtext">can't wait to see you avi kadivi 🥺💕 (i'm so excited i can't even function properly :>)</p>
    `;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", init);
