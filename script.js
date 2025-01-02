function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase to handle case insensitivity
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();
  
  // Use indexOf to find the first occurrence of the lowercase version of subStr in str
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
