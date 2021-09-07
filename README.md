# Diep.io Canvas Hook
Used to edit the canvas in [diep.io](https;//diep.io)
## Examples
Replace all text with "lol"
```js
const Canvas = new CanvasHook();

Canvas.on(['fillText', 'strokeText'], text => {
    text.arguments[0] = 'lol'; // replaces all text with "lol"
});
```
---
Change the stroke color of everything to red
```js
const Canvas = new CanvasHook();

Canvas.on('strokeText', text => {
    text.element.strokeStyle = '#FFFFFF'; // turns stuff red
});
```