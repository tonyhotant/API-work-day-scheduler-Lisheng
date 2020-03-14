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
    "5pm"
  ];

  var nowTime = moment()
    .format("LT")
    .charAt(0);  
  for (var i = 0; i < businessHours.length; i++) {
    var workTime = businessHours[i].charAt(0);
    //TO DO
    //find way to compare with 11am and 12am
    $(".container").append(
      $("<div>", { class: "row" }).append([
        $("<div>", { class: "time-block col-md-2" }).text(businessHours[i]),
        $("<div>", { class: "description col-md-8" }),
        $("<button>", { class: "saveBtn col-md-2" })
      ])
    );
    if (nowTime < workTime) {
      $(".description").addClass("past");
    } else if (nowTime == workTime) {
      $(".description").addClass("present");
    } else if (nowTime > workTime) {
      $(".description").addClass("future");
    }
  }




  


});
