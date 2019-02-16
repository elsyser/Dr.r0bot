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

function checkContent()
{
   let form = document.getElementsByTagName("FORM");
   if (form !== undefined)
   {
     alert("Found form");
   }
   else
   {
     alert("Not found form");
   }
}

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab)
  {
    if (changeInfo.status === "complete")
    {
      checkContent(tab.url);
    }
  });
