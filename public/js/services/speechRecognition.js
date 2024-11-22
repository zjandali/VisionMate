class SpeechRecognitionService {
    constructor() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            throw new Error('Speech recognition not supported in this browser');
        }

        this.recognition = new SpeechRecognition();
        this.setupRecognition();
        this.isListening = false;
        this.callback = null;
    }

    setupRecognition() {
        this.recognition.continuous = true;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event) => {
            const last = event.results.length - 1;
            const text = event.results[last][0].transcript.trim();
            if (this.callback) {
                this.callback(text);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.announceToScreenReader(`Speech recognition error: ${event.error}`);
            this.stop();
        };

        this.recognition.onend = () => {
            if (this.isListening) {
                this.recognition.start();
            }
        };
    }

    start(callback) {
        if (this.isListening) return;
        
        this.callback = callback;
        this.isListening = true;
        this.recognition.start();
        this.announceToScreenReader('Voice recognition started');
    }

    stop() {
        if (!this.isListening) return;
        
        this.isListening = false;
        this.recognition.stop();
        this.announceToScreenReader('Voice recognition stopped');
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'alert');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }
}

export const speechRecognition = new SpeechRecognitionService(); 