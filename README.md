# PICO-8 Node Builder

A simple PICO-8 build system based on Node.js, allowing the merge of multiple files in one.

## Prerequisites

- Any recent version of [Node.js](https://nodejs.org/en/) (v12+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [PICO-8](https://www.lexaloffle.com/pico-8.php)

## Installation

`npm install`

## Usage

- Place a `.p8` cartridge at the root of the folder. This file will be overwrited when building. This initial cartride is required since header and footer are never changed.
- Put your code in `.lua` files in `src` folder.
- In `src/build.js` edit your cartridge filename and list your project files. They will be concatenated in their order of entry.
- `npm run watch` (or use shortcuts `watch.bat` or `watch.sh`): whenever a source files changes the cartridge is automatically rebuilt.

### Example

- You can check the [helloWorld](https://github.com/doctb/pico8-node-builder/tree/helloWorld) branch.
