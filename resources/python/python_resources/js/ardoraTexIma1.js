//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function() {
var bWords = document.getElementsByTagName("b");if (bWords.length){for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}$("#boldBut").click(function() {hideBold();});
});
function hideBold(){var bWords=document.getElementsByTagName("b");if (bWords.length){if ((bWords[0].className=="") || (bWords[0].className=="showB")){
for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}else{for (x=0;x<bWords.length;x++){bWords[x].className="showB";}}}}
function imaUp(ima){$("body").css("overflow","hidden");$("#ardoraActCanvas").attr({"width": $(window).width(),"height": $(window).height()});document.getElementById("ardoraActCanvas").style.zIndex=5;document.getElementById("ardoraActCanvas").style["visibility"]="visible";
var alpha=0;var delta=0.03;var canvas=document.getElementById("ardoraActCanvas");var context=canvas.getContext("2d");context.beginPath();context.fillStyle="rgba(0, 0, 0, 0.25)";context.fillRect(0, 0, context.canvas.width, context.canvas.height);context.fill();var imageObj=new Image();
imageObj.onload = function() {var xCenterIma=($("#ardoraActCanvas").width()-imageObj.width) / 2;var yCenterIma=($("#ardoraActCanvas").height()-imageObj.height) / 2;context.beginPath();context.shadowColor ="rgba(0, 0, 0, 0.25)";context.shadowBlur = 10;
context.shadowOffsetX=10;context.shadowOffsetY=10;context.fill();context.beginPath();context.strokeStyle="rgba(0,0,0,1)";context.fillStyle ="rgba(255,255,255,1)";context.fillRect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);
context.fill();context.rect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);context.stroke();context.fill();context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY = 0;loop();
function loop(){alpha+=delta;if (alpha<=1){context.clearRect(xCenterIma,yCenterIma,imageObj.width,imageObj.height);context.globalAlpha=alpha;context.drawImage(imageObj,xCenterIma,yCenterIma);requestAnimationFrame(loop);}}};
imageObj.src =ima;$("#ardoraActCanvas").css("cursor", "pointer");$("#ardoraActCanvas").click(function() {document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";canvas.width=canvas.width;$("body").css("overflow","visible");$("#ardoraActCanvas").attr({"width":2,"height":2});});}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
function playIt(sound){var file=document.getElementById(sound);file.load();file.play();}
