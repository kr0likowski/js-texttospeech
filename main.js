var synth = window.speechSynthesis;

var voiceSelect = document.querySelector('#voice-select');

var input = document.querySelector('#txt');

var voices = [];

// DOM Loaded
document.addEventListener('DOMContentLoaded',()=>{
  populateVoices();
});

// Speak button clicked
document.querySelector('#speak').addEventListener('click', ()=>{
let utter = new SpeechSynthesisUtterance(input.value);
let selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

voices.forEach((voice)=>{
  if(voice.name === selectedVoice){
    utter.voice = voice;
  }

  utter.pitch = 1;
  utter.rate = 1;
  synth.speak(utter);

  input.blur();
});

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
