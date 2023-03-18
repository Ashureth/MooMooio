class MooMoo {
  constructor(started) {
    this.started = started;
    this.fetchSocket = function() {
      WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, socket, data) {
          
          console.log(socket)
          
          Reflect.apply(target, socket, data);
        }
      });
    }
  }
}
