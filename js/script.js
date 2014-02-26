this["hbs"] = this["hbs"] || {};

this["hbs"]["album"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.songs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.album)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li>\n				<a href=\"#\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.album)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n				<a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n			</li>\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li class=\"no-image\">\n				<a href=\"#\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<img src=\"../img/placeholder.jpg\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n				<a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n			</li>\n		";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n		<p>You don't appear to have any songs for this album. Please make sure that they exist and that they're in one of the correct file formats. Currently AltoStratus supports .mp3 and .m4a formats - if your music is in a different format, you could try converting it using a service such as <a href=\"http://media.io\">media.io</a>.</p>\n	";
  }

  stack1 = self.invokePartial(partials.nav, 'nav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<a href=\"#\" class=\"play-album\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " | "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.artist)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<h3>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.artist)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n<ul class=\"items songs\">\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.songs), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });

this["hbs"]["auth"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container auth\">\n	<figure class=\"logo\"></figure>\n	<h1 class=\"welcome\">Welcome to AltoStratus!</h1>\n	<p>AltoStratus allows you to store your music library in the cloud with Dropbox and then stream your tune from anywhere. To get started, sign in to your Dropbox using the button below...</p>\n	<button class=\"sign-in\">sign in to dropbox</button>\n</div>";
  });

this["hbs"]["browse"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li>\n					<a href=\"#play\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n					<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n					<a class=\"title\" href=\"#play\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n					<a class=\"add-to-q\" href=\"#addToQueue\">+</a>\n				</li>\n			";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li class=\"no-image\">\n					<a href=\"#play\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n					<img src=\"../img/placeholder.jpg\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n					<a class=\"title\" href=\"#play\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n					<a class=\"add-to-q\" href=\"#addToQueue\">+</a>\n				</li>\n			";
  return buffer;
  }

  stack1 = self.invokePartial(partials.nav, 'nav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"browse\">\n	<h1>Browse "
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n	<ul class=\"items "
    + escapeExpression(((stack1 = ((stack1 = depth0.defaults),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " cf\">\n		";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</ul>\n</div>";
  return buffer;
  });

this["hbs"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.nav, 'nav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"container home\">\n	<h1>Hi ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<p>You have no recently played items. Why don't you browse your collection and find something you fancy...?</p>\n</div>";
  return buffer;
  });

this["hbs"]["nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav>\r\n	<ul class=\"nav\">\r\n		<li><a class=\"nav-home\" href=\"#home\"><img src=\"img/logo-blue.png\"></a></li>\r\n		<li><a href=\"#albums\">Albums</a></li>\r\n		<li><a href=\"#artists\">Artists</a></li>\r\n		<li><a href=\"#songs\">Songs</a></li>\r\n		<li><a href=\"#playlists\">Playlists</a></li>\r\n		<li><input type=\"search\" placeholder=\"Search Music\"></li>\r\n	</ul>\r\n</nav>";
  });

this["hbs"]["player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"progress-bar\"><span class=\"progress\"></span></div>\n<div class=\"now-playing\">\n	<p>Now playing:</p>\n	<img src=\"\" alt=\"\">\n	<div class=\"song-info\">\n		<p class=\"title\"></p>\n		<p class=\"small\"></p>\n	</div>\n</div>\n<div class=\"controls\">\n	<a class=\"prev\" href=\"#prev\">prev</a>\n	<a class=\"play-pause\" href=\"#play\">play/pause</a>\n	<a class=\"next\" href=\"#next\">next</a>\n</div>\n<a href=\"#queue\" class=\"queue\">Q</a>";
  });

