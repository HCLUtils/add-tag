const _         = require('../../utils');
const fs        = require('fs');
const path      = require('path');

const findFiles = (cache, folder, recursive) => {
  if (!_.isDirectory(folder)) { return; }
  let names = null;
  try {
    names = fs.readdirSync(folder);
  } catch (ex) {
    console.error(`Failure reading path: ${folder}`);
    return false;
  }

  const paths = [].concat(names)
    .filter(_.isValidString)
    .map(name => (path.join(folder, name)));
  
  const folders = paths.filter(_.isDirectory);
  if (recursive) {
    folders.forEach(dirPath => {
      findFiles(cache, dirPath, recursive);
    });
  }

  paths.filter(x => (x && !folders.includes(x))).forEach(x => {
    cache.paths.push(x);
  });
};

const findSourceFiles = opts => {

  const cache = {
    paths : []
  };

  if (_.isValidString(opts.file)) {
    cache.paths.push(opts.file);
    return [];
  }

  findFiles(cache, opts.path, false);
  
  opts._files = cache.paths.filter(_.isValidString);

  return [];
};

module.exports = findSourceFiles;
