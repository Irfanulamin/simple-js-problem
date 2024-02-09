function password(obj) {
  if (Object.keys(obj).length === 3) {
    if (
      typeof obj.birthYear === "number" &&
      obj.birthYear.toString().length === 4
    ) {
      const siteNameCaptialized =
        obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
      const strongPassword =
        siteNameCaptialized + "#" + obj.name + "@" + obj.birthYear;
      return strongPassword;
    } else {
      return "Invalid!, The birthyear should be number and 4 digits";
    }
  } else {
    return "Invalid! , Please put a valid object with the givn object keys";
  }
}

const inputObject = {
  name: "kolimuddin",
  birthYear: 1999,
  siteName: "google",
};
console.log(password(inputObject));
