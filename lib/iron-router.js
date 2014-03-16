var filters = {
    checkIsLoggedIn : function() {
        console.log('before checkIsLoggedIn');
    },
    loading: function(pause){
        if (!this.ready()) {
            this.render('loading');
            pause();
        }
    }
};

Router.before(filters.checkIsLoggedIn);
Router.before(filters.loading);

Router.configure({
    layoutTemplate  : 'MyLayout',
    notFoundTemplate: '404',
    loadingTemplate : 'loading'
});

Router.map(function(){

    // handle /
    this.route('root', {
        path: '/',
        yieldTemplates: {
            'footer': {to: 'footer'}
        },
        before: [
            function(){
                console.log('before');
            },
            function(){
                console.log('before 23');
                this.subscribe('waitForever', {
                    onError: function(err){
                        console.log(err);
                    },
                    onReady: function(){
                        console.log('onReady');
                    }
                }).wait();
            }
        ],
        waitOn: function () {
            // NOTE: this.params is available inside the waitOn function.
            return [Meteor.subscribe('waitForever')];
        }
    });

    // handle /page1
    this.route('page1', {
        path: '/page1',
        before: [
            function(){
                console.log('before');
            }
        ]
    });
});