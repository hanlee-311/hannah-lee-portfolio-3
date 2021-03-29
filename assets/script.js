$(document).ready(function() {
  $('a[href*=\\#]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop : $(this.hash).offset().top
      }, 500);
  });
});

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

// $(document).ready(function() {
//   $(".past-work").each(function() {
//     $(this)
//       .mouseover(function() {
//         $("#one").addClass('invisible');
//       })
//       .mouseleave(function() {
//         $("#one").removeClass('invisible');
//       });
//   })
// });