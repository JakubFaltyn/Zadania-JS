const user = {
  firstname: "Jan",
  lastname: "Kowalski",
  gender: "male",
  age: 17,
};

function getFullName(user) {
  let fullName = user.firstname + " " + user.lastname;
  return fullName;
}

function isMale(user) {
  if (user.gender == "male") return true;
  return false;
}

function isOffAge(user) {
  if (user.age >= 18) return true;
  return false;
}

//console.log(getFullName(user));
console.log(isOffAge(user));
