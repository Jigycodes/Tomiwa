// Get DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
const confettiSound = document.getElementById('confettiSound');
const gifContainer = document.getElementById('gifContainer');
const currentGif = document.getElementById('currentGif');
const screenshotReminder = document.getElementById('screenshotReminder');

// Array of humorous GIFs for the "No" reaction
const sadGifs = [
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNrbTc2eTNtemM5ZXhkdjhsYWJybzF6NHd4bmJicXJzMHZ6cWszeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0yXjVvEM2VWUX2CWpE/giphy.gif',
  'https://media.giphy.com/media/ZBK7b4vHYyb0n70zJq/giphy.gif?cid=ecf05e4701p027hdxu8te9u0tcp9d2dobsvwmn39mmdsukrw&ep=v1_gifs_related&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/BJEGePnDfDemfw7SQV/giphy.gif?cid=ecf05e4701p027hdxu8te9u0tcp9d2dobsvwmn39mmdsukrw&ep=v1_gifs_related&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/11JliVf7HERhJu/giphy.gif?cid=ecf05e4701p027hdxu8te9u0tcp9d2dobsvwmn39mmdsukrw&ep=v1_gifs_related&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/SqfHFPbzxw98xwFOiE/giphy.gif?cid=ecf05e4701p027hdxu8te9u0tcp9d2dobsvwmn39mmdsukrw&ep=v1_gifs_related&rid=giphy.gif&ct=g'
];

// Customized messages to update the YES button text
let yesScale = 1;
let noScale = 1;
const messages = [
  "Babymi naw",
  "Biko",
  "Ejor",
  "Oh wow, ehhe?",
  "You know you want me"
];
let messageIndex = 0;

// "No" button click handler
noBtn.addEventListener('click', () => {
  // Display a random humorous GIF
  const randomGif = sadGifs[Math.floor(Math.random() * sadGifs.length)];
  currentGif.src = randomGif;
  gifContainer.style.display = 'block';

  // Increase YES button size
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
  
  // Decrease NO button size
  noScale *= 0.9;
  noBtn.style.transform = `scale(${noScale})`;

  // Update the YES button text with playful messages
  if (messageIndex < messages.length) {
    yesBtn.textContent = messages[messageIndex];
    messageIndex++;
  } else {
    yesBtn.textContent = "OK, JUST CLICK YES ALREADY!";
  }
});

// "Yes" button click handler
yesBtn.addEventListener('click', () => {
  // Trigger confetti effect for 3 seconds
  const duration = 3000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8']
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8']
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
  // Play confetti sound
  confettiSound.play().catch(error => console.error("Audio playback failed:", error));
  
  // Update and show success message and celebratory GIF
  successMessage.style.display = 'block';
  successMessage.textContent = "Good girl 💖";
  gifContainer.style.display = 'block';
  currentGif.src =
    'https://media.giphy.com/media/L0qTl8hl84EDly62J1/giphy.gif?cid=790b76112di70bff52nypfys4290ee8x6a98dzeh4tvet8s2&ep=v1_gifs_search&rid=giphy.gif&ct=g';
  screenshotReminder.style.display = 'block';
  
  // Optionally remove the buttons container after a successful response
  const buttonsContainer = document.querySelector('.buttons');
  if (buttonsContainer) {
    buttonsContainer.remove();
  }
});
