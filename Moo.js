class MooMoo {
  constructor(started) {
    this.socket = {};
    this.started = started;
    this.fetchSocket = function() {
      WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, socket, data) {
          WebSocket.prototype.send = target;
          
          if(!this.socket.length || this.socket.url != socket.url || this.socket.readyState > 1) {
              this.socket = socket;
              console.log('Hooked', this.socket)
          }
          
          Reflect.apply(target, socket, data);
        }
      });
    }
  }
}
