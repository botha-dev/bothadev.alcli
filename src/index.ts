#! /usr/bin/env node
import * as yargs from 'yargs';
import { createObject, YargArgs } from './main.js';

function main(argv: string[]) {
    const args = yargs
        .command('new', 'Create new AL Object.', function (yargs) {
            return yargs.options({
                type: {
                    alias: 't',
                    choices: ['table', 'tableextension', 'page', 'cardpage', 'listpage', 'pageextension', 'report', 'codeunit', 'enum'],
                    demandOption: true,
                    description: 'Object Type to create.'
                },
                name: {
                    alias: 'n',
                    demandOption: true,
                    description: 'Object Name to create.',
                    type: 'string'

                },
                id: {
                    alias: 'i',
                    type: 'number',
                    default: 50100,
                    description: 'Object ID to create.'
                },
                extends: {
                    alias: 'e',
                    description: 'Object Name to extend.',
                    type: 'string',
                    default: '""'
                }
            })
                .example('Example: AL new -t table -n testa', 'Creates a new table file from template with a the name testa.table.al.')
        })
        .command('version', 'Execute version actions, like setting new version or incremental versions.', function (yargs) {
            return yargs
                .command("patch", "Updates index four of version number in app.json file.")
                .command("minor", "Updates index three of version number and sets index four to zero.")
                .command("major", "Updates index one of version number and sets all other indexes to zero.")
                .example("Example: AL version patch", 'Updates patch version number of Extension.')
                .demandCommand()
        })
        .demandCommand()
        .usage('Usage: AL <command> [options]')
        .strict()
        .parse(argv.slice(2));

    handleCommands(args);
    //createObject(args);
}

function handleCommands(args: YargArgs) {
    switch (args._[0]) {
        case "new": {
            createObject(args);
            break;
        }
        case "version": {

            break;
        }
    }
}

main(process.argv);