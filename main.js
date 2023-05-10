var sR = window.webkitSpeechRecognition;// ffff //
var Recognition = new sR();
function start_activate() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
  
}
Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
    speak();

    }
}
function speak () {
    var synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        imgid = "selfie1"; 
        takeSnapshot();
        speakData = "takinng your selfie in 10 seconds";
        var utterthis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterthis);

    },5000); 
    setTimeout(function(){
        imgid = "selfie2"; 
        takeSnapshot();
        speakData = "takinng your selfie in 15 seconds";
        var utterthis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterthis);
        
      
    },10000);
    setTimeout(function(){
        imgid = "selfie3"; 
        takeSnapshot();
       
    },15000);
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png', png_quality:99
});
camera = document.getElementById("camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        if (imgid == "selfie1") {
            document.getElementById("result_1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }
            if (imgid == "selfie2") {
                document.getElementById("result_2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
            }
                if (imgid == "selfie3") {
                    document.getElementById("result_3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
                }

    }); 
    

}