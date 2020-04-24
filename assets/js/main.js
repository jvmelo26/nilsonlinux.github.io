// scrolljump

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122784671-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122784671-2');
</script>


$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#scrollup').fadeIn();
    } else {
      $('#scrollup').fadeOut();
    }
  });
  $('#scrollup').click(function() {
    $('body,html').animate({scrollTop:0},300);
  });
});

// magnific popup
$('.video-link').magnificPopup({
  type: 'iframe'
});

// search form popup
$(document).ready(function(){
  $('a[href="#search"]').on('click', function(event) {
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });
  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });
});
