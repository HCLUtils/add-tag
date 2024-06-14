const _ = require('../../utils');

const name = opts => {
  if (!_.isValidString(opts.name)) {
    return 'Tag name must be supplied.';
  }
  if (!!_.isAlphanumeric(opts.name) || !_.isAlpha(opts.name[0])) {
    return 'Tag name is not valid.';
  }
  return null;
};

module.exports = name;
