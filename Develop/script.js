$(document).ready(function() {
  window.setInterval(function() {
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
  }, 1000);

  var businessHours = [
    "9AM",
    "10AM",
    "11AM",
    "12AM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];

  var nowTime = parseInt(
    moment()
      .format("LT")
      .match(/\d+/)
  );

  for (var i = 0; i < businessHours.length; i++) {
    var workTime = parseInt(businessHours[i].match(/\d+/g));

    $(".container").append(
      $("<div>", { class: "row" }).append([
        $("<div>", { class: "time-block hour col-md-2" }).text(
          businessHours[i]
        ),
        $("<label>", { class: "description col-md-8 future" }).append(
          "<textarea>"
        ),
        $("<button>", { class: "saveBtn col-md-2" })
      ])
    );

    if (nowTime == workTime) {
      $(".description")
        .removeClass("future")
        .addClass("past");

      $(".description")
        .last()
        .removeClass("past")
        .addClass("present");
    }
  }

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var task = $("textarea").val();
    console.log(task);
    localStorage.setItem("event", task);




  });







});

//TO DO:
// 1. AM PM check