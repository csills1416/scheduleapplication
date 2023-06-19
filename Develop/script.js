$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, description);
  });

function updateTimeBlocks() {
  var currentTime = parseInt($(this).attr("id".split("-")[1]), 10);

  $(this).removeClass("past present future");
  if (hour< currentTime) {
    $(this).addClass("past");
  } else if (hour === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
}