this["hbs"]["queue"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.album)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li>\r\n				<a href=\"#\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.album)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\r\n				<a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n			</li>\r\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li class=\"no-image\">\r\n				<a href=\"#\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<img src=\"../img/placeholder.jpg\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\r\n				<a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n			</li>\r\n		";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n		<p>Your queue is empty. Browse your collection and add some songs!</p>\r\n	";
  }

  stack1 = self.invokePartial(partials.nav, 'nav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<ul class=\"items songs\">\r\n	";
  stack1 = helpers['if'].call(depth0, depth0.models, {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  }); // init DropBox client
var client = new Dropbox.Client({
	key: '1romdf0cxmsh3t0'
});

// method for removing views and unbinding their events. should prevent memory loss
Backbone.View.prototype.close = function(){
	this.remove();
	this.unbind();
};

// init some elements/variables
var $mainContainer = $('#main'),
	player,
	$player,
	duration,
	errorTime,
	currentTime,
	preloaded = false,
	$playerText; 
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
		console.log(queue);
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
// register handlebars partials
Handlebars.registerPartial('nav', hbs.nav);

// helper functions
// send fetched url to the player
var sendUrlToPlayer = function(song, player) {
	//console.log('sendUrlToPlayer');
	var url = song.attributes.path;
	client.makeUrl(url, {download : true}, function(error, result) {
		if(error) {
			return showError(error);
		}
		$('audio.'+player).attr('src', result.url);
		if(player === 'current') {
			$('audio.current')[0].load();
		}
	});
};

//error handling - taken from Dropbox.js docs. Needs completion
var showError = function(error) {
	switch (error.status) {
	case Dropbox.ApiError.INVALID_TOKEN:
		console.log('invalid token');
		// If you're using dropbox.js, the only cause behind this error is that
		// the user token expired.
		// Get the user through the authentication flow again.
		break;

	case Dropbox.ApiError.NOT_FOUND:
		console.log('not found');
		// The file or folder you tried to access is not in the user's Dropbox.
		// Handling this error is specific to your application.
		break;

	case Dropbox.ApiError.OVER_QUOTA:
		console.log('over quota');
		// The user is over their Dropbox quota.
		// Tell them their Dropbox is full. Refreshing the page won't help.
		break;

	case Dropbox.ApiError.RATE_LIMITED:
		console.log('rate limited');
		// Too many API requests. Tell the user to try again later.
		// Long-term, optimize your code to use fewer API calls.
		break;

	case Dropbox.ApiError.NETWORK_ERROR:
		console.log('network error');
		// An error occurred at the XMLHttpRequest layer.
		// Most likely, the user's network connection is down.
		// API calls will not succeed until the user gets back online.
		break;

	case Dropbox.ApiError.INVALID_PARAM:
	case Dropbox.ApiError.OAUTH_ERROR:
	case Dropbox.ApiError.INVALID_METHOD:
		console.log(error);
		break;
	default:
		console.log('i broke something');
		// Caused by a bug in dropbox.js, in your application, or in Dropbox.
		// Tell the user an error occurred, ask them to refresh the page.
	}
};

var byId = function(collection, id) {
	var item;
	$.each(collection.models, function() {
		if (this.cid == id) {
			item = this;
		}
	});
	return item;
};

var setCollection = function(type){
	switch (type) {
		case 'song' : return songs;
		case 'album' : return albums;
		case 'artist' : return artists;
		
	}
};

//determines which items need to be passed to the queue for immediate play
var playItem = function(el){
	var $this = el,
		id,
		item,
		collection,
		type;
	if($this.data('id')) {
		id = $this.data('id');
		type = $this.data('type');
	} else {
		id = $this.find('a').data('id');
		type = $this.find('a').data('type');
	}
	collection = setCollection(type);
	item = byId(collection, id);
	if(collection == songs) {
		queue.playItem(item);
	} else {
		queue.playItem(item.attributes.songs);
	}
};

//determines which items need to be passed to the queue for play once the existing queue has been played through
var addToQueue = function(el){
	var $this = el,
		id,
		item,
		collection,
		type;
	if($this.data('id')) {
		id = $this.data('id');
		type = $this.data('type');
	} else {
		id = $this.find('a').data('id');
		type = $this.find('a').data('type');
	}
	collection = setCollection(type);
	item = byId(collection, id);
	if(collection == songs) {
		queue.addItemToQueue(item);
	} else {
		queue.addItemToQueue(item.attributes.songs);
	}
}; 
// set up AuthView
var AuthView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	events: {
		'click button.sign-in' : 'signIn'
	},
	tmpl: hbs.auth,
	signIn: function() {
		//User authentication
		client.authDriver(new Dropbox.AuthDriver.Popup({
			rememberUser: false,
			receiverUrl: 'http://localhost:8080/receiver.html'
		}));
		client.authenticate(function(error, data){
			if(error) {
				console.log(error);
				return showError(error); // this function is incomplete. It's in the helpers.js file
			}
			client.getAccountInfo(function(error, accountInfo) {
				if (error) {
					console.log(error);
					return showError(error);
				}
				user.set({
					name: accountInfo.name,
					email: accountInfo.email
				});
				loadLibrary();
				router.navigate('home', {trigger:true});
				var playerView = new PlayerView();
				playerView.render();
			});
			return this;
		});
	},
	render: function() {
		this.$el.html(this.tmpl());
	}
});

