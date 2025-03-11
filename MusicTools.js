const musicTools = {
    midiPitchToFrequency: function (midiPitch) {
       let freq = 440 * Math.pow(2, ((midiPitch - 69) / 12)) 
        return freq
    } ,
    frequencyToMidiPitch: function (frequency) {
        
        let midiPitch =  69 + 12 * Math.log2(frequency / 440);
        return midiPitch
    } ,
    dbfsToLinearAmplitude: function (dbfs) {
        
        let linear = Math.pow(10, dbfs / 20)
        return linear
    }, 
    linearAmplitudeToDBFS: function (amp) {
        let dBFS = 20 * Math.log10(amp);
        return dBFS
    } ,

};

export {musicTools};
