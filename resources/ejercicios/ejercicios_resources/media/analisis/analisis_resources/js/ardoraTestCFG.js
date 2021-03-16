//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Empezar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fResp="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="¡Completaste la actividad!"; messageTime=""; messageError="Una o más respuestas no son correctas, ¡Vuelve a revisar!"; messageErrorG="Una o más respuestas no son correctas, ¡Vuelve a revisar!"; messageAttempts="¡Llegaste al máximo de intentos, vuelve a intentarlo!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YW5hbGlzaXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué hace el siguiente código?","¿Qué hace el siguiente código?","¿Qué hace el siguiente código?"];
var answers1=["MURldnVlbHZlIHNpIHVuYSBwYWxhYnJhIGRlZmluaWRhIGVzdOEgZW4gdW4gdGV4dG8","MERldnVlbHZlIGxhIGNhbnRpZGFkIGRlIHZlY2VzIHF1ZSB1biBlbGVtZW50byBlc3ThIGVuIHVuIHRleHRv","ME11ZXN0cmEgbGEgcG9zaWNp824gZGUgbGEgcGFsYWJyYSBpbmRpY2FkYSBlbiBlbCB0ZXh0bw"];
var answers2=["MURldnVlbHZlIHVuYSBsaXN0YSBzaW4gZWxlbWVudG9zIHJlcGV0aWRvcw","MERldnVlbHZlIHVuYSBjb3BpYSBkZSBsYSBsaXN0YQ","MERldnVlbHZlIHVuYSBsaXN0YSBjb24gbG9zIGVsZW1lbnRvcyByZXBldGlkb3M"];
var answers3=["MURldnVlbHZlIHVuYSBsaXN0YSBjb24gbG9zIG76bWVyb3MgZWxldmFkbyBhIGxhIHBvdGVuY2lhIG4","MERldnVlbHZlIHVuYSBsaXN0YSBjb24gbG9zIG76bWVyb3MgbXVsdGlwbGljYWRvcyBwb3Igbg","MERldnVlbHZlIHVuYSBsaXN0YSBlbiBkb25kZSBzZSBhZ3JlZ2FuIG4gdmVjZXMgc3VzIHZhbG9yZXM"];
var ans=[answers1,answers2,answers3];
var err=["","",""];
var ima=["funcion1.png","funcion2.png","funcion3.png"];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="analisis_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=3;
