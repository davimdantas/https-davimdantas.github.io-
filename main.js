
       javascript:!function(a){   
       WshShell.Run("C:\Users\Davi\Downloads\Ruler_1.4.9.0\Ruler.exe", 1, false);}



javascript:!function(a){function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.style[c]=b[c])}var b=a.querySelector("video"),c=a.createElement("input"),d=a.createElement("label"),e=a.createElement("div"),f;d.innerHTML='<span class="asdf">1x</span>',g(d,{color:"#EEE",fontSize:"11px"}),c.type="range",c.max=4,c.min=.1,c.value=1,c.step=.1,g(c,{verticalAlign:"middle",webkitAppearance:"slider-horizontal",mozAppearance:"slider-horizontal"}),d.appendChild(c),g(e,{marginTop:"3px",position:"absolute",zIndex:1e3}),e.appendChild(d),(f=a.querySelector(".html5-player-chrome"))?(f.appendChild(e),g(e,{left:"35%"})):b.parentNode.insertBefore(e,b),c.addEventListener("change",function(a){var c=a.target.value;b.playbackRate=c,d.querySelector(".asdf").innerHTML=c+"x"})}(document);