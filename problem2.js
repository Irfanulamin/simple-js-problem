function checkName(name) {
  if (typeof name === "string") {
    // the set of good name characters
    const lastNameCharacther = ["a", "y", "i", "e", "o", "u", "w"];

    // the last index of that name
    const lastIndexOfTheName = name.length - 1;

    // making the last index to lowercase
    const lastChar = name[lastIndexOfTheName].toLowerCase();

    if (lastNameCharacther.includes(lastChar)) {
      return `${name} is a good name `;
    } else {
      return `${name} is a bad name `;
    }
  }
  return "This input is invalid, Please put a string!";
}

console.log(checkName(12));
