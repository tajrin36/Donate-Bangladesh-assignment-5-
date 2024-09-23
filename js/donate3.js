document
  .getElementById("donate-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //main available balance
    const availableAmount = getSpanValueById("available-amount");

    //user donate amount
    const donateAmount = getInputFieldValueById("donate-amount-input-3");

    //coin ammount inside the card
    const coinAmount = getSpanValueById("coin-amount-3");

    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please enter a valid donation amount!");
      document.getElementById('my_modal_7').classList.add('hidden');
    } else if (availableAmount <= 0 || donateAmount > availableAmount) {
      alert("Sorry! Insufficient available balance to donate!");
      document.getElementById('my_modal_7').classList.add('hidden');
    } else {
      //update coin balance
      const newBalance = donateAmount + coinAmount;
      document.getElementById("coin-amount-3").innerText = newBalance;

      //update main balance
      const availableNewBalance = availableAmount - donateAmount;
      document.getElementById("available-amount").innerText =
        availableNewBalance;

         // modal
      document.getElementById("my_modal_7").showModal();
    }
  });


