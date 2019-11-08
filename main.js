var students = [
				{name: 'fooz'},				
				{name: 'amera'}
				];

var id = 1;
var currentSticky = '';
var index;
var color = 'pink';
$('#img_add').click( function() {
	var name =  prompt('Please enter your list name');
	var notStudent;
	while (name === '') {
		name =  prompt('Please enter your list name');
	}

	if (name !== null) {

		for (var i = 0; i < students.length; i++) {
			if (students[i]['name'] === name) {
				notStudent = 'false';
				$('#div_add').append('<h1>' + name + '</h1>');
				var note = $("<div class='sticky pink' id='sticky" + id + "'" + "><textarea></textarea></div>")
				currentSticky = 'sticky' + id;
				id++;
				index = i;
				$('#div_add').append(note);
				$('#div_add').show();				
			}
		} 
		

		if (notStudent === undefined) {
			alert('Your not student in RBK');
		}
	}
});

// add new sticky note
$('#btn_new').click( function() {
	var noteText = $('textarea').val();
	if (noteText !== "") {
	students[index][currentSticky] = noteText;
	var newNote = $("<div class='sticky " + color + "' id='" + currentSticky + "'>" + '<h3>' + noteText + '</h3>' + "</div>").draggable({stack: ".sticky"});
	$('textarea').val("");
	$('#container').append(newNote);
	$('#div_add').hide();
	} else {
		alert('the note is empty!');
	}

});

// change the color of sticky note
 $('.colors').click(function() {
 	if (currentSticky !== '') {
 		color = $(this).attr('class').split(' ')[0];
 		$('#' + currentSticky).removeClass();
 		$('#' + currentSticky).addClass('sticky ' + color);
 	}
 }); 

 // close
 $('#btn_close').click(function() {
 	textarea.val('');
 	$('#div_add').hide();
 });



