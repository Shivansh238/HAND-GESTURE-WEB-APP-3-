

prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qorn6llzx/model.json',modelLoaded);

function modelLoaded() {
    console.log("model is defiended");
}

function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error){
        console.error(error);
    } 
    else {
        console.log(results);
        Prediction1 = results[0].label;
    
    document.getElementById("result_gesture_name").innerHTML = Prediction1;
    speak();
    speak_data = "";
    if (Prediction1 == "amazing"){
        document.getElementById("result_emoji").innerHTML = "&#128076;";
        speak_data = "This is looking amazing" ;
    }
    
    if (Prediction1 == "best"){
        document.getElementById("result_emoji").innerHTML = "&#128077;";
        speak_data = "all the best" ;
    }
    
    if (Prediction1 == "victory"){
        document.getElementById("result_emoji").innerHTML = "&#9996;";
        speak_data = "that was a marvelous victory" ;
    }
    }
    
    
    
    
    }

