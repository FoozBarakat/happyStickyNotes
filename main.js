var students = [{name: 'abdelslam'}, {name: 'abdlrrahman'}, {name: 'abdo'},
				{name: 'adem'}, {name: 'adnen'}, {name: 'ahmed'}, {name: 'ali'},
				{name: 'amera'}, {name: 'aouini'}, {name: 'anas'}, {name: 'bilel'}];
				

var id = 1;
var currentSticky = '';
var index;
var color = 'yellow';
var showName = '';

$('#img_add').click( function() {
	var name =  prompt('Please enter your name');
	var notStudent;
	while (name === '') {
		name =  prompt('Please enter your name');
	}

	if (name !== null) {

		for (var i = 0; i < students.length; i++) {
			if (students[i]['name'] === name) {
				notStudent = 'false';
				$('#sticky_place').html('');
				var holdName = "<h3 class='name'><input type='checkbox' id='checkbox'>" + name + "</h3>";
				var note = $("<div class='sticky yellow' id='sticky" + id + "'" + "><textarea></textarea></div>");
				currentSticky = 'sticky' + id;
				id++;
				index = i;
				$('#sticky_place').append(note, holdName);
				$('#div_add').show().draggable({stack: ".sticky"});;				
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
 $('#div_add').on('ckick', 'button[id=btn_close]', function() {
 	$('textarea').val("");
 	$('#div_add').hide();
 })

 // show the name

 $('#sticky_place').on('click', 'input[type=checkbox]', function(event) {

 	if (event.target.checked) {
 		showName = $(this).closest('h3').text();
 	} else {
 		showName = '';
 	}
}); 


