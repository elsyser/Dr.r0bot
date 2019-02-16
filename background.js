
chrome.runtime.onInstalled.addListener(function() {

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



chrome.tabs.onUpdated.addListener(
function ( tabId, changeInfo, tab )
{
  function put_alert()
  {
    alert("Warning!");
  }
  if (changeInfo.status === "complete")
  {
    chrome.tabs.executeScript(null, { code: "put_alert()" }, function() {
       console.log("console.log(attempt #5)");
   });
  }
});
