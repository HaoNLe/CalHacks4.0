$(document).ready(function() {
  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function() {
    var marginleft = parseInt($('#carousel').css('margin-left').replace("px", ""));

    if (marginleft === -3840) {
      return false;
    } else {
      var marginleft = marginleft - 960;
      $('#carousel').css('margin-left', marginleft);
    }
  });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    var marginleft = parseInt($('#carousel').css('margin-left').replace("px", ""));

    if (marginleft === 0) {
      return false;
    } else {
      var marginleft = marginleft + 960;
      $('#carousel').css('margin-left', marginleft);
    }
  });

});
