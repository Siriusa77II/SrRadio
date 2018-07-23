Router.configure({
	layoutTemplate: 'main_layout'
});

Router.route('/', function() {
	this.render('header', {to: 'header'});
	this.render('home');
	this.render('footer', {to: 'footer'});
});

router.route('/wp-admin', function() {
    this.render('wpadmin');
});