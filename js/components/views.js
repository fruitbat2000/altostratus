
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

