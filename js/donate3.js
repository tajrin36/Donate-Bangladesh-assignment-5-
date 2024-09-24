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

    //heading-text
    const headingText3 = getHeadingTextById("quota-heading");
    console.log(headingText3);

    //current date and time
    const currentDateTime = new Date().toString();

    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please enter a valid donation amount!");
      
    } else if (availableAmount <= 0 || donateAmount > availableAmount) {
      alert("Sorry! Insufficient available balance to donate!");
      
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

      const div = document.createElement("div");
      div.classList.add(
        "border",
        "rounded-2xl",
        "flex",
        "flex-col",
        "gap-y-4",
        "mb-4",
        "p-5"
      );
      div.innerHTML = `
    <h2 class="text-[#111] text-xl font-bold">${donateAmount} taka is ${headingText3},Bangladesh</h2>
    <p class="text-base font-light text-neutral-900">
        Date: ${currentDateTime}
      </p>
    `;

      document.getElementById("history-container").appendChild(div);
    }
  });
