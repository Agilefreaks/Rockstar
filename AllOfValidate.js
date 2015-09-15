function AllOfValidation(model) {
  var nameResult = SimpleValidation(model, 'name');
  var anyOfResult = AnyOfValidation(model);
  var validationResults = [nameResult, anyOfResult];
  var isValid = _.all(validationResults, 'isValid');
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessages(validationResults)
  }
}
