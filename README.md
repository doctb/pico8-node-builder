# PICO-8 Node Builder

A simple PICO-8 build system, allowing the merge of multiple files in one, based on Node.js.

## Prerequisites

- Any recent version of [Node.js](https://nodejs.org/en/) (v12+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [PICO-8](https://www.lexaloffle.com/pico-8.php)

## Installation

`npm install`

## Usage

- Place a `.p8` cartridge at the root of the folder. This file will be overwrited when building. An initial cartride is necessary since its header and footer are never modified.
- Put your code in `.lua` files in `src` folder.
- List your project file in `src/build.json`. They will be concatenated in this order.
- `npm run watch` (or use shortcuts scripts `watch.bat` or `watch.sh`). Whenever a source files changes, the cartridge is automatically rebuilt.

### Example

- You can check helloWorld branch.