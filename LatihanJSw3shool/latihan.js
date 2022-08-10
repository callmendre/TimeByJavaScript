window.setTimeout("waktu()", 1000)

function waktu(){
    var waktu = new Date();
    setTimeout("waktu()", 1);
    document.getElementById('jam').innerHTML = waktu.getHours() + ":";
    document.getElementById("menit").innerHTML = waktu.getMinutes() + ":";
    document.getElementById("detik").innerHTML = waktu.getSeconds() + ":";
    document.getElementById("milidetik").innerHTML = waktu.getMilliseconds();
}
