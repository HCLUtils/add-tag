const _ = require('../../utils');

const value = opts => {
  if (!_.isValidString(opts.value)) {
    return 'Value must be supplied.';
  }
  return null;
};

module.exports = value;
