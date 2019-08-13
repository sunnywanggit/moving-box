var box = document.getElementById("box");

var onoff = false;
var originalX;
var originanY;

document.body.onmousedown = function (e) {
    onoff = true;
    originalX = e.clientX;
    originanY = e.clientY;

}
document.body.onmousemove = function (e) {
    if (onoff === true) {
        var top = parseInt(box.style.top) || 0;
        var left = parseInt(box.style.left) || 0;
        box.style.top = top + e.clientY - originanY + 'px';
        box.style.left = left + e.clientX - originalX + 'px';
        originalX = e.clientX;
        originanY = e.clientY;
    }
}
document.body.onmouseup = function (e) {
    onoff = false;
}

