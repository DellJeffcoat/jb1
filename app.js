
const audio = document.getElementById('audio');

const dogSound = document.getElementById('dog-sound');
dogSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/dog.wav';
  audio.play();
});

const santaSound = document.getElementById('santa-sound');
santaSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/santa.wav';
  audio.play();
});

const simpsonSound = document.getElementById('simpson-sound'); 
simpsonSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/simpson.mp3';
  audio.play();
});



