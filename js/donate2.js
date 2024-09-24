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

    //heading-text
    const headingText2 = getHeadingTextById("feni-heading");
    console.log(headingText2);

    //current date and time
    const currentDateTime = new Date().toString();

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

      // modal
      document.getElementById("my_modal_6").showModal();

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
    <h2 class="text-[#111] text-xl font-bold">${donateAmount2} taka is ${headingText2}</h2>
    <p class="text-base font-light text-neutral-900">
        Date: ${currentDateTime}
      </p>
    `;

      document.getElementById("history-container").appendChild(div);
    }
  });
