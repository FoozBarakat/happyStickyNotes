var id = 1;
var currentSticky = '';

// add new sticky note
$('#btn_new').click( function() {
	var note = $("<div class='sticky yellow' id='sticky" + id + "'" + "><textarea></textarea></div>").draggable({stack: ".sticky"});
	currentSticky = 'sticky' + id;
	id++;
	$('#container').append(note);

});

// change the color of sticky note
 $('.colors').click(function() {
 	if (currentSticky !== '') {
 		var color = $(this).attr('class').split(' ')[0];
 		$('#' + currentSticky).removeClass();
 		$('#' + currentSticky).addClass('sticky ' + color);
 	}
 }); 




