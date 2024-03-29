# Diep.io Canvas Hook
Used to edit the canvas in [diep.io](https;//diep.io). You can use it in your tampermonkey script like so:
```js
// @require https://raw.githubusercontent.com/endless7z/Diep.io-Canvas-Hook/main/canvas-hook.js
```
## Events
A list of events to listen for can be acquired using this code snippet:
```js
Object.keys(CanvasRenderingContext2D.prototype);
```
Then,
```js
const Canvas = new CanvasHook();

Canvas.on(YOUR_EVENT, event => {
    ...
});
```
## Examples
Replace all text with "lol"
```js
const Canvas = new CanvasHook();

Canvas.on(['fillText', 'strokeText'], text => {
    text.arguments[0] = 'lol'; // replaces all text with "lol"
});
```
![lol](./images/lol.png)
---
Change the stroke color of everything to red
```js
const Canvas = new CanvasHook();

Canvas.on('stroke', text => {
    text.element.strokeStyle = '#FF0000'; // turns stuff red
});
```
![stroke](./images/stroke.png)
