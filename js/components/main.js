if(window.location.hash) {
	if (client.isAuthenticated()) {
		window.location.hash = 'home';
	} else {
		window.location.hash = 'auth';
	}
} else {
	window.location.hash = 'auth';
}

function AppView() {
	this.showView = function(view, collection, id) {
		if(this.currentView) {
			this.currentView.close();
		}
		
		this.currentView = view;
		this.currentView.render(collection, id);

		$('#main').html(this.currentView.el);
	};
}

// set up Router
var Router = Backbone.Router.extend({
	initialize: function() {
		this.appView = new AppView();
	},
	routes: {
		'home': 'showHome',
		'auth': 'showAuth',
		'albums': 'showBrowse',
		'albums/:id': 'showAlbum',
		'artists': 'showBrowse',
		'songs': 'showBrowse',
		'playlists': 'showBrowse',
		'queue': 'showQueue'
	},
	showHome: function() {
		var homeView = new HomeView();
		this.appView.showView(homeView);
	},
	showAuth: function() {
		var authView = new AuthView();
		this.appView.showView(authView);
	},
	showBrowse: function() {
		var collection;
		if(window.location.hash == '#albums') {
			collection = albums;
		} else if(window.location.hash == '#artists') {
			collection = artists;
		} else if(window.location.hash == '#songs') {
			collection = songs;
		} else if(window.location.hash == '#playlists') {
			collection = playlists;
		}
		var browseView = new BrowseView();
		this.appView.showView(browseView, collection);
	},
	showAlbum: function(id) {
		var collection = byId(albums, id),
			albumView = new AlbumView();
		this.appView.showView(albumView, collection);
	},
	showQueue: function() {
		var queueView = new QueueView();
		this.appView.showView(queueView);
	}
});

// init app
var router = new Router();
Backbone.history.start();

$(function() {
	// init some elements
	var $mainContainer = $('#main'),
		$player = $('audio');
});