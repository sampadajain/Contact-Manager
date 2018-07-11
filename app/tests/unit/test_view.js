describe('Contact view', function(){

    beforeEach(function() {
        var contact = new ContactManager.Model.Contact(Bootup.MOCKGETDATA);
        this.view = new ContactManager.Views.Contact();
        this.view.model = contact;

    });

    describe("Rendering of Contacts", function() {
        it ("produces the correct HTML", function() {
            this.view.render();
            expect($(".display-name")).toExist();
            expect(this.view.template).toBeDefined();
        });

    });

});

