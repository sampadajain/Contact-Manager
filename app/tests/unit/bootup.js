define([
    'app', 'jquery', 'underscore'
], function(
    App, $, _,
) {

    var Bootup = function(){},
	MOCK_GET_DATA = {
            firstName: 'sampada',
            lastName: 'jain',
            email: 'sampadajain@sbc.com',
            phone: '9800000000',	
            avatar: '',
            status: 'active'
        }
    Bootup.prototype.setData = function(data) {
        this.data = data;
    };
    return new Bootup();
 });   
