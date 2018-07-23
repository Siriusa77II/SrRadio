Route.configure({
    layoutTemplate: 'main_layout'
});

Router.route('/', function() {
    this.route('header', {to: 'header'});
    this.route('home');
    this.route('footer', {to: 'footer'});
});