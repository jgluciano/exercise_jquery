$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const newTask = $("#task-input").val();
    const newTaskInList = $("<li></li>");

    $("<a></a>").text(newTask).appendTo(newTaskInList);
    $("#phrase").hide();
    $(newTaskInList)
      .hide()
      .appendTo("ul")
      .fadeIn(800)
      .on("click", function () {
        $(this).toggleClass("task-checked");
      });

    $("#task-input").val("");
  });
});
