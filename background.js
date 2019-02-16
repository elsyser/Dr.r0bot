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

document.addEventListener('DOMContentLoaded', function() {
  console.log('attempt #3');
});


document.onload = function() {
  var put_alert = function()
  {
    alert("Warning!");
  }
}


chrome.tabs.onUpdated.addListener(
    function ( tabId, changeInfo, tab )
    {
        if (changeInfo.status === "complete")
      {
          //alert(tab.url);
          if (tab.url.indexOf('https') > -1)
          {
              //alert("Warning!");
              let test = 1;
          }
          else {
              alert("Warning! This site is not using a SLL certificate!");
          }
        //chrome.tabs.executeScript(null, { code: "console.log('attempt #4');" }, function() {
        //   put_alert();
       //});
      }
});
