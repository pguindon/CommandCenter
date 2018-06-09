zIndex = 10;
$('#new').click(function(){
  $('#notes')
    .append('\
            <div class="sticky-note-pre ui-widget-content">\
                <div class="handle">&nbsp;<div class="close">&times;</div></div>\
                <div contenteditable class="contents">awesome</div>\
            </div>\
         ')
    .find('.sticky-note-pre')
    //.position where we want it
    .end()
  //.do something else to $('#notes')
  ;
  $('.sticky-note-pre')
    .draggable({
      handle: '.handle'
    })
    .resizable({
      resize: function(){
        var n = $(this);
        n.find('.contents').css({
          width: n.width() - 40,
          height: n.height() - 60
        });
      }
    })
    .bind('click hover focus mousedown', function(){
      $(this)
        .css('zIndex', zIndex++)
        .find('.ui-icon')
        .css('zIndex', zIndex++)
        .end()
      ;
    })
    .find('.close')
    .click(function(){
      $(this).parents('.sticky-note').remove();
    })
    .end()
    .dblclick(function(){
      $(this).remove();
    })
    .addClass('sticky-note')
    .removeClass('sticky-note-pre')
  ;
});

$('#save').click(function(){
  var notes = [], i, note;
  $('.sticky-note').each(function(){
    notes.push($(this).find('.contents').html());
  });
  //do something with notes
  console.log(notes);
});
