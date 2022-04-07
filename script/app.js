const adviceId = document.querySelector('.js-advice-id');
const adviceTxt = document.querySelector('.js-advice-txt');
const btn = document.querySelector('.js-button');
const ADVICE_URL = 'https://api.adviceslip.com/advice';


function makeRequest() {
    const adviceRequest = new XMLHttpRequest();
    
    adviceRequest.addEventListener('readystatechange', setAdviceText);
    
    adviceRequest.open('GET', ADVICE_URL, true);
    adviceRequest.send();
}

function setAdviceText() {
    if (this.readyState === XMLHttpRequest.DONE) {
       if (this.status === 200) {

         const response = JSON.parse(this.responseText);

         //  console.log(response)
         adviceId.innerText = response.slip['id'];
         adviceTxt.innerText = `"${response.slip['advice']}"`;
       }
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', makeRequest);
});