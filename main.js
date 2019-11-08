var students = [ {name: 'fooz', sticky1:'kjgdfdfskjl'}];
				// {name: 'abdlrrahman'}, {name: 'abdo'},
				// {name: 'adem'}, {name: 'adnen'}, {name: 'ahmed'}, {name: 'ali'},
				// {name: 'amera'}, {name: 'aouini'}, {name: 'anas'}, {name: 'bilel'},
				// {name: 'dhia'}, {name: 'essam'}, {name: 'fares'}, {name: 'fatima'},
				// {name: 'firas'}, {name: 'khoubaieb'}, {name: 'farouk'},
				// {name: 'fooz', sticky1:"hgjghgkhghgkjhgg", sticky2:"klhlsdhjdh"},///////////// ///////////////
				// {name: 'hmam'}, {name: 'hamza'}, {name: 'hania'}, 
				// {name: 'hashem'}, {name: 'heni'}, {name: 'houda'}, {name: 'insaf'},
				// {name: 'jhhed'}, {name: 'lina'}, {name: 'maher'}, {name: 'malik'},
				// {name: 'mehdi'}, {name: 'slaimia', sticky3: 'dlsdfkjsfdkjl'},//////////////////////////
				// {name: 'belkheir'}, {name: 'weslati'},
				// {name: 'fared'}, {name: 'sbeta'}, {name: 'muftah'}, {name: 'nejah'}, 
				// {name: 'bara'}, {name: 'ons'}, {name: 'ruba'}, {name: 'salim'}, {name: 'sofian'},
				// {name: 'mejri'}, {name: 'znazen'}, {name: 'wajdii'}, {name: 'zied'},
				// {name: 'matt'}, {name: 'yousef'}, {name: 'tam'}, {name: 'seif'}, {name: 'omar'}, {name: 'raghda'}];


var id = 1;
var currentSticky = '';
var index;
var color = 'yellow';
var showName = '';

////////////////////////////////////////////////		 
var displaySticky = function(noteText) {
	var newNote = $("<div class='sticky " + color + "' id='" + currentSticky + "'>" + '<h3 class="positionText">' + noteText +'</h3>' + "</div>").draggable({stack: ".sticky"}).selectable();
	$('textarea').val("");
	$('#container').append(newNote);
	var x = "<h4 class='name positionName'>" + showName + "</h4>";
	$('#' + currentSticky).append(x);
	showName = '';
	$('#div_add').hide();
}

var addSticky = function(noteText) {
	students[index][currentSticky] = noteText;
}

// for (var i = 0; i < students.length; i++) {
// 	var person;
// 	for (var key in students[i]) {
// 		if (key === 'name') {
// 			person = students[i][key];
// 			console.log(person)
// 		} else {
// 			displaySticky(students[i][key]);
// 		}
// 	}
// }



//////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////
// change the color of sticky note
 $('.colors').click(function() {
 	if (currentSticky !== '') {
 		color = $(this).attr('class').split(' ')[0];
 		$('#' + currentSticky).removeClass();
 		$('#' + currentSticky).addClass('sticky ' + color);
 	}
 }); 

///////////////////////////////////////////////////////
 // close
 $('#btn_close').click( function() {
 	$('#div_add').rmove();
 });

///////////////////////////////////////////////////////////
 // show the name
 $('#sticky_place').on('click', 'input[type=checkbox]', function(event) {

 	if (event.target.checked) {
 		showName = $(this).closest('h3').text();
 	} else {
 		showName = '';
 	}

}); 


