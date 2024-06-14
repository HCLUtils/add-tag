const _           = require('./utils');
const options     = require('./options');
const processing  = require('./processing');

const processOptions = async (opts) => {

  let errors = [];

  errors = _.isValidArray(errors) ? errors : options.steps.unknowns(opts);
  errors = _.isValidArray(errors) ? errors : options.steps.cleanDirs(opts);
  errors = _.isValidArray(errors) ? errors : options.steps.setDefaults(opts);
  errors = _.isValidArray(errors) ? errors : options.steps.verifyFormats(opts);
  errors = _.isValidArray(errors) ? errors : options.steps.validate(opts);
  errors = _.isValidArray(errors) ? errors : options.steps.findSourceFiles(opts);

  errors = _.isValidArray(errors) ? errors : processing.processFiles(opts);

  errors = _.unique(errors);

  return {
    errors,
    files  : opts._files,
    counts : opts._counts
  };
};

module.exports = {
  processOptions
};
