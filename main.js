import { Application, Sprite, Assets } from 'pixi.js';
// import * as PIXI from 'pixi.js';

const app = new Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
const texture = await Assets.load('monkey.png');

// This creates a texture from a 'monkey.png' image
const monkey = new Sprite(texture);

// Setup the position of the monkey
monkey.x = app.renderer.width / 2;
monkey.y = app.renderer.height / 2;

// Rotate around the center
monkey.anchor.x = 0.5;
monkey.anchor.y = 0.5;

// Add the monkey to the scene we are building
app.stage.addChild(monkey);

// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the monkey around a bit
    monkey.rotation += 0.01;
});