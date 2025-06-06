const sentences = [
  "Hi, I'm Iqbal Hossain",
  "AI & ML Engineer | LLM | Python",
  "Intern @ Time Research and Innovation Ltd, UK",
  "Junior ML Engineer @ NextStep Writer’s Ltd, BD",
  "Built Chatbots, MRI Analyzers, and Recommenders",
  "Skilled in TensorFlow, PyTorch,LLM, FastAPI, AWS",
  "Passionate about AI Research & Innovation"
];

let i = 0;
let j = 0;
let currentSentence = '';
let isDeleting = false;
const speed = 100;
const textElement = document.querySelector(".typewriter-text");

function loop() {
  const fullSentence = sentences[i];

  if (!isDeleting) {
    currentSentence = fullSentence.substring(0, j + 1);
    j++;
  } else {
    currentSentence = fullSentence.substring(0, j - 1);
    j--;
  }

  textElement.textContent = currentSentence;

  if (!isDeleting && j === fullSentence.length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % sentences.length;
  }

  setTimeout(loop, isDeleting ? speed / 2 : speed);
}

loop();
