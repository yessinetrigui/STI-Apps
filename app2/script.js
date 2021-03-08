function VerifAlpha() {
    var ch = document.getElementById('ps').value;
    var i = 0
    if (ch.length == 0) {
        return false
    }
    else {
        while ((i < ch.length - 1) && ('A' <= ch.charAt(i).toUpperCase()) && (ch.charAt(i).toUpperCase() <= 'Z')) {
            i = i + 1;
        }
        return (('A' <= ch.charAt(i).toUpperCase()) && (ch.charAt(i).toUpperCase() <= 'Z'))
    }
}
function mailremp() {
    var ch = document.getElementById('ps').value;
    var ser = document.getElementById('server').value;
    var x = ch.substring(0, 4) + '@' + ser
    if (ser != 'choisir') {
        document.getElementById('mail').value = x;
    }
    else {
        document.getElementById('mail').value = 'choisir un server';
    }

}
function verifPW() {
    var ch = document.getElementById('pw').value;
    var i = 0
    if (ch.length == 0) {
        return false
    } else return true
}
function pass() {
    VerifAlpha();

    return false
}