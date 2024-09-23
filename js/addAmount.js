// donation for nk 
document.getElementById('btn-amount-input-nk').addEventListener('click',function(){
    const inputAmount = getInputValueById('amount-input-nk');
    const mainBalane = getTextValueById('balance');
    const nkAmount = getTextValueById('donate-for-nk');

    if(inputAmount>mainBalane){
        alert("insufficient balance!");
        return;
    }
    else if (isNaN(inputAmount)) {
        alert('Enter a valid amount!');
        return;
    }


    const donateAmount = nkAmount+inputAmount;
    document.getElementById('donate-for-nk').innerText = donateAmount;
    
    const mainBalaneUpdate = mainBalane-inputAmount;
    document.getElementById('balance').innerText = mainBalaneUpdate;
    
    document.getElementById('my_modal_5').showModal();

    // clear input field 
    clearInputField('amount-input-nk');
    
})