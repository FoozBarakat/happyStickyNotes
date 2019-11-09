var id = 1;
var currentSticky = '';
var index;
var color = 'yellow';
var showName = '';


// display the sticky note on the body		 
var displaySticky = function(noteText) {
	var newNote = $("<div class='sticky " + color + "' id='" + currentSticky + "'>" + '<h3 class="positionText">' + noteText +'</h3>' + "</div>").draggable({stack: ".sticky"}).selectable();
	var x = "<h4 class='name positionName' id='rbkMember'>" + showName + "</h4>";
	$('textarea').val("");
	$('#container').append(newNote);
	$('#' + currentSticky).append(x);
	showName = '';
	$('#div_add').hide();

	$('.sticky').on('click', 'h4#rbkMember', function() {
		var member= $(this).closest('h4').text();
		$('#container').html('');
		for (var i = 0; i < students.length; i++) {
			if ( students[i]['name'] === member ) {
				for (var key in students[i]) {
					if ( key !== 'name' ){
						displaySticky(students[i][key]);
					}
				}			
			}
		}
	});
}
/////////////////////////////////////////////

// push the text in the students array
var addSticky = function(noteText) {
	students[index][currentSticky] = noteText;
}


// open the to a new stickyNote 
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
		addSticky(noteText);
		displaySticky(noteText);
		showName = '';
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


 // close the new sticky note div
 $('#div_add').on('click', 'button#btn_close', function() {
 	$('#div_add').hide();
 });


 // show the name
 $('#sticky_place').on('click', 'input[type=checkbox]', function(event) {

 	if (event.target.checked) {
 		showName = $(this).closest('h3').text();
 	} else {
 		showName = '';
 	}

}); 


