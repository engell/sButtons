$(function() {
    $('.button').on('mouseover', function() {
          description = $(this).attr('alt');
          $(this).css({background: '#DCDCDC'});
          $('#desctiption').append("<span id='tmp'>"+description+"</span>");
      })
      $('.button').on('mouseleave', function() {
          $(this).css({background: 'transparent'});
          $('#tmp').remove();
      });
});
