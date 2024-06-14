const _ = require('../../utils');

const limit = opts => {
  if (!_.isDefined(opts.limit)) {
    return null;
  }
  if (_.isNumber(opts.limit) && !_.isDigits(`${opts.limit}`)) {
    return 'If supplied, limit must be a positive integer.';
  }
  if (_.isValidString(opts.limit) && !_.isDigits(opts.limit)) {
    return 'If supplied, limit must be a positive integer.';
  }
  return null;
};

module.exports = limit;
