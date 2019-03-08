function basicTeenager(age) {
  if(age <= 19 && age >= 13) {
    return "You are a teenager!";
  } else {
    return undefined;
  }
}

function teenager(age) {
  if(age <= 19 && age >= 13) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 20) {
    return "You are a grownup";
  } else if (age <= 12) {
    return "You are a kid";
  }
  return "You are a teenager!";
}

function ternaryTeenager(age) {
  return (age <= 19 && age >= 13) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {

}
