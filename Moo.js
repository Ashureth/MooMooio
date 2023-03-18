class MooMoo {
  constructor(started) {
    this.socket = {};
    this.started = started;
    this.fetchSocket = function() {
      WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, socket, data) {
          WebSocket.prototype.send = target;
          console.log(socket, this.socket)
          
          Reflect.apply(target, socket, data);
        }
      });
    }
  }
}
