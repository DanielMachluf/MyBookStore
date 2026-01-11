

function getPrice() {
    let price = document.getElementById("getPrice").value;
    const vat = price * 1.18;
    alert("the price with vat is: " + vat);
}