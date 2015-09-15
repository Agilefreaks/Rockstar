function propertyRequired(property, model) {
  return _.isString(model.get(property));
}

function getMessage(property) {
  return property + " cannot be empty ";
}

function SimpleValidation(property, model) {
  var isValid = propertyRequired(property, model);
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessage(property)
  }
}
