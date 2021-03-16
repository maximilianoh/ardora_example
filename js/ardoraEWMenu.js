$(function(){
      $(".fg-button").hover(
          function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },
      	   function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); }
       );
   $("#flat2").menu({
       content: $("#flat2").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat7").menu({
       content: $("#flat7").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat11").menu({
       content: $("#flat11").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat16").menu({
       content: $("#flat16").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat21").menu({
       content: $("#flat21").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat24").menu({
       content: $("#flat24").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat27").menu({
       content: $("#flat27").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"center"});});
}
