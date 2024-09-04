$(document).ready(function () {
  console.log("testing jquery");
  $("p").css({ color: "red", "margin-top": "20px" });
  $("#myTag").css({ color: "blue", "margin-top": "20px" });
  $("[href]").css("color", "#777");

  $("#hide").on("click", function () {
    $("p").hide();
  });

  $("#show").on("click", function () {
    $("p").show();
  });

  $("#toggle").on("click", function () {
    $("h1").togggle();
  });
});
