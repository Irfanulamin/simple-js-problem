function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Your Input is not an array. Please put a valid array";
  }
  let validNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      validNumbers.push(arr[i]);
    }
  }

  return validNumbers;
}

console.log(deleteInvalids(["1", { num: 2 }, NaN]));
