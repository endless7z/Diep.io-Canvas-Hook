const Canvas = new CanvasHook();

Canvas.on(['fillText', 'strokeText'], text => {
    text.element.arguments[0] = 'lol'; // replaces all text with "lol"
});