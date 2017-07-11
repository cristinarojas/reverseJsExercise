function reverseWords(str) { // function that recieve the string
  var o = ''; // New variable to save the result

  // Initialization of var i same as the length -1 to star from behind
  // Always compare if the var i is Greater or equal to 0
  // Decrement the value of the i
  for (var i = str.length -1; i >= 0; i--) { 
  	o += str[i]; // Saving the letter from back to front
  }

  return o;
}

reverseWords('Hola Cristina'); // Call the function with the param.