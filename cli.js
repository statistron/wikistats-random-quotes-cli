#!/usr/bin/env node
'use strict';

import meow from 'meow';
import chalk from 'chalk';
import updateNotifier from 'update-notifier';


import { readFile } from 'fs/promises';
const pkg = JSON.parse(
  await readFile(
    new URL('./package.json', import.meta.url)
  )
);



import quote from  './index.cjs';

const cli = meow(`
    Usage
        $ wikistats [options]

    Options
        --number   Set number of quotes returned (default: 5)

    Examples
        $ wikistats
        I'm not in the meth business. I'm in the empire business. - Walter White

        $ wikistats --number 1


    `, {
        flag: {
            number: {
                type: 'string',
                default: '1'
            }
        }
    }
);

updateNotifier({ pkg: pkg }).notify();

quote({ input: cli.input[0], flags: cli.flags })
    .then(result => {
        result.forEach(item => {
            console.log(
                  '• '+ chalk.white(item.quote) + chalk.dim.white(' - ' + item.source) +'\n'
            );
        });
        
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        console.log(chalk.bold.red(err));
        process.exit(1);
    });