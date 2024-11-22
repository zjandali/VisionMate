// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configure recognition settings
recognition.continuous = true;
recognition.lang = 'en-US';

// Start recognition
recognition.start();

// Process speech results
recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const command = event.results[last][0].transcript.toLowerCase().trim();

  // Get all buttons
  const buttons = document.querySelectorAll('button');

  // Check if spoken text matches any button
  buttons.forEach(button => {
    if (command === button.textContent.toLowerCase().trim()) {
      button.click();
    }
  });
};

// Handle errors
recognition.onerror = function(event) {
  console.error('Speech recognition error:', event.error);
};