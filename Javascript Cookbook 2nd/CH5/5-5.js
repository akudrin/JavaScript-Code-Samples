elem.style.backgroundColor = 'red';
elem.style.width = "500px";
elem.style.fontFamily = "Courier";
elem.style.backgroundColor = "rgb(255,0,0)";
elem.setAttribute(
  'style',
  'background-color: red; color: white; border: 1px solid black'
);
.stripe{
    background-color: red;
    color: white;
    border: 1px solid black;
    }

    elem.setAttribute("class", "stripe");

 var styleAttr = document.createAttribute("style");
styleAttr.nodeValue = "background-color: red";
someElement.setAttribute(styleAttr);

var className = document.getElementById("elem1").getAttribute("class");