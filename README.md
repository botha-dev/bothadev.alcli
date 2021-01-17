# AL-CLI

A Simple CLI tool to quickly create .al files for Business Central Development. 

## Install

npm install -g @bothadev\al-cli 

Install globally.

## Usage

AL / AL-CLI -t <Type of Object> -n <folder to create in>/<Name of Object> [OPTIONS]

Example:

al -t table -n foo/bar 

Creates a new bar.table.al file in Folder foo. Folder will be created if it does not exist. 

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -t, --type     Object Type to create.
             [required] [choices: "table", "tableextension", "page", "cardpage",
                      "listpage", "pageextension", "report", "codeunit", "enum"]
  -n, --name     Object Name to create.                      [string] [required]
  -i, --id       Object ID to create.                  [number] [default: 50100]
  -e, --extends  Object Name to extend.                 [string] [default: """"]