window.URL = window.URL || window.webkitURL,
ContactManager.Views.ContactForm = Backbone.View.extend({
  template: _.template($('#template_new_contact').html()), 	
  events: {
    'submit': 'onFormSubmit',
    'change #imageUpload': 'handleFileSelect'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },
  getFileName: function(){
	var filePath = this.$('.fileinput input').val(),
	    filePathArr = filePath && filePath.split('/'),
	    fileName = filePathArr[(filePathArr.length)-1] || this.model.get('avatar') || this.model.getRandomAvatar(this);
	return fileName;
  },
  onFormSubmit: function(e) {
    e.preventDefault();
    var avatar = this.getFileName(),
	form = $(this).closest('form');
       this.trigger('form:submitted', {
	      firstName: this.$('.contact-fname-input').val(),
	      lastName: this.$('.contact-lname-input').val(),
	      email: this.$('.contact-email-input').val(),
	      phone: this.$('.contact-tel-input').val(),
	      avatar: avatar,
	      group: this.$('.contact-group-select').val(),
	      status: 'active'
	});
    
  },

  handleFileSelect: function(e){				
	var files = e.target.files,
	    file = files[0],
	    img = this.$('.fileinput-new img')[0];
	img.height = 60;
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        }
        img.src = window.URL.createObjectURL(file);
  }	

});
