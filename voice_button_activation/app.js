// Check for browser support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of SpeechRecognition
const recognition = new SpeechRecognition();

// Configure recognition settings
recognition.lang = 'en-US';
recognition.interimResults = false; // Set to true if you want interim results
recognition.maxAlternatives = 1;

// Start recognition
recognition.start();

// Handle results
recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript.toLowerCase();
    console.log('Recognized text:', spokenText);

    handleSpokenText(spokenText);
};

// Restart recognition after each result
recognition.onend = () => recognition.start();

function handleSpokenText(text) {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        if (button.innerText.toLowerCase() === text) {
            button.click();
        }
    });
}

document.getElementById('helloButton').addEventListener('click', () => {
    alert('Hello button clicked!');
});

document.getElementById('worldButton').addEventListener('click', () => {
    alert('World button clicked!');
});

/*
The provided JavaScript code leverages the Web Speech API to implement speech recognition functionality in a web application. It begins by checking for browser support for the SpeechRecognition interface, falling back to webkitSpeechRecognition for compatibility with older versions of Chrome. A new instance of SpeechRecognition is then created and configured with specific settings: the language is set to English (US), interim results are disabled, and the maximum number of alternatives for recognized speech is set to one.

The speech recognition process is initiated with the recognition.start() method. When speech is detected and recognized, the onresult event handler is triggered. This handler extracts the recognized text from the event object, converts it to lowercase, and logs it to the console. The recognized text is then passed to the handleSpokenText function.

The handleSpokenText function iterates over all button elements on the page. For each button, it compares the button's inner text (converted to lowercase) with the recognized text. If a match is found, the button is programmatically clicked. This allows users to interact with the web application using voice commands that correspond to button labels.

To ensure continuous speech recognition, the onend event handler restarts the recognition process whenever it ends. Additionally, two buttons with IDs helloButton and worldButton are set up with click event listeners that display alert messages when clicked. This setup demonstrates how voice commands can trigger specific actions within the web application.
*/