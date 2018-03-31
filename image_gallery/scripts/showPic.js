/**
 * Created by lanjing on 31/03/2018.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source)

    var p = document.getElementById("description")
    var text = whichpic.getAttribute("title")
    p.firstChild.nodeValue = text
}