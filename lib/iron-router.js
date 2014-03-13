var filters = {
    checkIsLoggedIn : function() {
        console.log('before checkIsLoggedIn');
    }
};
Router.before(filters.checkIsLoggedIn);

Router.configure({
    layoutTemplate  : 'MyLayout',
    notFoundTemplate: '404',
    loadingTemplate : 'loading'
});

Router.map(function(){

    // handle /
    this.route('root', {
        path: '/',
        before: [
            function(){
                console.log('before');
            }
        ]
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