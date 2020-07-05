$(document).ready(function() {

  var hash = window.location.hash;
  if (hash && $(hash).length) {
    openSection(hash);
  }

  $.get('date.json', function(data) {
    $('#updated_date').html(data.date);
  });

  $('#links .button').click(function() {
    var selected = '#'+$(this).data('id');
    openSection(selected);
  });
  $('#schedule h3').click(function() {
    var selected = $(this).attr('id');
    openSection('#schedule', selected);
  });
  $('#projects h3').click(function() {
    var selected = $(this).attr('id');
    openSection('#projects', selected);
  });
  
});

function openSection(id, heading) {
  if (open && open === heading) closeSection(heading);
  else {
    $('.block').hide();
    if (heading) $('.toggle').hide();
    $(id).show();

    if (heading) {
      $('#'+heading+'-content').show();    
      if ($(id+' div.toggle:visible')[0]) {
        open = $(id+' div.toggle:visible')[0].id.substring(0, 2);
      }
    }
    // window.location.hash = id.substring(1);
    // if (!heading) {
    //   $(window).scrollTop();
    // }
  }
}

function closeSection(heading) {
  $('.toggle').hide();
  open = null;
}
