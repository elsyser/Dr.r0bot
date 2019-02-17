chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is green.');
    });
    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                //pageUrl: {hostEquals: "facebook.com"},
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

var ssl, wifi, pass;

document.addEventListener('DOMContentLoaded', function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:6969/networkConnections', false ); // false for synchronous request
    xmlHttp.send( null );
    var networkConnections = xmlHttp.responseText;
    checkContent(networkConnections[0].security);
});

function checkContent(isNetworkSecure)
{
    if (!isNetworkSecure)
    {
        wifi = localStorage.getItem("wifi") == "true" ? true : false;
        var passField = document.getElementByName("password");
        if (passField != undefined && wifi){
            alert("You are connected to an UNSECURE wireless network!\n" +
             "It is highly recommended that you use a VPN!!!");
        };
    }

}

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab)
  {

    if (changeInfo.status === "complete")
    {

      ssl = localStorage.getItem("ssl") == "true" ? true : false;
      pass = localStorage.getItem("pass") == "true" ? true : false;
      wifi = localStorage.getItem("wifi") == "true" ? true : false;

      if ((tab.url.indexOf('https') < 0 && tab.url.indexOf("chrome://") < 0) && ssl)
      {
        alert("\n" +
        "Warning! This site is not using a SLL certificate!\n" +
        "DO NOT provide any personal information.\n\n" +
        "Please install HTTPS Everywhere! It is browser extension that forces websites to use HTTPS if it's available.\n" +
        "It can be found here --> https://www.eff.org/https-everywhere.")
    }}
  });


document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        pass = localStorage.getItem("pass") == "true" ? true : false;
        if((url.includes('registration') || (url.includes('sign') && url.includes('up'))) && pass){
            $("input[type='password']").click(function() {
                alert("\n" +
                    "    Please review your password!\n\n" +
                    "    It should have AT LEAST 12 Characters. The longer the password is, the better.\n\n" +
                    "    It should include Numbers, Symbols, Capital Letters, and Lower-Case Letters.\n\n" +
                    "    It should NOT be a Dictionary Word or Combination of Dictionary Words.\n\n" +
                    "    Don't Rely on Obvious Substitutions like 'H0use'. They are well known and not that hard to crack.\n\n" +
                    "    Using easy to remember sentences is a good way create strong passwords.");
            });
        }
    });
});
