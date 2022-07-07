var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    console.log("this is start button")
document.getElementById("textbox").innerHTML="";
recognition.start();

}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
Webcam.attach(camera);
}
function speak(){
    var synth=window.speechSynthesis;
    speechdata="Taking your selfies";
    var utterthis=new SpeechSynthesisUtterance(speechdata);
    synth.speak(utterthis);
setTimeout(
    function(){
    take_snapshot1();
    save()
    },5000
);
setTimeout(
    function(){
        take_snapshot2();
    },5000
);
setTimeout(
    function(){
        take_snapshot3();
    },5000
);


}
Webcam.set({
    width:360,
     height:250,
     image_format:'png',
     png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot1(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML="<img id='selfie_image1' src='"+data_uri+"'>";
    });
}
function take_snapshot2(){
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML="<img id='selfie_image2' src='"+data_uri+"'>";
    });
}
function take_snapshot3(){
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML="<img id='selfie_image3' src='"+data_uri+"'>";
    });
}
function save(){
  link=document.getElementById("link");
  image=document.getElementById("selfie_image").src;
  link.href=image;
  link.click();
}