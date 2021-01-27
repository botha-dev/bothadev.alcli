# AL-CLI

A Simple CLI tool to quickly create .al files for Business Central Development. 

## Install

npm install -g @bothadev\al-cli 

## Usage
### New

index.js new

Create new AL Object.

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -t, --type     Object Type to create.
             [required] [choices: "table", "tableextension", "page", "cardpage",
                      "listpage", "pageextension", "report", "codeunit", "enum"]
  -n, --name     Object Name to create.                      [string] [required]
  -i, --id       Object ID to create.                  [number] [default: 50500]
  -e, --extends  Object Name to extend.                   [string] [default: ""]

Examples:
  Example: AL new -t table -n testa  Creates a new table file from template with
                                     a the name testa.table.al.

### Version
## NOTE 
Still in progress. Working Flow:

Execute version actions, like setting new version or incremental versions.

Commands:
  index.js version patch  Updates index four of version number in app.json file.
  index.js version minor  Updates index three of version number and sets index
                          four to zero.
  index.js version major  Updates index one of version number and sets all other
                          indexes to zero.

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Examples:
  Example: AL version patch  Updates patch version number of Extension.