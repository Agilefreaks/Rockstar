function getMessages(validationResults) {
  return _.chain(validationResults)
    .pluck('message')
    .join(' ')
    .value();
}