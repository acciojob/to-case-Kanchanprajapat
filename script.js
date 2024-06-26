function toCase(text) {
  // Check if the string is empty
  if (text === "") {
    return "-";
  }

  // Convert the string to lowercase and uppercase
   var lower = str.toLowerCase();
    var upper = str.toUpperCase();
    
    return lower + "-" + upper;
  // Now you need to return the result
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
