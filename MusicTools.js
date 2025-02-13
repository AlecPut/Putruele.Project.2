const MusicTools = {
    midiPitchToFrequency: function (midiPitch) {
       return freq = 440 * Math.pow(2, ((midiPitch - 69) / 12)) 
    } ,
    frequencyToMidiPitch: function (frequency) {
        return midiPitch =  69 + 12 * Math.log2(frequency / 440);
    } ,
    dbfsToLinearAmplitude: function (dbfs) {
        return linear = Math.pow(10, dbfs / 20)
    }, 
    linearAmplitudeToDBFS: function (amp) {
        dBFS = 20 * Math.log10(amp);
    } ,

}

export default MusicTools;