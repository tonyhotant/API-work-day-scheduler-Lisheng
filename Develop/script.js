$(document).ready(function() {
  window.setInterval(function() {
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
  }, 1000);

  var businessHours = [
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm"
  ];

  var nowTime = parseInt(moment()
    .format("LT")
    .match(/\d+/));

  for (var i = 0; i < businessHours.length; i++) {
    var workTime = parseInt(businessHours[i].match(/\d+/g));

    $(".container").append(
      $("<div>", { class: "row" }).append([
        $("<div>", { class: "time-block col-md-2" }).text(businessHours[i]),
        $("<div>", { class: "description col-md-8 future" }),
        $("<button>", { class: "saveBtn col-md-2" })
      ])
    );

    // if (nowTime == workTime) {
    //   $(".description")
    //     .last()
    //     .removeClass("future")
    //     .addClass("present");
    //   }


    console.log(nowTime == workTime);
    console.log(typeof(nowTime));
    console.log(typeof(workTime));
    console.log("now is " + nowTime);
    console.log("work time is " + workTime);  

    while (nowTime !== workTime) {
      $(".description").removeClass("future").addClass("past");
    }

    if (nowTime == workTime) {
      $(".description")
        .last()
        .removeClass("future")
        .addClass("present");
    }






    }



  



  
});
