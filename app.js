//STUFF WE NEED: 
//Linked the jQuery and the scripts! 
//>>>>>Total word count of the submitted text
//SOL: count the entire text input, make big string and count the characters. 
//SOL: loop over the user submitted text and determine what a word actually is. 

//>>>>> Unique word count of the submitted text
//SOL: Store the word count in a var. Use a For loop and strip out what I don't need, punctuation, para, etc..

//>>>>>Average word length in characters of the submitted text
//SOL: looop and calculate the mean of the amount of characters in the text submitted 

//>>>>>The program should print each of these metrics in the appropriate area in the results section.
//SOL: each is printed to a diff element?? *** Getting weird behavior when trying console.log or firing in 
//an element, flashes for 1 sec and goes away??? 
//need to have jquery calls to hook into the html to display the right info.  >>thats where we need the class 

//OTHER NOTES: look up jQuery methods to possibly help and start building the parts out to then put 
//it all together to make thetext analyzer. 
//NOT QUITE SURE ON HOW TO STRUCTRE THE JS?? AREN'T MULTIPLE JQUERY CALLS BAD???? 
//NOT SURE IF ITS EASIER TO MAKE ARRAY TO STRING OR VICE VERSA????


//keep in mind: diff between text and a jQuery selector! *When using remove class or add class jQuery method.

// //takes in words (input from user)

//defined these in global scope for later use: 

	var wordCount = 0; 
	var uniqueCount = 0;
	var average = 0; 


function countWords(words) {
	return words.split(" ").length;
}; 

function uniqueWords(words) {
	var arrayWords = words.split(" ");
	var uniqueArray = []
	for(i = 0; i < arrayWords.length; i++) {
		var found = false; //reset for each array.
		for(j = 0; j < uniqueArray.length; j++) {
			if(arrayWords[i] === uniqueArray[j]) {
				found = true; 
				break; //force out of for loop
			}
		}
		if(!found){
			uniqueArray.push(arrayWords[i]); 
		}	
	}
	return uniqueArray.length;  
};

function avWords (words) {
	var arrayWords = words.split(" ");
	var sum = 0;
	for(i=0; i < arrayWords.length; i++){
		sum += arrayWords[i].length;
	}
		return sum / arrayWords.length; 
}
function render () {
	$('#uniqueCount').text(uniqueCount);
	$('#wordCount').text(wordCount);
	$('#averageCount').text(average);
}


$('form').submit(function (event) {
	event.preventDefault();
	$('#results').removeClass('hidden')
	var words = ($('#user-text').val());
	 wordCount = countWords(words); 
	 uniqueCount = uniqueWords(words);
	 average = avWords(words); 
	 render(); 
});

