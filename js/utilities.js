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
