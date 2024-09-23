function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

//span value
function getSpanValueById(id) {
  const spanValue = document.getElementById(id).innerText;
  const spanNumber = parseFloat(spanValue);
  return spanNumber;
}

function getHeadingTextById(id) {
    const headingText = document.getElementById(id).innerText;
    return headingText;
}

function handleDonationButton() {
    const donationButton = document.getElementById('donation-button');
    const historyButton = document.getElementById('history-button');

    donationButton.style.backgroundColor = "#B4F461";
    historyButton.style.backgroundColor = "white";
    
    
}

function handleHistoryButton(){
    const donationButton = document.getElementById('donation-button');
    const historyButton = document.getElementById('history-button');

    historyButton.style.backgroundColor = "#B4F461";
    donationButton.style.backgroundColor = "white";
    
}

function showSectionByID(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

