#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var yargs = __importStar(require("yargs"));
var main_js_1 = require("./main.js");
function main(argv) {
    var args = yargs
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
                "default": 50100,
                description: 'Object ID to create.'
            },
            "extends": {
                alias: 'e',
                description: 'Object Name to extend.',
                type: 'string',
                "default": '""'
            }
        })
            .example('Example: AL new -t table -n testa', 'Creates a new table file from template with a the name testa.table.al.');
    })
        .command('version', 'Execute version actions, like setting new version or incremental versions.', function (yargs) {
        return yargs
            .command("patch", "Updates index four of version number in app.json file.")
            .command("minor", "Updates index three of version number and sets index four to zero.")
            .command("major", "Updates index one of version number and sets all other indexes to zero.")
            .example("Example: AL version patch", 'Updates patch version number of Extension.')
            .demandCommand();
    })
        .demandCommand(1, 1, 'At least one command is expected.', 'Only one command is expected.')
        .usage('Usage: AL <command> [options]')
        .strict()
        .parse(argv.slice(2));
    //createObject(args);
}
function handleCommands(args) {
    switch (args._[0]) {
        case "new": {
            main_js_1.createObject(args);
            break;
        }
        case "version": {
            break;
        }
    }
}
main(process.argv);
