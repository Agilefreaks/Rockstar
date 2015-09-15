function propertyRequired(model, property) {
  return _.isString(model.get(property));
}

function getMessage(isValid, property) {
  return isValid
    ? ""
    : property + " cannot be empty";
}

function SimpleValidation(model, property) {
  var isValid = propertyRequired(model, property);
  return {
    isValid: isValid,
    message: getMessage(isValid, property)
  }
}