// set up PlayerView
var PlayerView = Backbone.View.extend({
	el: '#player',
	tmpl: hbs.player,
	collection: queue,
	events: {
		'click .play-pause': 'playPause',
		'click .next': 'changeSong'
	},
	initialize: function() {
		player = this;
		this.listenTo(queue, 'reset', this.play);
		this.listenTo(queue, 'add', this.play);
	},
	render: function() {
		var self = this,
			$progress = this.$el.find('.progress');
		this.$el.html(this.tmpl(queue));
		$player = $('#player');
		$playerText = this.$el.find('p.title');
		$audio = $('audio');
		// Due to lack of event delegation on audio elements, audio events need to be bound using jQuery on the actual elements. Boring and very frustrating.
		$audio.on('ended', this.changeSong);
		$audio.on('canplay', function(){
			if(errorTime > 0) {
				this.currentTime = errorTime;
				errorTime = 0;
			}
		});
		$audio.on('error', function(){
			if(this.error.code == 2) {
				errorTime = this.currentTime;
				this.load();
				this.play();	
			}
		});
		$audio.on('timeupdate', function(){
			currentTime = parseInt($('audio.current')[0].currentTime, 10);
			if (currentTime === duration -10 && preloaded === false) {
				$('audio.hidden')[0].load();
				preloaded = true;
			}
		});
		$('audio.current').on('canplaythrough', function(){
			if(queue.models[0].current) {
				var song = queue.models[0];
				duration = parseInt($('audio.current')[0].duration, 10);
				$('audio.current')[0].play();
				self.updateUI('newSong', song);
			}
		});
	},
	changeSong: function(evt) {
		evt.preventDefault();

		var song;
		var index;
		if (queue.nextLoaded) {
			//console.log('changeSong queue.nextLoaded');
			$.each(queue.models, function(){
				if(this.next){
					index = $.inArray(this, queue.models);
					song = this;
					this.next = false;
					this.current = true;
				} if (this.current) {
					this.current = false;
				} 
			});			
			$('audio').each(function(){
				var $this = $(this);
				if($this.hasClass('hidden')) {
					$this.removeClass('hidden').addClass('current');
				} else if ($this.hasClass('current')) {
					$this.removeClass('current').addClass('hidden');
					$this.off('canplaythrough');
				}
			});	
			if(queue.models[index+1]) {
				var nextSong = queue.models[index+1];
				nextSong.next = true;
				queue.loadToPlayer(nextSong);
				preloaded = false;
			}	
		}
		
			//console.log(song);
			//console.log('changeSong if(song)');
			if($('audio.current').readystate >= 3) {
				$('audio.hidden')[0].pause();
				$('audio.current')[0].play();
			} else {
				$('audio.current')[0].load();
				$('audio.current').on('canplay', function() {
					duration = parseInt($('audio.current')[0].duration, 10);
					player.updateUI('newSong', song);
					$('audio.hidden')[0].pause();
					$('audio.current')[0].play();
				});
			}	
		
	},
	play: function() {
		var song,
			next,
			current;
		$.each(queue.models, function(){
			if (this.current){
				current = this;
			} else if (this.next) {
				next = this;
			}
		});
		if(!next) { //this needs to be changed. if you add a new song to the queue while on the last track there will be no next so the queue will revert to the beginning
			if (!current) {
				song = queue.models[0];
				song.current = true;
				current = song;
				queue.loadToPlayer(song);
			}
			if (queue.length > 1) {
				var index = $.inArray(current, queue.models);
				var nextSong = queue.models[index+1];
				nextSong.next = true;
				queue.loadToPlayer(nextSong);
			}
		}
		else {
			return false;
		}
	},
	playPause: function(evt) {
		evt.preventDefault();
		var el = $('audio.current')[0];
		console.log(el);
		if(el.paused) {
			el.play();
			this.updateUI('resume');
		} else {
			el.pause(); 
			this.updateUI('paused');
		}
	},
	updateUI: function(state, song) {
		var remainingTime = duration - currentTime;
			$progress = this.$el.find('.progress');
		switch(state) {
			case 'newSong':
				$progress.stop();
				$progress.css('width', '0');
				$progress.animate({
					width:'100%'
				}, duration*1000, 'linear');
				if(song) {
					$playerText.html(song.attributes.name);
				}
				break; 
			case 'paused':
				$progress.stop();
				break;
			case 'resume':
				$progress.animate({
					width:'100%'
				}, remainingTime*1000, 'linear');
				break; 
		}
	}
});

