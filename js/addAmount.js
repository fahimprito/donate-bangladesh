// donation for nk 
document.getElementById('btn-amount-input-nk').addEventListener('click', function () {
    const inputAmount = getInputValueById('amount-input-nk');
    const mainBalane = getTextValueById('balance');
    const nkAmount = getTextValueById('donate-for-nk');

    if (inputAmount > mainBalane) {
        alert("insufficient balance!");
        return;
    }
    else if (isNaN(inputAmount)) {
        alert('Enter a valid amount!');
        return;
    }


    const donateAmount = nkAmount + inputAmount;
    document.getElementById('donate-for-nk').innerText = donateAmount;

    const mainBalaneUpdate = mainBalane - inputAmount;
    document.getElementById('balance').innerText = mainBalaneUpdate;

    document.getElementById('my_modal_5').showModal();

    // clear input field 
    clearInputField('amount-input-nk');


    //history
    const date = new Date();
    const historyItem = document.createElement('div');
    historyItem.classList.add('rounded-xl', 'border-2', 'items-center', 'p-6', 'my-10');
    historyItem.innerHTML = `
    <div class="flex flex-col justify-between gap-4">
        <h4 class="font-bold text-2xl text-gray-one">${inputAmount} Taka is Donated for Flood Relief at Noakhali, Bangladesh</h4>
        <p class="text-xl text-blackSecondary">Date: ${date}</p>
    </div>
    
    `
    // document.getElementById('history-section').appendChild(historyItem);
    const historySec = document.getElementById('history-section');
    historySec.insertBefore(historyItem, historySec.firstChild);

})