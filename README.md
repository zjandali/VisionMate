
# 🎯 VisionMate: AI-Powered Navigation Assistant

VisionMate is an innovative web application designed to help individuals with visual impairments explore and navigate new places with confidence. Through natural conversation and real-time location awareness, VisionMate provides detailed descriptions of surroundings and helps users discover new destinations.

## 🎥 Demo Video
<video width="600" height="400" controls>
  <source src="VisionMate Final Video .mp4" type="video/mp4">
</video>


## ✨ Key Features

- **Natural Conversation Interface**: Engage in natural dialogue to discover new places and get recommendations
- **Live Location Awareness**: Receive real-time descriptions of notable places as you walk by
- **Voice-First Design**: Fully accessible through voice commands and screen readers
- **Smart Recommendations**: Context-aware suggestions based on user preferences and location
- **Voice Memo System**: Record and share location-specific hazards or points of interest

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Speech Recognition**: Web Speech API
- **Location Services**: Geolocation API
- **APIs**: 
  - Yelp Fusion API for business data
  - OpenAI Whisper for speech-to-text
  - Custom LLM for natural language understanding

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/visionmate.git
cd visionmate
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Whisper (Required for voice processing)**
```bash
pip install -U openai-whisper
```

4. **Install ffmpeg**
For Ubuntu/Debian:
```bash
sudo apt update && sudo apt install ffmpeg
```
For other platforms, see the [ffmpeg installation guide](https://ffmpeg.org/download.html).

5. **Set up environment variables**
Create a `.env` file in the root directory:
```bash
YELP_API_KEY=your_yelp_api_key
OPENAI_API_KEY=your_openai_api_key
```

6. **Start the server**
```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## 📱 Remote Access Setup

To make VisionMate accessible from other devices:

1. Install ngrok:
```bash
npm install -g ngrok
```

2. Create a tunnel:
```bash
ngrok http 3000
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 🎯 Future Roadmap

- [ ] Offline mode support
- [ ] Multi-language support
- [ ] Community-driven hazard reporting system
- [ ] Integration with public transit APIs
- [ ] Customizable voice profiles


## 🙏 Acknowledgments

- OpenAI for Whisper speech recognition
- Yelp for their comprehensive business data API
- The accessibility community for valuable feedback and guidance

## 📞 Contact

For questions or support, please [open an issue](https://github.com/yourusername/visionmate/issues) or contact us at support@visionmate.com.

---

<p align="center">Made with ❤️ for accessibility</p>
```



