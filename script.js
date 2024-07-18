function toCase(str) {
    // If the input string is empty, return "-"
    if (str === '') {
        return '-';
    }

    // Convert the string to lowercase
    const lowerCase = str.toLowerCase();
    
    // Convert the string to uppercase
    const upperCase = str.toUpperCase();

    // Concatenate the lowercase and uppercase strings with "-" as the delimiter
    return `${lowerCase}-${upperCase}`;
}


// DO not change the code below
	
	  const str = prompt("Enter text:");
	alert(toCase(str));
