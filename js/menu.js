/*************************************************************************
 * For loading the menu.
 * The menu will not work if you open the file directly rather than on a web server.
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    $(".menu-container").load("menu.html");
  });

  $(function() {
    $('#menu-toggle').on('click', function(e) {
      e.preventDefault();
      $('#menu-items').toggleClass('open');
    });
    $('#menu-items a').on('click', function() {
      $('#menu-items').removeClass('open');
    });
  });
})();
