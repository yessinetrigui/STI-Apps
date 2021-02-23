i = 1
function next() {
    i = i + 1
    if (i == 5) {
        i = 1
    }
    document.getElementById('img').src = 'img' + i + '.jpg'
}
function prev() {
    if (i >= 1 && i < 5) {

        if (i == 1) {
            i = 4
        } else {
            i = i - 1
        }
        document.getElementById('img').src = 'img' + i + '.jpg'
    }
}
function change() {
    document.getElementById('img2').src = document.getElementById('slc').value + '.jpg';

}
function change2() {

    var x = document.getElementById('slc2').selectedIndex;
    if (x == 0) {
        document.getElementById('img3').src = 'img1.jpg'
    }
    else if (x == 1) {
        document.getElementById('img3').src = 'img2.jpg'
    }
    else if (x == 2) {
        document.getElementById('img3').src = 'img3.jpg'
    }
    else if (x == 3) {
        document.getElementById('img3').src = 'img4.jpg'
    }

}