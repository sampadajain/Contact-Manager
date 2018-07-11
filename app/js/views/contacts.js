ContactManager.Views.Contacts = Backbone.View.extend({
  template: _.template($('#template_contacts').html()),

  renderSingle: function(contact) {
    var itemView = new ContactManager.Views.Contact({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderSingle, this);

    return this;
  }
});
