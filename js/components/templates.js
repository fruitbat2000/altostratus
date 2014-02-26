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
  });