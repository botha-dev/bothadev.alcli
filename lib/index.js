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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var yargs = __importStar(require("yargs"));
var interfaces_js_1 = require("./interfaces.js");
var main_js_1 = require("./main.js");
function main(argv) {
    return __awaiter(this, void 0, void 0, function () {
        var idRange, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    idRange = interfaces_js_1.getIDRange();
                    return [4 /*yield*/, main_js_1.validateCurrWorkingDirectory()];
                case 1:
                    _a.sent();
                    idRange = interfaces_js_1.getIDRange();
                    args = yargs
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
                                "default": idRange.from,
                                description: 'Object ID to create.'
                            },
                            "extends": {
                                alias: 'e',
                                description: 'Object Name to extend.',
                                type: 'string',
                                "default": ''
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
                        .demandCommand()
                        .usage('Usage: AL <command> [options]')
                        .strict()
                        .parse(argv.slice(2));
                    handleCommands(args);
                    return [2 /*return*/];
            }
        });
    });
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
