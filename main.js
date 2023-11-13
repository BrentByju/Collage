function speak(){
    setTimeout(function()
    {
        var img_id1 = "selfie1"
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
        }
    , 5000);

    setTimeout(function()
    {
        var img_id  = "selfie2"
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
        }
    , 10000);

    setTimeout(function()
    {
        var img_id  = "selfie3"
        take_snapshot();
        speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
        }
    , 15000);
}

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){

        if(img_id == "selfie1"){
            document.getELementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie2"){
            document.getELementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie3"){
            document.getELementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}