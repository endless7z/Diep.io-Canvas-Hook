class CanvasHook {
  constructor() {
    this.listeners = new Map();
  }

  on(events, callback) {
    if (typeof events === 'string') events = [events];

    const id = + Math.random().toString().slice(2);

    this.listeners.set(id, '7z');

    for (const event of events) 
      this._createProxy(event, data => !this.listeners.get(id) || callback(data));

    return id;
  }

  once(event, callback) {
    const id = + Math.random().toString().slice(2);

    this.listeners.set(id, '7z');

    this._createProxy(event, data => {
      if (this.listeners.get(id)) callback(data);

      this.off(id);
    });
  }

  off(id) {
    if (this.listeners.get(id)) this.listeners.delete(id);
  }

  allOff() {
    if (this.listeners.size) this.listeners.clear();
  }

  _createProxy(type, callback) {
    const prototype = CanvasRenderingContext2D.prototype;

    prototype[type] = new Proxy(prototype[type], {
      apply(target, element, args) {
        callback({ element, arguments: args });

        return target.apply(element, args);
      }
    });
  }
}
