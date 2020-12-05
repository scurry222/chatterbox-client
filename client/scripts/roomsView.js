var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: Rooms,


  initialize() {
    this.rooms.store();
    console.log("hello" + this.rooms.storage);
    console.log("world" + rooms.length);
    for (let roomname = 0; roomname < rooms.length; roomname++) {
      console.log("roomName = ", rooms[roomname]);
      this.renderRoom(rooms[roomname]);
    }
  },

  render(roomName) {
    // change room in #rooms select, call messages render
    // refer to message storage to render
    this.renderRoom(roomName);
  },

  renderRoom(roomName) {
    RoomsView.$select.appendChild(`<option value=${roomName}>${roomName}</option>`);
    console.log(RoomsView.$select);
  }
};
