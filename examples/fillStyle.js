const Canvas = new CanvasHook();

Canvas.on('strokeText', text => {
    text.element.strokeStyle = '#FFFFFF'; // turns stuff red
});