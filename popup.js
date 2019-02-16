$(document).ready(function () {

	// localStorage.setItem("ssl", false);
	// localStorage.setItem("pass", false);
	// localStorage.setItem("wifi", false);

	let sslValue = localStorage.getItem("ssl") == "true" ? true : false;
	let passValue = localStorage.getItem("pass") == "true" ? true : false;
	let wifiValue = localStorage.getItem("wifi") == "true" ? true : false;

	$('#ssl').prop('checked', sslValue);
	$('#pass').prop('checked', passValue);
	$('#wifi').prop('checked', wifiValue);
	// $('#pass').checked = passValue;
	// $('#wifi').checked = wifiValue;

	$('#ssl').change(function () {
		// alert(typeof(sslValue));
		sslValue = this.checked;
		localStorage.setItem('ssl', sslValue);
	});

	$('#pass').change(function () {
		passValue = this.checked;
		localStorage.setItem('pass', passValue);
	});

	$('#wifi').change(function () {
		wifiValue = this.checked;
		localStorage.setItem('wifi', wifiValue);
	});

});
