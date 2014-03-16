Meteor.publish("waitForever", function(){
    var userId = this.userId;
    //this.error(new Meteor.Error('just error'));
    var self = this;
    Meteor.setTimeout(function(){
    	self.ready();
    }, 5000);
});