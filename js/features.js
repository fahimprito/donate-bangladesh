// donation button 
const donationTab = document.getElementById('donation-btn');
donationTab.addEventListener('click', function () {
    showSectonById('donation-section');
    
    donationTab.classList.add(
        "bg-lightGreen", "hover:bg-lime-400",
    );
    donationTab.classList.remove(
        "btn-outline", "hover:bg-lightGreen", "text-blackSecondary", "hover:text-blackSecondary", "border-gray-400", "hover:border-gray-300",
    );

    historyTab.classList.add(
        "btn-outline", "hover:bg-lightGreen", "text-blackSecondary", "hover:text-blackSecondary", "border-gray-400", "hover:border-gray-300",
    )
    historyTab.classList.remove(
        "bg-lightGreen", "hover:bg-lime-400",
    )
})


const historyTab = document.getElementById('history-btn');
historyTab.addEventListener('click', function () {
    showSectonById('history-section');
    historyTab.classList.add(
        "bg-lightGreen", "hover:bg-lime-400",
    );
    historyTab.classList.remove(
        "btn-outline", "hover:bg-lightGreen", "text-blackSecondary", "hover:text-blackSecondary", "border-gray-400", "hover:border-gray-300",
    );

    donationTab.classList.add(
        "btn-outline", "hover:bg-lightGreen", "text-blackSecondary", "hover:text-blackSecondary", "border-gray-400", "hover:border-gray-300",
    )
    donationTab.classList.remove(
        "bg-lightGreen", "hover:bg-lime-400",
    )
    
})