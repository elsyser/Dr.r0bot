$(document).ready(function () {

	let sslValue = localStorage.setItem("ssl", true);
	let sslValue = localStorage.setItem("pass", false);
	let sslValue = localStorage.setItem("wifi", false);

	let sslValue = localStorage.getItem("ssl");
	let passValue = localStorage.getItem("pass");
	let wifiValue = localStorage.getItem("wifi");

	$('#ssl').checked = sslValue;
	$('#pass').checked = passValue;
	$('#wifi').checked = wifiValue;

	$('#ssl').change(function () {
		alert(sslValue);
		sslValue = !sslValue;
		localStorage.setItem('ssl', passValue);
	});

	$('#pass').change(function () {
		passValue += 1;
		passValue %= 2;
		localStorage.setItem('pass', passValue);
	});

	$('#wifi').change(function () {
		wifiValue += 1;
		wifiValue %= 2;
		localStorage.setItem('wifi', passValue);
	});
});
