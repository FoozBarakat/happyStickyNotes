var students = [
				{name: 'fooz'},				
				{name: 'amera'}
				];

var id = 1;
var currentSticky = '';
var index;
var color = 'pink';
var showName = '';

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
				$('#sticky_place').html('');
				$('#sticky_place').append("<h3><input type='checkbox' id='checkbox'>" + name + "</h3>");
				var note = $("<div class='sticky pink' id='sticky" + id + "'" + "><textarea></textarea></div>")
				currentSticky = 'sticky' + id;
				id++;
				index = i;
				$('#sticky_place').append(note);
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
	var newNote = $("<div class='sticky " + color + "' id='" + currentSticky + "'>" + '<h3>' + noteText +'</h3>' + "</div>").draggable({stack: ".sticky"});
	$('textarea').val("");
	$('#container').append(newNote);
	$('#' + currentSticky).append(showName);
	showName = '';
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
 $('#div_add').on('ckick', $('#img_add'), function() {
 	$('textarea').val("");
 	$('#div_add').hide();
 })

 // show the name

 $('#sticky_place').on('click', 'input[type=checkbox]', function(event) {
 	console.log(event.target.checked);
 	if (event.target.checked) {
 		showName = $(this).closest('h3').text();
 	} else {
 		showName = '';
 	}
}); 



