import {GenericModLoader} from "@ac2pic/modloader";


const Modloader: typeof GenericModLoader = require('@ac2pic/modloader');

const modloader = new Modloader;

modloader.setGamePath(String.raw `C:\Program Files (x86)\Steam\steamapps\common\CrossCode\assets\ `.trim());
modloader.loadMods();
console.log(modloader.getMods());
console.log(modloader.getResourcePath('media/map/collisiontiles-16x16.png'));

// @ts-ignore
console.log(modloader?.modManager.resourceManager.resources);

modloader.clearCache();

// @ts-ignore
console.log(modloader.modManager.resourceManager.resources);