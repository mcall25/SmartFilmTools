// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Your Google Cloud Platform project ID
const projectId = 'foundersvoice-speech-alpha';

// Instantiates a client
const speechClient = Speech({
  projectId: projectId
});


const fileName = './sync-request.json';


// The audio file's encoding and sample rate
const options = {
  encoding: 'LINEAR16',
  sampleRate: 16000
};


speechClient.recognize(fileName, options, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Transcription: ${result}`);
});
// [END speech_quickstart]
