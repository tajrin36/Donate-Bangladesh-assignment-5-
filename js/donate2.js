document
  .getElementById("donate-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //main available balance
    const availableAmount2 = getSpanValueById("available-amount");

    //user donate amount
    const donateAmount2 = getInputFieldValueById("donate-amount-input-2");

    //coin ammount inside the card
    const coinAmount2 = getSpanValueById("coin-amount-2");

    if (isNaN(donateAmount2) || donateAmount2 <= 0) {
      alert("Please enter a valid donation amount!");
    } else if (availableAmount2 <= 0 || donateAmount2 > availableAmount2) {
      alert("Sorry! Insufficient available balance to donate!");
    } else {
      //update coin balance
      const newBalance2 = donateAmount2 + coinAmount2;
      document.getElementById("coin-amount-2").innerText = newBalance2;

      //update main balance
      const availableNewBalance = availableAmount2 - donateAmount2;
      document.getElementById("available-amount").innerText =
        availableNewBalance;
    }
  });
