function toCase(text) {
  // Check if the string is empty
  if (text === "") {
    return "-";
  }

  // Convert the string to lowercase and uppercase
  let lowerCaseText = text.toLowerCase();
  let upperCaseText = text.toUpperCase();

  // Concatenate the lower case, '-' and upper case text
  return lowerCaseText + '-' + upperCaseText;

  // Now you need to return the result
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
