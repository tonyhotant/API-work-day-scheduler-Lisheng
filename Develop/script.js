$(document).ready(function() {
  //display current date and time
  window.setInterval(function() {
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
  }, 1000);

  var workHours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];

  var tasks = [];

  var nowTime = parseInt(
    moment()
      .format("LT")
      .match(/\d+/)
  ); //exact numbers only from time

  for (var i = 0; i < workHours.length; i++) {
    var workTime = parseInt(workHours[i].match(/\d+/g));

    //create html elements and style in future as default
    $(".container").append(
      $("<div>", { class: "row" }).append([
        $("<div>", { class: "time-block hour col-md-2" }).text(workHours[i]),
        $("<label>", { class: "description col-md-8 future" }).append(
          $("<textarea>", { id: i })
        ),
        $("<button>", { class: "saveBtn col-md-2" }).attr("data-index", i)
      ])
    );

    var nowHours =
      nowTime +
      moment()
        .format("LT")
        .slice(-2);

    // render the bar color to represent past or present
    if (workHours.includes(nowHours) == true && nowTime == workTime) {
      $(".description")
        .removeClass("future")
        .addClass("past");

      $(".description")
        .last()
        .removeClass("past")
        .addClass("present");
    } else if (
      moment()
        .format("LT")
        .slice(-2) == "PM"
    ) {
      $(".description")
        .removeClass("future")
        .addClass("past");
    }
    init();
  }

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var index = $(this).attr("data-index");
    var taskText = $("#" + index).val();
    var newTask = { time: index, content: taskText };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  function init() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    var newDay =
      moment()
        .format("L")
        .charAt(3) +
      moment()
        .format("L")
        .charAt(4);

    var today = newDay;

    if (today !== newDay) {
      localStorage.clear();
    } //reset the page in new day

    if (storedTasks == null) {
      return;
    }

    for (var i = 0; i < storedTasks.length; i++) {
      var storedIndex = storedTasks[i].time;
      var storedText = storedTasks[i].content;

      $("#" + storedIndex).text(storedText);
    }
  }
});
