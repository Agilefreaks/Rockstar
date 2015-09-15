function AnyOfValidation(childRules, model) {
  var validationResults = _.map(childRules, function (rule) {
    return rule(model);
  });
  var isValid = _.some(validationResults, 'isValid');
  return {
    isValid: isValid,
    message: isValid
      ? ""
      : getMessages(validationResults)
  }
}
