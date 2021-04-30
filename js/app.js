document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

function displayStockInfo(stockData) {
  //console.log(stockData);
  let textStage = document.getElementById("Tab1");
  let textContent = "";
  var obj = stockData; 

  for(var i=0; i < obj.length; i++) {
    //console.log(obj[i]);
    textContent += "<p>code: "+obj[i].code + "</p>";
    textContent += "<p>id: "+obj[i].id + "</p>";
    textContent += "<p>market: "+obj[i].market + "</p>";
    textContent += "<p>mic: "+obj[i].mic + "</p>";
    textContent += "<p>name: "+obj[i].name + "</p>";
    textContent += "<p>tape: "+obj[i].tape + "</p>";
    textContent += "<p>type: "+obj[i].type + "</p><br><hr>";  
  }
  textStage.innerHTML = textContent;
}

function getStockInfo() {
  var url = "https://api.polygon.io/v1/meta/exchanges?&"
  +"apiKey=YOUR-API-KEY";
  var req = new Request(url);
  fetch(req)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    displayStockInfo(data);
  });

}

document.addEventListener('init', function(event) {
  var page = event.target;
  console.log(page.id)
  if (page.id === 'Tab1') {
    getStockInfo();
  }
});
