
# openrct2-mod-template
Template repository for OpenRCT2 mods.

## About
This repository was created to serve as a template mod repository for OpenRCT2.
OpenRCT2 gives you `hot reload` feature ([OpenRCT2 hot reload](https://github.com/OpenRCT2/OpenRCT2/blob/develop/distribution/scripting.md#writing-scripts)). I wanted to leverage that using `nodemon` to start a local server (that's why empty `app.js` in root dir, as an entry point) that will watch your `.ts` files in `src` directory, and everytime you save them, it will convert them to `.js` files and place them in a specified location.

## Usage
- edit `tsconfig.json` - specify `outDir` (preferably set it as your OpenRCT2 `plugin` folder path, as `hot reload` watches exactly that directory)
- edit/create your `.ts` file/-s in `src` - I've included a template file there, though if you want to import OpenRCT2 APIs, you need to replace `<path>` with path to `openrct2.d.ts` in `<reference path="<path>" />`
- run `npm run develop` - it will start a local server that will be watching changes in all of your `.ts` files in `src`
- start OpenRCT2 using `openrct2.com` - it will start along with a console
- start a new park/load your save - mods start/reload only when you have a running park in game
- write your code and save the file/-s
- each time you save, `nodemon` will run `typescript` to compile files to `.js`, and OpenRCT2 `hot reload` feature will reload them in real time

Voila! You can now write your mods in real time, wasting little to no time for building, giving you more time to debug :)
