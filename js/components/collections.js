
// create blank collections
var Albums = Backbone.Collection.extend({
	defaults: {
		model: Album,
		collectionId: 'albums'
	}
});
var Artists = Backbone.Collection.extend({
	defaults: {
		model: Artist,
		collectionId: 'artists'
	}
});
var Songs = Backbone.Collection.extend({
	defaults: {
		model: Song,
		collectionId: 'songs'
	}
});
var Queue = Backbone.Collection.extend({
	defaults:{
		model: Song,
		collectionId: 'queue'
	},
	loadToPlayer: function(song) {
		//console.log('loadToPlayer');
		if(song.current) {
			sendUrlToPlayer(song, 'current');
		} else if(song.next) {
			this.nextLoaded = false;
			sendUrlToPlayer(song, 'hidden');
			this.nextLoaded = true;
		}
	},
	playItem: function(items) {
		this.reset(items);
		//console.log(queue);
	},
	addItemToQueue: function(items){
		this.add(items);
		//console.log(queue);
	}
});
var Playlists = Backbone.Collection.extend({
	defaults: {
		model: Playlist,
		collectionId: 'playlists'
	}
});

var artists = new Artists();
var albums = new Albums();
var songs = new Songs();
var playlists = new Playlists();
var queue = new Queue();