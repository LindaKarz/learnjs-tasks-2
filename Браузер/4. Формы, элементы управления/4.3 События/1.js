"use strict";

function calcDepositInterest() {
  const form = document.forms.calculator;
  let initialSum;
  let months;
  let rate;
  let isCapitalized;
  let result;
  
  getValues();
  calcResult();
  showResult();
  
  form.oninput = () => {
    getValues();
    calcResult();
    showResult();
  }
  
  function getValues() {
    initialSum = +form.money.value;
    months = form.months.value;
    rate = form.rate.value;
    isCapitalized = (form.capitalization.checked) ? true : false;
  }
 
  function calcResult() {
    
    if ( isCapitalized ) {
      const monthRate = rate / 12;
      result = initialSum * Math.pow( 1 + (monthRate / 100), months );
    } else {
      const monthAccrual = (initialSum * rate / 100) / 12;
      result = initialSum + (monthAccrual * months);
    }
  }
  
  function showResult() {
    const outputBefore = form.querySelector(".js-initial-value");
    const outputAfter = form.querySelector(".js-result-value");
    const barBefore = form.querySelector(".js-initial-bar");
    const barAfter = form.querySelector(".js-result-bar");
    
    outputBefore.textContent = initialSum;
    outputAfter.textContent = Math.round( result );
    barAfter.style.height = `${barBefore.offsetHeight * (result / initialSum)}px`;
  }
}

calcDepositInterest();