"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createObject = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var promises_1 = __importDefault(require("fs/promises"));
var chalk_1 = __importDefault(require("chalk"));
var capitalize = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
function copyTemplateFiles(args, dirs) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, promises_1["default"].readdir(dirs.templateDirectory)
                    .then(function (files) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, files_1, file;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _i = 0, files_1 = files;
                                _a.label = 1;
                            case 1:
                                if (!(_i < files_1.length)) return [3 /*break*/, 4];
                                file = files_1[_i];
                                return [4 /*yield*/, handleTemplateFile(file, args, dirs)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function handleTemplateFile(file, args, dirs) {
    return __awaiter(this, void 0, void 0, function () {
        var sourceFile, destFile, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sourceFile = path_1["default"].join(dirs.templateDirectory, file);
                    destFile = path_1["default"].join(dirs.targetDirectory, handleFileName(args, file));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, promises_1["default"].copyFile(sourceFile, destFile)];
                case 2:
                    _a.sent();
                    console.log("%s  %s", chalk_1["default"].green('CREATED'), destFile);
                    return [4 /*yield*/, promises_1["default"].readFile(destFile)
                            .then(function (data) {
                            var newData = data.toString().replace(/<id>/gi, args.id.toString());
                            newData = newData.toString().replace(/<name>/gi, args.name);
                            newData = newData.toString().replace(/<extends>/gi, args["extends"]);
                            promises_1["default"].writeFile(destFile, newData);
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('%s', chalk_1["default"].red.bold(error_1));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleFileName(args, filename) {
    var tempName;
    var tempNameSplit;
    var file;
    tempName = args.name;
    tempNameSplit = tempName.split(' ');
    file = '';
    if (tempNameSplit.length > 1) {
        for (var k = 0; k < tempNameSplit.length; k++) {
            var el = capitalize(tempNameSplit[k]);
            file += el;
        }
    }
    else {
        file = tempName;
    }
    file = file + filename;
    return file;
}
function createObject(args) {
    return __awaiter(this, void 0, void 0, function () {
        var dirs, folder, slashPos, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    folder = '';
                    slashPos = args.name.indexOf('/');
                    if (slashPos > -1) {
                        folder = args.name.substr(0, slashPos);
                        args.name = args.name.substr(slashPos + 1);
                    }
                    dirs = {
                        targetDirectory: path_1["default"].join(process.cwd(), folder),
                        templateDirectory: path_1["default"].join(__dirname, '../templates', args.type.toLowerCase())
                    };
                    fs_extra_1["default"].ensureDir(dirs.targetDirectory, (function (err) { return console.log(err); }));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, promises_1["default"].access(dirs.targetDirectory)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('%s Invalid Template Name', chalk_1["default"].red.bold('ERROR'));
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log('Creating Template Files...');
                    return [4 /*yield*/, copyTemplateFiles(args, dirs)];
                case 5:
                    _a.sent();
                    console.log('%s Object Create.', chalk_1["default"].green.bold('DONE'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.createObject = createObject;
