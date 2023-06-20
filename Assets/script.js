$(function () {
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

  updateTimeBlocks();

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var description = localStorage.getItem(timeBlockId);

    if (description) {
      $(this).find(".description").val(description);
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});