function AnyOfValidation(model) {
  var drumResult = SimpleValidation(model, 'drums');
  var guitarResult = SimpleValidation(model, 'guitar');
  var validationResults = [drumResult, guitarResult];
  var isValid = _.some(validationResults, 'isValid');
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessages(validationResults)
  }
}
