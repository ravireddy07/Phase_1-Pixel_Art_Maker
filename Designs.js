let Down;

$("input[type = 'submit']").click(function(e){
  e.preventDefault();
  makeGrid();
})


function makeGrid() {


var h=$("#inputHeight").val();
var w=$("#inputWeight").val();

var table=$("#pixelCanvas");

table.children().remove();

if (h>100){
  h=100
}
if (w>100){
  w=100
}

for (var i = 0; i < h; i++) {
  table.last().append("<tr> </tr>");
  for (var j = 0; j < w; j++) {
    table.children().last().append("<td></td>");
  }
}
};



$( 'table' ).on( 'click', 'td' , function() {
    var colour = $('#colorPicker').val();
    $(this).css( 'background', colour );
});

$(document).mousedown(function () {
    Down = true;
})
$(document).mouseup(function () {
    Down = false;
});

$('table').on('mouseover', 'td', function () {
    if (Down) {
      var colour = $('#colorPicker').val();
        $(this).css( 'background', colour );
    }
});

$('table').on('dblclick', 'td', function(){
    $(this).css("background-color", "white");
});
 
 function resetGrid(){
   $('#pixelCanvas').empty();
 }

function resetColour(){
  $('td').css({"background-color": ""});
}
