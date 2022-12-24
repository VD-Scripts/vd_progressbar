

window.addEventListener("message", function(event){
  let data = event.data

  if (data.action === "start") {

    $("#prorgres").fadeIn();

    let time = data.s;
    
    $("#progresssssssssbar").animate({width: "100%"}, {
      duration: time,
      easing: "linear",
      step: function (number) {
        $("#procente").html(number.toFixed() + "%" );
      },
    });

    document.getElementById("text").innerHTML = data.txt;
    
  }

  if(data.action === "stop") {
    $("#prorgres").fadeOut();
  }

});