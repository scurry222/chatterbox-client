var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (let item of data.results) {
        this.renderMessage(item);
      }
    });
  },

  render: function() {
    // add message view to #chats
    this.initialize();
  },

  renderMessage: function(item) {
    if (item.text) {
      const messageView = new MessageView();
      const $newChat = messageView.render(item.username, item.text);
      this.$chats.append($newChat);
    }
  }
};