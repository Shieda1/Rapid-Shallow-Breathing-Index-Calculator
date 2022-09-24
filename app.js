// https://www.omnicalculator.com/health/rsbi

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const rapidshallowbreathingindexRadio = document.getElementById('rapidshallowbreathingindexRadio');
const respiratoryrateRadio = document.getElementById('respiratoryrateRadio');
const tidalvolumeRadio = document.getElementById('tidalvolumeRadio');

let rapidshallowbreathingindex;
let respiratoryrate = v1;
let tidalvolume = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

rapidshallowbreathingindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Respiratory rate';
  variable2.textContent = 'Tidal volume';
  respiratoryrate = v1;
  tidalvolume = v2;
  result.textContent = '';
});

respiratoryrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Rapid shallow breathing index';
  variable2.textContent = 'Tidal volume';
  rapidshallowbreathingindex = v1;
  tidalvolume = v2;
  result.textContent = '';
});

tidalvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Rapid shallow breathing index';
  variable2.textContent = 'Respiratory rate';
  rapidshallowbreathingindex = v1;
  respiratoryrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(rapidshallowbreathingindexRadio.checked)
    result.textContent = `Rapid shallow breathing index = ${computerapidshallowbreathingindex().toFixed(2)}`;

  else if(respiratoryrateRadio.checked)
    result.textContent = `Respiratory rate = ${computerespiratoryrate().toFixed(2)}`;

  else if(tidalvolumeRadio.checked)
    result.textContent = `Tidal volume = ${computetidalvolume().toFixed(2)}`;
})

// calculation

function computerapidshallowbreathingindex() {
  return (Number(respiratoryrate.value) / Number(tidalvolume.value)) * 1000;
}

function computerespiratoryrate() {
  return (Number(rapidshallowbreathingindex.value) / 1000) * Number(tidalvolume.value);
}

function computetidalvolume() {
  return Number(respiratoryrate.value) / (Number(rapidshallowbreathingindex.value) / 1000);
}