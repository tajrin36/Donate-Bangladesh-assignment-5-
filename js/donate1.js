document
  .getElementById("donate-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //main available balance
    const availableAmount1 = getSpanValueById("available-amount");

    //user donate amount
    const donateAmount1 = getInputFieldValueById("donate-amount-input-1");

    //coin ammount inside the card
    const coinAmount1 = getSpanValueById("coin-amount-1");

    if (isNaN(donateAmount1) || donateAmount1 <= 0) {
      alert("Please enter a valid donation amount!");
    } else if (availableAmount1 <= 0 || donateAmount1 > availableAmount1) {
      alert("Sorry! Insufficient available balance to donate!");
    } else {
      //update coin balance
      const newBalance1 = donateAmount1 + coinAmount1;
      document.getElementById("coin-amount-1").innerText = newBalance1;

      //update main balance
      const availableNewBalance = availableAmount1 - donateAmount1;
      document.getElementById("available-amount").innerText =
        availableNewBalance;
    }
  });
