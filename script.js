import {musicTools} from "./MusicTools.js";

// Midi To Freq
const midiFreq = document.getElementById("midiToFreq");
const freqResult = document.getElementById("freqResult");
const midiInput = document.getElementById("midiInput");

const midiConversion = function() {
    let someText = musicTools.midiPitchToFrequency(midiInput.value);
    console.log(someText);
    freqResult.innerText = someText;
};

midiFreq.addEventListener("click", midiConversion);

// Freq to Midi

const freqInput = document.getElementById("freqInput");
const midiResult = document.getElementById("midiResult");
const freqMidi = document.getElementById("freqToMidi");

const freqConversion = function () {
    let someText = musicTools.frequencyToMidiPitch(freqInput.value);
    midiResult.innerText = someText;
}

freqMidi.addEventListener("click", freqConversion);


//dbfs to amp

const dbfsInput = document.getElementById("dbfsInput");
const linearResult = document.getElementById("linearResult");
const dbfsLinear = document.getElementById("dbfsToLinear");

const dbfsConversion = function () {
    let someText = musicTools.dbfsToLinearAmplitude(dbfsInput.value);
    linearResult.innerText = someText;
}

dbfsLinear.addEventListener("click", dbfsConversion);


//amp to dbfs

const linInput = document.getElementById("linearInput");
const dbfsResult = document.getElementById("dbfsResult");
const lineardbfs = document.getElementById("linearToDbfs");

const linConversion = function () {
    let someText = musicTools.linearAmplitudeToDBFS(linInput.value);
    dbfsResult.innerText = someText;
}

lineardbfs.addEventListener("click", linConversion);






