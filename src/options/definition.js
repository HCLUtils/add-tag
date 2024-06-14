const os = require('os');
const _  = require('../utils');

module.exports = {

  file     : { type: 'string', isPath: true, name: 'Target HCL file to modify' },
  path     : { type: 'string', isPath: true, name: 'Folder containing HCL files to modify' },
  recursive: { type: 'boolean', default: false, name: 'Should the path be recursed?' },

  node     : { type: 'string', isPath: false, name: 'Fully-qualified name of the node(s) to tag' },
  name     : { type: 'string', isPath: false, name: 'Name of the tag to add' },
  value    : { type: 'string', isPath: false, name: 'String to add as the value' },

  backup   : { type: 'boolean', default: true, name: 'Create a backup file of the original?' },
  console  : { type: 'boolean', default: true, name: 'Should status be sent to the console?' },
};
