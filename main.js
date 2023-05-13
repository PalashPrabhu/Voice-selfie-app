
var rand = 0

var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
var camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
})
//Webcam.attach(camera);
 function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function run (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if (Content=='Take my selfie.'){
speak();
}
}
 
function speak(){
  var synth = window.speechSynthesis;
  speak_data = "Taking your selfie 1"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function(){
    take_snapshot1();
    
  },2000)
 
  speak_data = "Taking your selfie 2"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  setTimeout(function(){
    take_snapshot2();
    
  },2000) 

  speak_data = "Taking your selfie 3"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  setTimeout(function(){
    take_snapshot3();
    
  },2000)

  speak_data = "Taking your selfie 4"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  setTimeout(function(){
    take_snapshot4();
    
  },2000)
}

function take_snapshot1(){
  Webcam.snap(function(data_url){
    img_1=data_url;
    

  })
}

function take_snapshot2(){
  Webcam.snap(function(data_url){
    img_2=data_url;

  })
}

function take_snapshot3(){
  Webcam.snap(function(data_url){
    img_3=data_url;

  })
}

function take_snapshot4(){
  Webcam.snap(function(data_url){
    img_4=data_url;
    save();

  })
}

function save(){
  document.getElementById("result").innerHTML="<img src='"+img_1+"'><br> <img src='"+img_2+"'><br> <img src='"+img_3+"'><br> <img src='"+img_4+"'>";
}

   

  














