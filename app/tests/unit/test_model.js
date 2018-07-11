define(['app', 'jquery', 'underscore','bootup'], function(App, $, _,Bootup) {

	describe("Loads Model", function() {
		var contact = new ContactManager.Model.Contact();
		it('should be able to create its application test objects',function() {      
		      expect(contact).toBeDefined();
		      expect(Bootup.MOCK_GET_DATA).toBeDefined();
		});
		it('should return the name', function() {
		    expect(contact.getName()).toEqual('Basic Drip');
		});

	});

    	describe('when it fetches', function() {
	   var contact = new ContactManager.Model.Contact();
	 
	   beforeEach(function() {
	      spyOn($, 'ajax').andCallFake(function(options) {
		 options.success(MOCK_GET_DATA);
	      });
	      contact.fetch();
	   });
	 
	   afterEach(function() {
	      contact = undefined;
	   });
	});
	it('should be able to parse mocked service response', function() {
	   expect(_.isEmpty(contact.attributes)).toEqual(false);
	   expect(contact.get('firstName')).toEqual('sampada');
	   expect(contact.get('lastName')).toEqual('jain');
	   expect(contact.get('email')).toEqual('sampadajain@sbc.com');
	   expect(contact.get('phone')).toEqual('9800000000');
	   expect(contact.get('status')).toEqual('active');
	});

});
