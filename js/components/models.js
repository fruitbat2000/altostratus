
// create blank models
var User = Backbone.Model.extend();
var Album = Backbone.Model.extend({
	defaults: {
		type: 'album'
	},
	title: '',
	artist: '',
	songs: [], //array of song objects
	images: [] //array of album images
});
var Artist = Backbone.Model.extend({
	defaults: {
		type: 'artist'
	},	
	name: '',
	albums: [], // array of album objects
	songs: [], //array of song objects
	images: [] //array of album images
});
var Song = Backbone.Model.extend({
	defaults: {
		type: 'song'
	},
	title: '',
	url: '',
	artist: '',
	album: '',
	images: [] //array of album images
});
var Playlist = Backbone.Model.extend({
	defaults: {
		type: 'playlist'
	},
	title: '',
	songs: [] // array of song objects
});

//init user
var user = new User();

var loadLibrary = function() {
	client.stat('/Music', {readDir:true, httpCache:true}, function(error, stat, folderStat) {
		$.each(folderStat, function(){
			var artist = new Artist({
				name: this.name,
				path: this.path
			});
			client.stat(this.path, {readDir:true, httpCache:true}, function(error, stat, folderStat){
				$.each(folderStat, function(){
					// do something clever here to fetch album art from LastFM?
					var album = new Album({
						name: this.name,
						path: this.path,
						artist: artist
					});
					if(artist.attributes.albums) {
						artist.attributes.albums.push(album);
					} else {
						artist.set({albums: [album]});
					}
					client.stat(this.path, {readDir:true, httpCache:true}, function(error, stat, folderStat){
						$.each(folderStat, function(){
							var fileType = this.path;
							fileType = this.path.substring(fileType.length-3);

							if (fileType === 'jpg') {
								var path;
								//send path to api and retrieve dl link
								client.makeUrl(this.path, {downloadHack : true}, function(error, result) {
									if(error) {
										return showError(error);
									}
									path = result.url;

									if(artist.attributes.images) {
										artist.attributes.images.push(path);
									} else {
										artist.set({images: [path]});
									}

									if(album.attributes.images) {
										album.attributes.images.push(path);
									} else {
										album.set({images: [path]});
									}
								});
							}

							if (fileType === 'mp3' || fileType === 'm4a') {
								this.name = this.name.slice(0,-4);
								var song = new Song({
									name: this.name,
									path: this.path,
									artist: artist,
									album: album,
								});
								if(artist.attributes.songs) {
									artist.attributes.songs.push(album);
								} else {
									artist.set({songs: [song]});
								}

								if(album.attributes.songs) {
									album.attributes.songs.push(song);
								} else {
									album.set({songs: [song]});
								}
								songs.add(song);
							}
						});
					});
					albums.add(album);
				});
			});
			artists.add(artist);
		});
		//console.log(artists);
		//console.log(albums);
		//console.log(songs);
	});
};