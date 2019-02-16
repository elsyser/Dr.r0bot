// sslCheck.onclick = () => { alert(ssl) }
// passCheck.onclick = () => { alert(pass) }
// wifiCheck.onclick = () => { alert(wifi) }

$(document).ready(function () {
	// let sslCheck = document.getElementById("ssl");
  // let passCheck = document.getElementById("pass");
  // let wifiCheck = document.getElementById("wifi");

	alert('sdjask');

	let sslValue = chrome.storage.local.get(["ssl"]);
	let passValue = chrome.storage.local.get(["pass"]);
	let wifiValue = chrome.storage.local.get(["wifi"]);

	$('#ssl').checked = sslValue;
	$('#pass').checked = passValue;
	$('#wifi').checked = wifiValue;


	$('#ssl').click(function () {
		sslValue += 1;
		sslValue %= 2;
		chrome.storage.local.set({'ssl': sslValue}, null);
	});

	$('#pass').click(function () {
		passValue += 1;
		passValue %= 2;
		chrome.storage.local.set({'pass': passValue}, null);
	});

	$('#wifi').click(function () {
		wifiValue += 1;
		wifiValue %= 2;
		chrome.storage.local.set({'wifi': wifiValue}, null);
	});
});
