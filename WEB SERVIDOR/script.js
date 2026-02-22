function copyIP() {
    const ip = document.getElementById("ip").innerText;
    navigator.clipboard.writeText(ip);
    alert("IP copiada correctamente: " + ip);
}