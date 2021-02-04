import path from "path";
import fsExtra from "fs-extra";
import fsPromise from "fs/promises";
import chalk from "chalk";
import { YargArgs, Directories, IDRange, setIDRange } from "./interfaces";

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

async function copyTemplateFiles(args: YargArgs, dirs: Directories) {
    return fsPromise.readdir(dirs.templateDirectory)
        .then(async (files: string[]) => {
            for (let file of files) {
                await handleTemplateFile(file, args, dirs);
            }
        })
}

async function handleTemplateFile(file: string, args: YargArgs, dirs: Directories) {

    var sourceFile = path.join(dirs.templateDirectory!, file);
    var destFile = path.join(dirs.targetDirectory!, handleFileName(args, file));

    try {

        await fsPromise.copyFile(
            sourceFile,
            destFile,
        );

        console.log("%s  %s", chalk.green('CREATED'), destFile);

        await fsPromise.readFile(destFile)
            .then((data: Buffer) => {
                var newData = data.toString().replace(/<id>/gi, args.id.toString());
                newData = newData.toString().replace(/<name>/gi, args.name);
                newData = newData.toString().replace(/<extends>/gi, args.extends!);
                fsPromise.writeFile(destFile, newData);
            })

    } catch (error) {
        console.error('%s', chalk.red.bold(error));
    }

}

function handleFileName(args: YargArgs, filename: string) {
    let tempName: string;
    let tempNameSplit: string[];
    let file: string;

    tempName = args.name;
    tempNameSplit = tempName.split(' ');
    file = '';

    if (tempNameSplit.length > 1) {
        for (let k = 0; k < tempNameSplit.length; k++) {
            var el = capitalize(tempNameSplit[k]);
            file += el;
        }
    } else {
        file = tempName;
    }
    file = file + filename;
    return file;
}

export async function createObject(args: YargArgs) {
    let dirs: Directories;
    let baseFolder = 'src/';
    let folder = '';
    let slashPos = args.name.indexOf('/');
    if (slashPos > -1) {
        folder += args.name.substr(0, slashPos);
        args.name = args.name.substr(slashPos + 1);
    }

    dirs = {
        targetDirectory: path.join(process.cwd(), baseFolder, folder),
        templateDirectory: path.join(__dirname, '../templates', args.type.toLowerCase())
    };

    fsExtra.ensureDir(path.join(process.cwd(), baseFolder)).then(() => {
        console.log("%s base folder %s found or created.", chalk.cyan('ENSURE-DIR'), baseFolder);
    }).catch((err) => {
        console.error('%s Base Folder %s not in current directory and could not be created. %s', chalk.red.bold('ERROR'), baseFolder, err);
    });

    fsExtra.ensureDir(dirs.targetDirectory).then(() => {
        console.log("%s target folder of %s.", chalk.cyan('ENSURE-DIR'), dirs.targetDirectory);
    }).catch((err) => {
        console.error('%s Base Folder %s not in current directory and could not be created. %s', chalk.red.bold('ERROR'), dirs.targetDirectory, err);
    })

    try {
        console.log(dirs.targetDirectory);
        await fsPromise.access(dirs.targetDirectory);
    } catch (err: any) {
        console.error('%s Invalid Template Name', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    console.log('Creating Template Files...');
    await copyTemplateFiles(args, dirs);

    console.log('%s Object Create Complete.', chalk.green.bold('SUCCESS'));

}

export async function validateCurrWorkingDirectory() {
    const cwd = process.cwd();
    const appJsonFilePath = path.join(cwd, 'app.json');

    try {
        await fsPromise.access(appJsonFilePath);
    } catch (err: any) {
        console.error('%s No app.json file found in working directory.', chalk.red.bold('ERROR'));
        process.exit(0);
    }

    let appJsonBuffer = fsExtra.readFileSync(appJsonFilePath);
    let appJson = JSON.parse(appJsonBuffer.toString());
    let idRange: IDRange = {
        from: appJson['idRanges'][0]['from'],
        to: appJson['idRanges'][0]['to']
    }
    setIDRange(idRange);
}