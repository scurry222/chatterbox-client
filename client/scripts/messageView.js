var MessageView = {

  render: function(username, text) {
    return _.template(`
      <div class="chat">
        <div class="username">${username.toString()}</div>
        <div>${text.toString()}</div>
      </div>
    `);
  }
};


