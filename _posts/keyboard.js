document.addEventListener("DOMContentLoaded", function(event) {
    

    //map keyboard keys to frequencies
    const keyboardFrequencyMap = {
        '90': 261.625565300598634,  //Z - C
        '83': 277.182630976872096, //S - C#
        '88': 293.664767917407560,  //X - D
        '68': 311.126983722080910, //D - D#
        '67': 329.627556912869929,  //C - E
        '86': 349.228231433003884,  //V - F
        '71': 369.994422711634398, //G - F#
        '66': 391.995435981749294,  //B - G
        '72': 415.304697579945138, //H - G#
        '78': 440.000000000000000,  //N - A
        '74': 466.163761518089916, //J - A#
        '77': 493.883301256124111,  //M - B
        '81': 523.251130601197269,  //Q - C
        '50': 554.365261953744192, //2 - C#
        '87': 587.329535834815120,  //W - D
        '51': 622.253967444161821, //3 - D#
        '69': 659.255113825739859,  //E - E
        '82': 698.456462866007768,  //R - F
        '53': 739.988845423268797, //5 - F#
        '84': 783.990871963498588,  //T - G
        '54': 830.609395159890277, //6 - G#
        '89': 880.000000000000000,  //Y - A
        '55': 932.327523036179832, //7 - A#
        '85': 987.766602512248223,  //U - B
    }
    
    window.addEventListener('keydown', keyDown, false);
    window.addEventListener('keyup', keyUp, false);
    //attack in playNote, release in keyDown, sustain established by length of time key held for, decay is 0
    activeOscillators = {}
    activeGains = {}
    var activeNotes = 0.0
    var currGain = 1.0
    var color = 0;
    var red = true;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const globalGain = audioCtx.createGain(); //this will control the volume of all notes
    globalGain.gain.setValueAtTime(0.8, audioCtx.currentTime);
    globalGain.connect(audioCtx.destination);

    
    function keyDown(event) {
        const key = (event.detail || event.which).toString();
        if (keyboardFrequencyMap[key] && !activeOscillators[key]) {
            activeNotes = activeNotes + 1.0;
            
            currGain =(1.0/activeNotes);
            sparseKeys = Object.keys(activeGains) //access only filled array elements
            if (activeNotes > 1.0){ //decrease amplitude of all existing notes to make room for new one
                for (let i = 0; i < sparseKeys.length; i++){
                    activeGains[sparseKeys[i]].gain.setTargetAtTime(currGain, audioCtx.currentTime, 1);
                }
            }
            playNote(key, currGain);
        }
    }

    function keyUp(event) {
        const key = (event.detail || event.which).toString();
        if (keyboardFrequencyMap[key] && activeOscillators[key]) {
            activeGains[key].gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7) //envelope release
            activeOscillators[key].stop(audioCtx.currentTime + 1); //actually stop oscillator
            delete activeOscillators[key];
            delete activeGains[key];
            activeNotes = activeNotes - 1.0;
        }
    }



    function playNote(key, currGain) {
        const osc = audioCtx.createOscillator();
        osc.frequency.setValueAtTime(keyboardFrequencyMap[key], audioCtx.currentTime);
        osc.type = document.getElementById('waveform').value; //choose your favorite waveform
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0
        osc.connect(gainNode).connect(globalGain); //new gain node for each node to control the adsr of that note
        activeOscillators[key] = osc
        activeGains[key] = gainNode
        osc.start();
        gainNode.gain.setTargetAtTime(currGain, audioCtx.currentTime, .2) //envelope attack
        funTime()

    }

    function funTime(){
        //switch color with every new button press, press 2 to skip a color, or 3 to skip 2 etc.
        colors = ['#345995', '#1C949D', '#03CEA4', '#41AE8B', '#7F8E71', '#BD6E57', '#FB4D3D', '#E33147', '#CA1551']
        if (red){
            document.body.style.color = colors[color++]
        }else{
            document.body.style.color = colors[color--]
        }
        if (color == 8){
            red = false
        }if (color == -1){
            red = true
        }
    }

})