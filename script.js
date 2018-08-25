window.onload = function () {

  var btn = this.document.querySelector('#btn');
  var priceDisp = this.document.querySelector('#price');
  var currency = "USD";

  btn.addEventListener('click', function () {
    getPrice();
    console.log("Button Clicked!")
  });

  function getPrice() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
      if (XHR.readyState == 4 && XHR.status == 200) {
        var data = JSON.parse(XHR.responseText)
        var price = data.bpi[currency].rate;
        priceDisp.innerText = currency + ' ' + price;
        // console.log(XHR.responseText);
      }
    }
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    XHR.open("GET", url);
    XHR.send();
  }

getPrice();

}