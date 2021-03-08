function isAlpha(ch) {
    var i = 0;
    while ((ch.charAt(i).toUpperCase() >= "A") && (ch.charAt(i).toUpperCase() <= "Z") && (i < ch.length - 1)) {
        i++;
    }
    return (ch.charAt(i).toUpperCase() >= 'A') && (ch.charAt(i).toUpperCase() <= 'Z')
}
function verifPW() {
    pw = document.getElementById('pw').value;
    var M = 0
    var m = 0
    var C = 0
    for (let i = 0; i < pw.length; i++) {
        console.log(pw.charAt(i))
        if (pw.charAt(i) >= 'A' && pw.charAt(i) <= 'Z') {
            M++;
        }
        if (pw.charAt(i) >= 'a' && pw.charAt(i) <= 'z') {
            m++;
        }
        if (pw.charAt(i) >= '0' && pw.charAt(i) <= '9') {
            C++;
        }
    }
    if (pw.length < 8) {
        document.getElementById('ms4').innerHTML = 'password court !'
    }
    else if (M < 2 || m < 2 || C < 2) {
        document.getElementById('ms4').innerHTML = 'password facile !'
    }
    else document.getElementById('ms4').innerHTML = ''


}
function verif() {
    var name = document.getElementById('name').value;
    var slc = document.getElementById('slc');
    var email = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var pwc = document.getElementById('pwc').value;
    var rd1 = document.getElementById('rd1').checked;
    var rd2 = document.getElementById('rd2').checked;
    var cb = document.getElementById('cb').checked;

    var pass = true;

    if (name.length == 0) {
        document.getElementById('ms1').innerHTML = 'name vide !'
        pass = false;
    }
    else if (isAlpha(name) == false) {
        console.log(isAlpha(name))
        document.getElementById('ms1').innerHTML = 'non alpha!'
        pass = false;
    }
    else {
        document.getElementById('ms1').innerHTML = ''
    }
    if (slc.selectedIndex == 0) {
        document.getElementById('ms2').innerHTML = 'choisir un server'
        pass = false;
    } else {
        document.getElementById('ms2').innerHTML = ''
    }
    if (email.length == 0) {
        document.getElementById('ms3').innerHTML = 'mail vide !'
        pass = false;
    } else {
        document.getElementById('ms3').innerHTML = ''
    }
    if (pw.length == 0) {
        document.getElementById('ms4').innerHTML = 'password vide !'
        pass = false;
    } else {
        document.getElementById('ms4').innerHTML = ''
    }
    if (pw != pwc) {
        document.getElementById('ms5').innerHTML = 'verif pass !'
        pass = false;
    } else {
        document.getElementById('ms5').innerHTML = ''
    }
    if (!(rd1 || rd2)) {
        document.getElementById('ms6').innerHTML = 'verif Sexe !'
        pass = false;
    } else {
        document.getElementById('ms6').innerHTML = ''
    }
    if (!(cb)) {
        document.getElementById('ms7').innerHTML = 'verif checkbox !'
        pass = false;
    } else {
        document.getElementById('ms7').innerHTML = ''
    }
    return pass;
}
function fill() {
    console.log('test')
    var name = document.getElementById('name').value;
    var slc = document.getElementById('slc').value;
    var x = name.substr(0, 3) + "@" + slc
    document.getElementById('email').value = x;
}

function Minus() {
    var name = document.getElementById('name').value;
    var x = name.toLowerCase();
    document.getElementById('name').value = x;
}


var ImgSelct = 1;
document.getElementById('imgslider').src = ImgSelct + '.png'
function next() {
    ImgSelct++;
    if (ImgSelct > 3) ImgSelct = 1;
    document.getElementById('imgslider').src = ImgSelct + '.png'
}
function prev() {
    ImgSelct--;
    if (ImgSelct < 1) ImgSelct = 3;
    document.getElementById('imgslider').src = ImgSelct + '.png'
}
function imgSelect() {
    var choix = document.getElementById('slc').value;
    console.log(choix)
    if (choix == 'gnet.tn')
        document.getElementById('img-mail').src = 'https://queenscitizen.ca/wp-content/uploads/2020/12/1609383761_Global-Net-IoT-and-Internet-Offers-Startup-and-Gaming.jpg'
    else if (choix == 'gmail.com')
        document.getElementById('img-mail').src = 'https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0'
    else
        document.getElementById('img-mail').src = 'https://www.clcv.org/storage/app/uploads/public/c84/c69/b03/thumb__800_0_0_0_crop.jpg'
}