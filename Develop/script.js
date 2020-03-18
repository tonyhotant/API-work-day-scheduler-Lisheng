$(document).ready(function() {
  window.setInterval(function() {
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
  }, 1000);

  var workHours = [
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

  var tasks = [];

  var nowTime = parseInt(
    moment()
      .format("LT")
      .match(/\d+/)
  );

  for (var i = 0; i < workHours.length; i++) {
    var workTime = parseInt(workHours[i].match(/\d+/g));

    //need check for am pm here, loop through workHours to check
    var nowHours = moment().format("LT");

    $(".container").append(
      $("<div>", { class: "row" }).append([
        $("<div>", { class: "time-block hour col-md-2" }).text(workHours[i]),
        $("<label>", { class: "description col-md-8 future" }).append(
          $("<textarea>", { id: i })
        ),
        $("<button>", { class: "saveBtn col-md-2" }).attr("data-index", i)
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
    init();
  }

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var index = $(this).attr("data-index");

    var taskText = $("#" + index).val();

    for ( var i =0; i < tasks.length; i++) {
      if (taskText == null) {
        return;
      }
      else if (taskText == tasks[i].content) {
        return;
      }
    }    

    var newTask = { time: index, content: taskText };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  function init() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    var newDay = moment().format('L').charAt(3) + moment().format('L').charAt(4);
    console.log(newDay);

    var today = newDay;

    if (today !== newDay) {
      localStorage.clear();
    }

    for (var i = 0; i < storedTasks.length; i++) {
      var storedIndex = storedTasks[i].time;
      var storedText = storedTasks[i].content;

      $("#" + storedIndex).text(storedText);
    }
  }
});

//TO DO:
// 1. AM PM check
