$(document).ready(function() {
  $('.box').on('click', function() {
    $(this).addClass('white');
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass('white');
  })

  $('#reset').on('click', function() {
    $('.box').removeClass('white')
  })


var color = 'white';

$('#red').on('click', function() {
  color = 'red';
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#green').on('click', function() {
  color = 'green';
})

$('#yellow').on('click', function() {
  color = 'yellow';
})

$('#white').on('click', function() {
  color = 'white';
})

$('#erase').on('click', function() {
  color = "black";
})


// $('.box').on('click', function() {
//   $(this).addClass(color);
// })

// $('.box').on('mouseover', function() {
//   $(this).removeClass(color);
// })

$('#reset').on('click', function() {
  $('.box').removeClass(color)
})
var colors = 'white green red blue yellow'

$('.box').on('mouseover', function() {

  if(isDown) {
  $(this).removeClass(colors);
}
})

$('#reset').on('click', function() {
  $('.box').removeClass(color)
})
$('#reset').on('dblclick', function() {
  $('.box').removeClass(colors)
})

var isDown = false;   // Tracks status of mouse button

  $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  $(".box").mouseover(function(){
    if(isDown) {        // Only change css if mouse is down
       $(this).addClass(color);
    }
  });



})
