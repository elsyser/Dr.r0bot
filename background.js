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
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:6969/networkConnections', false ); // false for synchronous request
    xmlHttp.send( null );
    var networkConnections = xmlHttp.responseText;
    checkContent(networkConnections[0].security);
});

function checkContent()
{
   var passField = document.getElementByName("password");
   if (passField != undefined && pass){
     alert("\n" +
     "    Please review your password!\n\n" +
     "    It should have AT LEAST 12 Characters. The longer the password is, the better.\n\n" +
     "    It should include Numbers, Symbols, Capital Letters, and Lower-Case Letters.\n\n" +
     "    It should NOT be a Dictionary Word or Combination of Dictionary Words.\n\n" +
     "    Don't Rely on Obvious Substitutions like 'H0use'. They are well known and not that hard to crack.\n\n" +
     "    Using easy to remember sentences is a good way create strong passwords.");

   }
}

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab)
  {
    if (changeInfo.status === "complete")
    {
      if (wifi)
      {
        alert("You are connected to an UNSECURE wireless network!\n" +
        "It is highly recommended that you use a VPN!!!");
      }

      if (tab.url.indexOf('https') != -1 || tab.url.indexOf("chrome://") != -1)
      {
       checkContent();
      }

      if (ssl)
      {
        alert("\n" +
        "Warning! This site is not using a SLL certificate!\n" +
        "DO NOT provide any personal information.\n\n" +
        "Please install HTTPS Everywhere! It is browser extension that forces websites to use HTTPS if it's available.\n" +
        "It can be found here --> https://www.eff.org/https-everywhere.");
      }

    }
        });
