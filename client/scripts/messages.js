var Messages = {
  // store users data structure
  // add message associated with user
  _storage: {},

  persist: function(results) {
    for (item of results) {
      this._storage[item].objectId = item;
    }
  },
  add: function(message) {

  }
};