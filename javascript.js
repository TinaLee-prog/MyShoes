$(function () {
  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop() / 2;
    $("#mainmenu").css({
      "background-position-x": -scroll_position + "px",
    });
  });
});
