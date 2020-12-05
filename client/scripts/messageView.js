class MessageView {
  constructor() {}

  render (username, text) {
    return _.template(`
      <div class="chat">
        <div class="username">${username}</div>
        <div>${text}</div>
      </div>
    `);
  }
}

