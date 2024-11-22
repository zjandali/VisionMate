const { spawn } = require('child_process');
const path = require('path');

async function transcribeAudio(audioPath) {
    return new Promise((resolve, reject) => {
        const posixPath = path.posix.join(...audioPath.split(path.sep));

        const whisperProcess = spawn('whisper', [posixPath]);

        let transcription = '';
        whisperProcess.stdout.on('data', (data) => {
            transcription += data.toString();
        });

        whisperProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        whisperProcess.on('close', (code) => {
            if (code === 0) {
                const filteredTranscription = filterTranscription(transcription);
                resolve(filteredTranscription);
            } else {
                reject(new Error(`Whisper process exited with code ${code}`));
            }
        });
    });
}

function filterTranscription(transcription) {
    // Split the transcription into lines
    const lines = transcription.split('\n');
    
    // Find the last meaningful line
    const meaningfulLine = lines.filter(line => line.includes(']')).pop();

    // Extract the part after the last ']'
    const lastBracketIndex = meaningfulLine.lastIndexOf(']');
    return meaningfulLine.substring(lastBracketIndex + 1).trim();
}

module.exports = { transcribeAudio };
