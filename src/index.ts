#! /usr/bin/env node
import * as yargs from 'yargs';
import { createObject } from './main.js';

function main(argv: string[])
{
    const args = yargs.options({
        type: {
            alias: 't',
            choices: ['table','tableextension', 'page','cardpage', 'listpage', 'pageextension', 'report', 'codeunit', 'enum'],
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
        }}).parse(argv);

    createObject(args);
}

main(process.argv);