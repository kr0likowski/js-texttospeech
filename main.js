var synth = window.speechSynthesis;

var voiceSelect = document.querySelector('#voice-select');

// DOM Loaded
document.addEventListener('DOMContentLoaded',()=>{
  populateVoices();
});

function populateVoices(){
  voices = synth.getVoices();
  voices.forEach((voice)=>{
    let option = document.createElement('option');
    option.textContent = voice.name + ' (' + voice.lang + ')';

    if(voice.default){
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    voiceSelect.appendChild(option);
  });
}
