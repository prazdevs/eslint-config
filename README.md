<p align="center">
  <img alt="" src="https://i.imgur.com/AbOtm3T.png">
</p>

<h1 align="center">eslint-config</h1>
<p align="center">A (very) opinionated ESLint config for JS, TS, Vue, Cypress and A11y with Prettier formatting.</p>


<p align="center">
  <img src="https://img.shields.io/github/package-json/v/prazdevs/eslint-config?style=flat" />
  <img src="https://img.shields.io/badge/formatted%20with-prettier-F7B93E" />
  <img src="https://img.shields.io/badge/linted%20with-ESLint-4B32C3" />
  <img src="https://img.shields.io/github/license/prazdevs/use-persistent-stopwatch?style=flat" />
</p>

## ✨ Features

- Supports linting and formatting of multiple files (`js`, `ts`, `vue`, `json`, `yaml`).
- Strong and consistent rules to prevent errors and not bother with style questions.

## 🧱 Prerequisites

- This config is made primarily to be used with Vue and TypeScript, so you will need `typescript` installed as a dependency for the config to load properly.

## ⚙️ Installing

For Yarn users:
```sh
yarn add -D eslint prettier @prazdevs/eslint-config
```
For Npm users:
```sh
npm i -D eslint prettier @prazdevs/eslint-config
```

## 🚀 Usage

Add the following to your `.eslintrc` file:
```json
{
  "extends": "@prazdevs"
}
```
If you are a VSCode user, I recommend adding the following to your `settings.json` (workspace settings might be more suitable):
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    "eslint.validate": [
    "json",
    "yaml"
  ],
}
```
With the [Prettier ESLint extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint), your files should be properly linted and you should get wanings/errors. Saving will also apply formatting and linting auto-fixes through ESLint's `--fix`.


## 🔨 Additional configs and rules

Not interested in Prettier formatting? Not using Vue? This config is based on other configs in a chained way (think of matryoshkas). You will find documentation on rules and plugins on each config's repo.

- [@prazdevs/eslint-config](https://github.com/prazdevs/eslint-config/tree/main/packages/global) : Prettier formatting  
_(extends)_
- [@prazdevs/eslint-config-vue](https://github.com/prazdevs/eslint-config/tree/main/packages/vue) : Vue, Cypress  
_(extends)_
- [@prazdevs/eslint-config-typescript](https://github.com/prazdevs/eslint-config/tree/main/packages/typescript) : TypeScript  
_(extends)_
- [@prazdevs/eslint-config-javascript](https://github.com/prazdevs/eslint-config/tree/main/packages/javascript) : JavaScript, JSON, YAML

## 👤 About the author

Feel free to contact me:

- <a href="https://twitter.com/prazdevs"><img src="https://img.shields.io/twitter/follow/prazdevs?style=social" /><a/>
- <img src="https://img.shields.io/badge/Discord-PraZ%234184-darkgrey?labelColor=7289DA&logo=discord&logoColor=white&style=flat" />

## 📝 Licence

Copyright © 2021 [Sacha Bouillez](https://github.com/prazdevs).<br />
This project is under [MIT](https://github.com/prazdevs/eslint-config/blob/main/LICENCE) license.
