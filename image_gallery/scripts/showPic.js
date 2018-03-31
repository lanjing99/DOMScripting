/**
 * Created by lanjing on 31/03/2018.
 */

// window.onload = prepareGallery;

// 第5章函数
// function prepareLinks() {
//     var links = document.getElementsByClassName("popup");
//     for(var i = 0; i < links.length; i++){
//         if (links[i].tagName != "A"){
//             continue;
//         }
//
//         links[i].onclick = function () {
//             showPic(this);
//             //这里不能用, 闭包捕获的问题在这里。待研究
//             //showPic(links[i]);
//             return false;
//         }
//     }
// }

// function prepareLinks() {
//     var links = document.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//         if (links[i].getAttribute("class") == "popup") {
//             links[i].onclick = function () {
//                 popup(this.href);
//                 return false;
//             }
//
//         }
//     }
// }


addLoadEvent(prepareGallery)

function addLoadEvent(func) {
    var oldEvent = window.onload;
    if(typeof oldEvent != 'function'){
        window.onload = func;
    }else{
        window.onload = function () {
            oldEvent();
            func();
        }
    }

}

function prepareGallery() {
    var gallery = document.getElementById("imageGalerry");
    if(gallery == null){
        return;
    }
    var links = gallery.getElementsByTagName("a")
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function popup(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}

/***********
 * 将whichPic IMG节点的信息传递给placeholder节点
 * @param whichpic
 * @returns {boolean}
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    if(placeholder.nodeName != "IMG"){
        return false;
    }
    placeholder.setAttribute("src", source)

    var p = document.getElementById("description")
    var text = whichpic.getAttribute("title")
    p.firstChild.nodeValue = text

    return true;
}