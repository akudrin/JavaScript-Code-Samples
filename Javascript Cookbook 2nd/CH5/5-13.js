.overlay
{
background-color: #000;
opacity: .7;
filter: alpha(opacity=70);
position: absolute; top: 0; left: 0;
width: 100%; height: 100%;
z-index: 10;
}

function expandOverlay() {
    var overlay = document.createElement("div");
    overlay.setAttribute("id","overlay");
    overlay.setAttribute("class", "overlay");
    document.body.appendChild(overlay);
    }

    function restore() {
        document.body.removeChild(document.getElementById("overlay"));
        }