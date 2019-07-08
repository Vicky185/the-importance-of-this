$(document).ready(function(){
   $(".box").on("click", function(){
      var classNames = $(this).attr("class").split(" ");
      var boxClass = classNames[0];
      var className = classNames[1];
      if ($(this).css("background-color") == "rbg(255, 0, 0)") {
          $("." + className).css("background-color", "#aaa");
      } else {
          $("." + boxClass).css("background-color", "#aaa");
          $("." + className).css("background-color", "red");
      }
   });
});