// NOTE! In the interests of DRY, I've created generic 'playItem' and 'addToQueue' functions. They're in the helpers.js file along with some other handy bits and bobs

// set up HomeView
var HomeView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.home,
	initialize: function() {
		//console.log('homeView init');
	},
	render: function() {
		this.$el.html(this.tmpl(user.attributes));
		//this.lastPlayed();
		return this;
	},
	lastPlayed: function() {
		//retrieve last played song and load to player
		//var url = '/Music/Faithless/Forever Faithless - The Greatest Hits/13 Fatty Boo.m4a'; //this will need to be dynamic. Cookies? Or app data?
		//sendUrlToPlayer(url);		
	},
	recentlyPlayed: function() {
		//retrieve recently played songs and display in template. 
		//will prob need to be a different template/view as it will have a different data context
	}
});

// set up BrowseView
var BrowseView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.browse,
	events: {
		'click ul.items li': 'onClick',
		'click a.add-to-q': 'addToQueue'
	},
	render: function(collection) {
		if (collection == songs) {
			$.each(collection.models, function(){
				if(this.attributes.album.attributes.images) {
					var image = this.attributes.album.attributes.images[0];
					this.set({images: [image]});
				} else {
					this.set({images: []});
				}
				
			});
		}
		this.$el.html(this.tmpl(collection));
	},
	onClick: function(evt) {
		evt.preventDefault();
		var $this = $(evt.currentTarget),
			id = $this.find('a').data('id'),
			type = $this.find('a').data('type');
		
		if (type === 'song') {
			var song = byId(songs, id);
			queue.add(song);
		} else if (type === 'album') {
			router.navigate('albums/'+id, {trigger:true});				
		}
	},
	addToQueue: function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		var $this = $(evt.currentTarget).parents('li').find('[data-id]');
		addToQueue($this);
	}
});

// set up AlbumView
var AlbumView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.album,
	events: {
		'click ul.songs li': 'playItem',
		'click a.play-album': 'playItem',
		'click a.add-to-q': 'addToQueue'
	},
	render: function(collection) {
		this.$el.html(this.tmpl(collection));
	},
	playItem: function(evt){
		evt.preventDefault();
		var $this = $(evt.currentTarget);
		playItem($this); //generic playItem helper function
	},
	addToQueue: function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		var $this = $(evt.currentTarget).parents('li').find('[data-id]');
		addToQueue($this); // generic addToQueue function
	}
});

// set up QueueView
var QueueView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.queue,
	render: function() {
		this.$el.html(this.tmpl(queue));
	}
});

/*// set up ArtistView
var ArtistView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.artist,
	initialize: function() {
		//console.log(this);
	},
	render: function() {
		$mainContainer.html(this.tmpl());
	}
});

// set up PlaylistView
var PlaylistView = Backbone.View.extend({
	tagName: 'section',
	className: 'page-content',
	tmpl: hbs.playlist,
	render: function() {
		$mainContainer.html(this.tmpl());
	}
});*/

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