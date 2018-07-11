ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',	
    avatar: '',
    group: '',  	
    status: 'active'
  },
  
  getRandomAvatar: function(){
      return _.random(1, 10) + '.png';
  },
  setStatus: function(status){
	this.set('status',status);
  }
});
