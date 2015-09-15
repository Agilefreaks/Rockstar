function RockStarValidation(model) {
  var nameResult = SimpleValidation('name', model);
  var instrumentValidation = _.map(['drum', 'guitar'], function (instrumentName) {
    return _.partial(SimpleValidation, instrumentName);
  });
  var anyOfResult = AnyOfValidation(instrumentValidation, model);
  var validationResults = [nameResult, anyOfResult];
  var isValid = _.all(validationResults, 'isValid');
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessages(validationResults)
  }
}
