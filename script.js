window.onload = function () {

  var btn = this.document.querySelector('#btn');
  var price = this.document.querySelector('currentPrice');

  btn.addEventListener('click', function () {

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
      if (XHR.readyState == 4 && XHR.status == 200) {

      }
    }
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    XHR.open("GET", url);
    XHR.send();

  });











}