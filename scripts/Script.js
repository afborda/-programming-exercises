document.getElementById("myAnchor").addEventListener("click", event => {
  const value = document.getElementById("myText").value;
  result = parseInt(value, 2);
  document.getElementById("valueResult").innerHTML = result;
  event.preventDefault();
});
