$(function () {

  // Save button event
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, description);
  });

  function updateTimeBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1], 10);

      $(this).removeClass("past present future");
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Load saved data from localStorage
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var description = localStorage.getItem(timeBlockId);

    if (description) {
      $(this).find(".description").val(description);
    }
  });

  // Display current day
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Initial time block update
  updateTimeBlocks();
  
  // Update the time blocks every minute
  setInterval(updateTimeBlocks, 60000);
});
