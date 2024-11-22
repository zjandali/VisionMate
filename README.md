# VisionMates
visionmate/
└── public/
    ├── liverecommendation2.html
    ├── css/
    │   └── main.css
    ├── images/
    │   └── leftarrow.png
    └── js/
        ├── services/
        │   └── speechRecognition.js
        └── liveRecommendation.js
        
##Download Whisper from OpenAi
You can download and install (or update to) the latest release of Whisper with the following command:

    pip install -U openai-whisper

Alternatively, the following command will pull and install the latest commit from this repository, along with its Python dependencies:

    pip install git+https://github.com/openai/whisper.git 

To update the package to the latest version of this repository, please run:

    pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git

It also requires the command-line tool [`ffmpeg`](https://ffmpeg.org/) to be installed on your system, which is available from most package managers:

```bash
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on Arch Linux
sudo pacman -S ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg
```

You may need [`rust`](http://rust-lang.org) installed as well, in case [tiktoken](https://github.com/openai/tiktoken) does not provide a pre-built wheel for your platform. If you see installation errors during the `pip install` command above, please follow the [Getting started page](https://www.rust-lang.org/learn/get-started) to install Rust development environment. Additionally, you may need to configure the `PATH` environment variable, e.g. `export PATH="$HOME/.cargo/bin:$PATH"`. If the installation fails with `No module named 'setuptools_rust'`, you need to install `setuptools_rust`, e.g. by running:

```bash
pip install setuptools-rust
```

##Set up the Server 
Now you need to download node.js. Download it from [Node.js](nodejs.org).
Run:
'''
npm init -y
npm install express multer
node server.js
go to: http://localhost:3000/

'''
## To set up remote server
Download ngrok from [ngrok](https://ngrok.com/download)
Now run: 
'''
choco install ngrok
ngrok config add-authtoken TOKEN
ngrok http http://localhost:3000


'''
