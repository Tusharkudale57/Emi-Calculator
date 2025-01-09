
const amountInput = document.getElementById('loan-amount');
const amountSlider = document.getElementById('amount-slider');
const tenureInput = document.getElementById('loan-tenure');
const tenureSlider = document.getElementById('tenure-slider');
const rateInput = document.getElementById('interest-rate');
const rateSlider = document.getElementById('rate-slider');

amountSlider.addEventListener('input', () => {
    amountInput.value = amountSlider.value;
});

tenureSlider.addEventListener('input', () => {
    tenureInput.value = tenureSlider.value;
});

rateSlider.addEventListener('input', () => {
    rateInput.value = rateSlider.value;
});

amountInput.addEventListener('input', () => {
    amountSlider.value = amountInput.value;
});

tenureInput.addEventListener('input', () => {
    tenureSlider.value = tenureInput.value;
});

rateInput.addEventListener('input', () => {
    rateSlider.value = rateInput.value;
});
