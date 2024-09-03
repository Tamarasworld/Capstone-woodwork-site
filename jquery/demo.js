$(document).ready(function () {
  $("p").css({ color: "green", "margin - top": "20px" });
  $(".redFont").css({ color: "green", "margin-top": "20px" });
  $("#myTag.css")({ color: "blue", "margin-top": "20px" });
  $("[href]").css("color", "#777");

  $("#hide").on("click", function () {
    $("p").hide();
  });

  $("#show").on("click", function () {
    $("p").show();
  });

  $("#toggle").on("click", function () {
    $("h1").toggle();
  });
});

// Import our custom CSS

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
