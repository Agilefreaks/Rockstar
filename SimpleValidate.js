function propertyRequired(model, property) {
  return _.isString(model.get(property));
}

function getMessage(property) {
  return property + " cannot be empty ";
}

function SimpleValidation(model, property) {
  var isValid = propertyRequired(model, property);
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessage(property)
  }
}

