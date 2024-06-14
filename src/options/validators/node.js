const _ = require('../../utils');

const node = opts => {
  if (!_.isValidString(opts.node)) {
    return 'Node name must be supplied.';
  }
  if (opts.name.trim() !== opts.name) {
    return 'Tag name cannot start or end with whitespace.';
  }

  let parts = opts.node.split(' ');
  if (parts.length > 1) {
    return 'Node name cannot contain whitespace.';
  }
  if (opts.node[0] === '.' || opts.node[opts.node.length - 1] === '.') {
    return 'Node name cannot begin or end with a period.';
  }
  
  parts = opts.node.split('.');
  if (parts.length > 3) {
    return 'Node name cannot contain more than three segments.';
  }
  if (opts.node.indexOf('*') !== -1 && opts.node.indexOf('*') !== opts.node.length - 1) {
    return 'Wildcard character must be the last character.';
  }
  if (opts.node.indexOf('*') !== -1 && parts.length < 2) {
    return 'Wildcard character must be used with at least two segments.';
  }
  const invalid = parts.find(x => (x && !_.isAlphaNumeric(x) && !_.isAlpha(x[0])));
  if (invalid) {
    return 'Node name is not valid.';
  }
  return null;
};

module.exports = node;
