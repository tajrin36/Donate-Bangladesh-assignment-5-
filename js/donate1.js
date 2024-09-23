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

    //heading-text
    const headingText1 = getHeadingTextById("noakhali-heading");
    console.log(headingText1);

    //current date and time
    const currentDateTime = new Date().toString();

    if (isNaN(donateAmount1) || donateAmount1 <= 0) {
      alert("Please enter a valid donation amount!");
      document.getElementById("my_modal_5").classList.add("hidden");
    } else if (availableAmount1 <= 0 || donateAmount1 > availableAmount1) {
      alert("Sorry! Insufficient available balance to donate!");
      document.getElementById("my_modal_5").classList.add("hidden");
    } else {
      //update coin balance
      const newBalance1 = donateAmount1 + coinAmount1;
      document.getElementById("coin-amount-1").innerText = newBalance1;

      //update main balance
      const availableNewBalance = availableAmount1 - donateAmount1;
      document.getElementById("available-amount").innerText =
        availableNewBalance;

      // modal
      document.getElementById("my_modal_5").showModal();
      // document.getElementById("my_modal_5").classList.remove('hidden');

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
      //   p.innerText = `${donateAmount1} taka is ${headingText1}`;
      div.innerHTML = `
    <h2 class="text-[#111] text-xl font-bold">${donateAmount1} taka is ${headingText1}</h2>
    <p class="text-base font-light text-neutral-900">
        Date: ${currentDateTime}
      </p>
    `;

      document.getElementById("history-container").appendChild(div);
    }
  });
