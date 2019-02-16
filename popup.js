let sslCheck = document.getElementById("ssl");
let passCheck = document.getElementById("pass");
let wifiCheck = document.getElementById("wifi");

export let ssl, pass, wifi;

// sslCheck.onclick = () => ssl = sslCheck.checked
// passCheck.onclick = () => pass = passCheck.checked
// wifiCheck.onclick = () => wifi = wifiCheck.checked
window.onload = () => { alert(sslCheck) }
sslCheck.onclick = () => { alert(ssl) }
passCheck.onclick = () => { alert(pass) }
wifiCheck.onclick = () => { alert(wifi) }
