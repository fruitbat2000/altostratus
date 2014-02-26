// init DropBox client
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