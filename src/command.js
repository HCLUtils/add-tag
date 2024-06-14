#!/usr/bin/env node

const _                  = require('./utils');
const options            = require('./options');
const { processOptions } = require('./index');

const { argv } = require('yargs').options(options.formatters.toYargs());

const main = async () => {

  const opts = {};
  Object.keys(argv)
    .filter(_.isAlphanumeric)
    .forEach(key => {
      opts[key] = argv[key];
    });

  if (_.isSet(opts.markdown) || _.isSet(opts.cliMarkdown) || _.isSet(opts.markdownCli)) {
    const lines = options.formatters.toMarkdown(_.isSet(opts.cliMarkdown) || _.isSet(opts.markdownCli));
    lines.forEach(line => {
      console.log(line);
    });
    return;
  }

  const { counts, errors } = await processOptions(opts);

  errors.forEach(err => {
    console.error(`Error: ${err}`);
  });

  if (counts.length === 0) {
    console.info('No results');
    return;
  }

  const exts   = counts.filter(x => (x && x.count)).map(x => (x.ext));
  const length = _.getMax(counts.filter(x => (x && x.count)).map(x => (`${x.count}`.trim().length)));

  exts.sort();

  exts.forEach(ext => {

    const item = counts.find(x => (x && x.ext === ext));
    
    if (opts.count) {

      console.log([
        `${item.count}`.padStart(length, ' '),
        (item.ext.trim() ? item.ext.trim() : '(blank)')
      ].join(' : '));
        
    } else {
      console.log((item.ext.trim() ? item.ext.trim() : '(blank)'));
    }
  });
};

main();

