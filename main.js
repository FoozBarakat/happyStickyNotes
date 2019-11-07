var students = [
				{name: 'fooz'},				
				{name: 'amera'}
				];

var id = 1;
var currentSticky = '';

$('#img_add').click( function() {
	var name =  prompt('Please enter your list name');
	var notStudent;
	while (name === '') {
		name =  prompt('Please enter your list name');
	}

	if (name !== null) {

		students.forEach(function(student) {
			if (student['name'] === name) {
				notStudent = 'false';
				var note = $("<div class='sticky pink' id='sticky" + id + "'" + "><textarea></textarea></div>")
				currentSticky = 'sticky' + id;
				id++;
				$('#div_add').append(note);
				$('#div_add').append('<h1>' + name + '</h1>');
				$('#div_add').show();
				
			} 
		});

		if (notStudent === undefined) {
			alert('Your not student in RBK');
		}
	}
});

//////////////////////////////////////////////

// add new sticky note
$('#btn_new').click( function() {
	var noteText = $('textarea').val();
	students[currentSticky] = noteText;
	var newNote = $("<div class='sticky pink id='" + currentSticky + "'>" + noteText + "</div>").draggable({stack: ".sticky"});
	$('#container').append(newNote);
	$('#div_add').hide();
});

// change the color of sticky note
 $('.colors').click(function() {
 	if (currentSticky !== '') {
 		var color = $(this).attr('class').split(' ')[0];
 		$('#' + currentSticky).removeClass();
 		$('#' + currentSticky).addClass('sticky ' + color);
 	}
 }); 

// change the z-index

$('#container').on('click', 'textarea', function() {
	var z_index = getMaxZ_index('.sticky');
	$(this).parent().css('z-index', z_index + 1);
});

function getMaxZ_index(elment) {
	var max = 0;

	$(elment).each( function() {
		var z = $(this).css('z-index');
		//alert(z);
		max = Math.max(max, z);
	});
	return max;
}


