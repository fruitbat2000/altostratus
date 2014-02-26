
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