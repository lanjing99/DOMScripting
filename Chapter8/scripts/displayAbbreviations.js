// function displayAbbreviations() {
//   if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// // get all the abbreviations
//   var abbreviations = document.getElementsByTagName("abbr");
//   if (abbreviations.length < 1) return false;
//   var defs = new Array();
// // loop through the abbreviations
//   for (var i=0; i<abbreviations.length; i++) {
//     var current_abbr = abbreviations[i];
//     if (current_abbr.childNodes.length < 1) continue;
//     var definition = current_abbr.getAttribute("title");
//     var key = current_abbr.lastChild.nodeValue;
//     defs[key] = definition;
//   }
// // create the definition list
//   var dlist = document.createElement("dl");
// // loop through the definitions
//   for (key in defs) {
//     var definition = defs[key];
// // create the definition title
//     var dtitle = document.createElement("dt");
//     var dtitle_text = document.createTextNode(key);
//     dtitle.appendChild(dtitle_text);
// // create the definition description
//     var ddesc = document.createElement("dd");
//     var ddesc_text = document.createTextNode(definition);
//     ddesc.appendChild(ddesc_text);
// // add them to the definition list
//     dlist.appendChild(dtitle);
//     dlist.appendChild(ddesc);
//   }
//   if (dlist.childNodes.length < 1) return false;
// // create a headline
//   var header = document.createElement("h2");
//   var header_text = document.createTextNode("Abbreviations");
//   header.appendChild(header_text);
// // add the headline to the body
//   document.body.appendChild(header);
// // add the definition list to the body
//   document.body.appendChild(dlist);
// }
addLoadEvent(displayAbbreviations);
function displayAbbreviations() {

    //get abbr properties
    var defs = new Array();
    var abbrs = document.getElementsByTagName("abbr");
    if(abbrs.length == 1){
      return false;
    }

    for(var i = 0; i < abbrs.length; i++){
      var description = abbrs[i].getAttribute("title");
      var key = abbrs[i].lastChild.nodeValue;
      defs[key] = description;
    }

    //create Abbreviations Node
    var dlist = document.createElement("dl");
    for(key in defs){
      var dt = document.createElement("dt");
      var dtText = document.createTextNode(key);
      dt.appendChild(dtText);
      dlist.appendChild(dt);

      var dd = document.createElement("dd");
      var ddText = document.createTextNode(defs[key]);
      dd.appendChild(ddText);
      dlist.appendChild(dd);
    }

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("Abbreviations");
    h2.appendChild(h2Text);
    document.body.appendChild(h2);
    document.body.appendChild(dlist);


    //create abbr node
}