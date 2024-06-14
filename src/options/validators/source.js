const _ = require('../../utils');

const source = opts => {

  if (!_.isValidString(opts.file) && !_.isValidString(opts.path)) {
    return 'Either "file" or "path" must be supplied.';
  }
  
  if (_.isValidString(opts.file)) {
    if (_.isValidString(opts.path)) {
      return 'Both "file" and "path" cannot be supplied together.';
    }
    if (!_.isFile(opts.file)) {
      return 'Source file does not exist.';
    }
  }

  if (_.isValidString(opts.path)) {
    if (_.isValidString(opts.file)) {
      return 'Both "file" and "path" cannot be supplied together.';
    }
    if (!_.isFolder(opts.path)) {
      return 'Source folder does not exist.';
    }
    const files = _.getFiles(opts.path).filter(x => x.endsWith('.tf'));
    if (!files.length || files.length === 0) {
      return 'No Terraform files found in source folder.';
    }
  }

  return null;
};

module.exports = source;
