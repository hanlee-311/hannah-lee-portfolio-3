document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});  

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

$(document).ready(function() {
  $(".past-work").each(function() {
    $(this)
      .mouseover(function() {
        // $(".text-wrapper").addClass('invisible');
        $(".text-wrapper-2").addClass('invisible');
      })
      .mouseleave(function() {
        // $(".text-wrapper").removeClass('invisible');
        $(".text-wrapper-2").removeClass('invisible');
      });
  })
});