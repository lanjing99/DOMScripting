/**
 * Created by lanjing on 31/03/2018.
 */

window.onload = prepareLinks;

function prepareLinks() {
    var links = document.getElementsByClassName("popup");
    for(var i = 0; i < links.length; i++){
        if (links[i].tagName != "A"){
            continue;
        }

        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}

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


function popup(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}
function showPic(whichpic) {
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source)

    var p = document.getElementById("description")
    var text = whichpic.getAttribute("title")
    p.firstChild.nodeValue = text
}