ContactManager.Views.Contact = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#template_contact').html()),

  events: {
    'click .delete-contact': 'onClickDelete'
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.setStatus('inactive');
    this.model.collection.remove(this.model);
  }
});
