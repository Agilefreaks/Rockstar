function nameRequired(options) {
  return _.isString(options.name);
}

function instrumentRequired(options) {
  return _.isString(options.guitar) || _.isString(options.drums);
}

function getNameMessage(options) {
  return nameRequired(options)
    ? ""
    : "Name cannot be empty ";
}

function getInstrumentMessage(options) {
  return instrumentRequired(options)
    ? ""
    : "A true Rockstar must at least have an instrument";
}

function getMessage(options) {
  return getNameMessage(options).concat(getInstrumentMessage(options));
}

function isValid(options) {
  return nameRequired(options) && instrumentRequired(options);
}

function Validate(options) {
  return {
    isValid: isValid(options),
    message: getMessage(options)
  }
}

