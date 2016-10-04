// 'use strict';
//
// var GOOGLE_APPLICATION_CREDENTIALS=/public/api/key.json
// // [START speech_quickstart]
// // Imports the Google Cloud client library
// const Speech = require('@google-cloud/speech');
//
// // Your Google Cloud Platform project ID
// const projectId = 'fouders-21';
//
// // Instantiates a client
// const speechClient = Speech({
//   projectId: projectId
// });
//
// // The name of the audio file to transcribe
// const fileName = './resources/audio.raw';
//
// // The audio file's encoding and sample rate
// const options = {
//   encoding: 'LINEAR16',
//   sampleRate: 16000
// };
//
// // Detects speech in the audio file
// speechClient.recognize(fileName, options, (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   console.log(`Transcription: ${result}`);
// });
// // [END speech_quickstart]
