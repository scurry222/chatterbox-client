var Rooms = {
  // store each room in data structure
  // call messages model to add to each room
  storage: [],

  persist(results) {
    for (let item = 0; item < data.results.length; item++) {
      let roomname = data.results[item].roomname;
      if (roomname === null || roomname === undefined || roomname === '') {
        roomname = 'lobby';
      }
      if (!newStorage.includes(roomname)) {
        newStorage.push(roomname);
      }
    }
    this.storage = newStorage;
  }
};
