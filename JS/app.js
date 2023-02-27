const bill = document.querySelector('.bill > input');
const billError = document.querySelector('.bill-error');
const percentage = document.querySelectorAll('.percentage > .percentage-item');
const customPercentage = document.querySelector('.select-tip > .percentage .percentage-item input');
const numberOfPeople = document.querySelector('.number-of-people > input');
const numberOfPeopleError = document.querySelector('.number-of-people-error');
const tipAmount = document.querySelector('.result-box > div .tip-amount .right');
const total = document.querySelector('.result-box > div .total .right');
const reset = document.querySelector('.result-box > input');


reset.disabled = true;


bill.addEventListener('input', billInput)

function billInput(e) {
    if(e.target.value != 0) {
        reset.classList.add('active');
        billError.style.display = 'none'
        reset.disabled = false;
        bill.classList.remove('error');
    }   else{
        reset.classList.remove('active');
        bill.classList.add('error');
        billError.style.display = 'block';
    }

}

percentage.forEach(prcnt => {
prcnt.addEventListener('click',function percentageValue (e) {
        let isActive = document.querySelector('.active');

        if(isActive) {
            reset.classList.add('active');
            isActive.classList.remove('active');
            reset.disabled = false;
        }
        prcnt.classList.add('active');
        const calculateTip = () => {
            let tipValue = (bill.value)*(parseFloat(prcnt.innerHTML)/100);
            tipAmount.innerHTML = `$${tipValue.toFixed(2)}`;
        }
        calculateTip();
    })
});

customPercentage.addEventListener('input', customPercentageValue);

function customPercentageValue(e) {
    if(e.target.value != 0) {
        reset.classList.add('active');
        reset.disabled = false;
    }
    const calculateCustomTip = () => {
        let tipValue = (bill.value)*(parseFloat(e.target.value)/100);
        tipAmount.innerHTML = `$${tipValue.toFixed(2)}`;
    }
    calculateCustomTip();
};


numberOfPeople.addEventListener('input', numberOfPeopleInput)

function numberOfPeopleInput(e) {
    if(e.target.value != 0) {
        numberOfPeople.value;
        reset.classList.add('active');
        reset.disabled = false;
        numberOfPeople.classList.remove('error');
        numberOfPeopleError.style.display = 'none';
    }   else{
        reset.classList.remove('active');
        numberOfPeople.classList.add('error');
        numberOfPeopleError.style.display = 'block';
    }
    let tipAmountValue = Number(tipAmount.innerHTML.replace(/[^0-9.-]+/g,""));
    let finalTipAmount = tipAmountValue/numberOfPeople.value;
    tipAmount.textContent = `$${finalTipAmount.toFixed(2)}`;

    let totalAmount = (Number(bill.value)+Number(finalTipAmount));
    total.innerHTML = `$${(totalAmount/numberOfPeople.value).toFixed(2)}`;
};


numberOfPeople.addEventListener('click', () => {
    numberOfPeople.classList.toggle('active');
});


reset.addEventListener('click', () => {
    location.reload()
});