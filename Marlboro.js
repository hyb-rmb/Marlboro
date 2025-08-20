(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cta01 = function() {
	this.initialize(img.cta01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,24);


(lib.cta02 = function() {
	this.initialize(img.cta02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,22);


(lib.cta03 = function() {
	this.initialize(img.cta03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,23);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,33);


(lib.Image01 = function() {
	this.initialize(img.Image01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,391);


(lib.image02 = function() {
	this.initialize(img.image02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.image03 = function() {
	this.initialize(img.image03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,386);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,36);


(lib.Temukan = function() {
	this.initialize(img.Temukan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,35);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,95);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,98);


(lib.txt03 = function() {
	this.initialize(img.txt03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,68);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt03_1, new cjs.Rectangle(0,0,224,68), null);


(lib.txt02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt02_1, new cjs.Rectangle(0,0,187,98), null);


(lib.txt01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt01_1, new cjs.Rectangle(0,0,198,95), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.loc_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.loc_name = new cjs.Text("SPORTS STATION\nLIPPO MALL PURI", "bold 48px 'Roboto'", "#FFFFFF");
	this.loc_name.name = "loc_name";
	this.loc_name.lineHeight = 52;
	this.loc_name.lineWidth = 490;
	this.loc_name.parent = this;
	this.loc_name.setTransform(-105,-24.65,0.4284,0.4284);

	this.timeline.addTween(cjs.Tween.get(this.loc_name).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loc_btn, new cjs.Rectangle(-105.8,-25.5,211.7,51), null);


(lib.img_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_03, new cjs.Rectangle(0,0,320,386), null);


(lib.img_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_02, new cjs.Rectangle(0,0,320,480), null);


(lib.img_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_01, new cjs.Rectangle(0,0,320,391), null);


(lib.cta3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta3, new cjs.Rectangle(0,0,101,23), null);


(lib.cta02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta02_1, new cjs.Rectangle(0,0,104,22), null);


(lib.cta1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta1, new cjs.Rectangle(0,0,108,24), null);


(lib.loc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhKBUQgrhMgBgyQABgxAigjQAjgjAwAAQAxAAAiAjQAjAjAAAxQAAAygqBMQgtBNgfAAQgfAAgrhNgAg4hnQgYAXAAAiQAAAhAYAXQAXAYAhAAQAhAAAYgYQAYgXAAghQAAgigYgXQgYgYghAAQghAAgXAYg");
	this.shape.setTransform(-111.9,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.7,-24.4,23.700000000000003,32.3);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AoPGDQgnhiAAhtQAAjqCmimQCnimDpAAQDrAAClCmQCnCmAADqQgBBrgmBkg");
	this.shape.setTransform(56.65,38.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,113.3,77.4), null);


(lib.slide03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Layer_5
	this.instance = new lib.Temukan();
	this.instance.setTransform(-147,129,0.8373,0.8373);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(61));

	// Layer_3
	this.instance_1 = new lib.cta3();
	this.instance_1.setTransform(109.5,135.2,0.4223,0.4223,0,0,0,54,12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regX:54.1,regY:12.1,scaleX:0.8202,scaleY:0.8202,x:106.45,y:134.8,alpha:1},10).wait(61));

	// Layer_2
	this.instance_2 = new lib.txt03_1();
	this.instance_2.setTransform(-13,-88.85,0.4951,0.4951,0,0,0,99,47.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(66));

	// Layer_1
	this.instance_3 = new lib.img_03();
	this.instance_3.setTransform(0,0,1,1,0,0,0,160,195.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000110").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(0,234.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-195.5,320,479.9);


(lib.slide02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Layer_5
	this.instance = new lib.Temukan();
	this.instance.setTransform(-147,129,0.8373,0.8373);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(61));

	// Layer_3
	this.instance_1 = new lib.cta02_1();
	this.instance_1.setTransform(109.95,135.2,0.6625,0.6625,0,0,0,54,12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regX:54.1,regY:12.1,scaleX:0.819,scaleY:0.819,x:101.65,y:135.3,alpha:1},10).wait(61));

	// Layer_2
	this.instance_2 = new lib.txt02_1();
	this.instance_2.setTransform(5.45,-88.8,0.7137,0.7137,0,0,0,98.9,47.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:99,scaleX:1,scaleY:1,x:5.5,y:-88.85,alpha:1},15).wait(66));

	// Layer_1
	this.instance_3 = new lib.img_02();
	this.instance_3.setTransform(0,0,1,1,0,0,0,160,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-195.5,320,480);


(lib.slide01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Layer_5
	this.instance = new lib.Temukan();
	this.instance.setTransform(-147,119,0.8373,0.8373);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(61));

	// Layer_3
	this.instance_1 = new lib.cta1();
	this.instance_1.setTransform(91.7,128.1,0.5615,0.5615,0,0,0,54,12.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regY:12,scaleX:0.7972,scaleY:0.7972,x:96.05,y:124.55,alpha:1},10).wait(61));

	// Layer_2
	this.instance_2 = new lib.txt01_1();
	this.instance_2.setTransform(0.05,74.55,0.5453,0.5453,0,0,0,99,47.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.9167,scaleY:0.9167,x:0,y:51.35,alpha:1},15).wait(66));

	// Layer_1
	this.instance_3 = new lib.img_01();
	this.instance_3.setTransform(0,0,1,1,0,0,0,160,195.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000110").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(0,234.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-195.5,320,479.9);


(lib.cube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.slide01 = new lib.slide01();
	this.slide01.name = "slide01";
	this.slide01.setTransform(305.05,218.65,0.5,1,0,0,24.9994,160.1,195.5);
	this.slide01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.slide01).wait(284).to({_off:false},0).to({regX:160,scaleX:1,skewY:0,x:160,y:151},10).wait(1));

	// Layer_4
	this.slide03 = new lib.slide03();
	this.slide03.name = "slide03";
	this.slide03.setTransform(233.25,36.75,0.5,1,0,0,24.9994,1.7,47.1);
	this.slide03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.slide03).wait(180).to({_off:false},0).to({regX:1.6,scaleX:1,skewY:0,x:1.6,y:2.6},14).wait(90).to({regX:1.7,scaleX:0.5,skewY:-24.9994,x:-231.75,y:36.05},10).wait(1));

	// Layer_5
	this.slide02 = new lib.slide02();
	this.slide02.name = "slide02";
	this.slide02.setTransform(233.25,35.75,0.5,1,0,0,24.9994,1.7,46.1);
	this.slide02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.slide02).wait(74).to({_off:false},0).to({regX:1.6,scaleX:1,skewY:0,x:1.6,y:1.6},15).wait(91).to({regX:1.7,scaleX:0.5,skewY:-24.9994,x:-231.75,y:35.05},14).to({_off:true},5).wait(96));

	// Layer_6
	this.slide01_1 = new lib.slide01();
	this.slide01_1.name = "slide01_1";
	this.slide01_1.setTransform(160,151,1,1,0,0,0,160,195.5);

	this.timeline.addTween(cjs.Tween.get(this.slide01_1).wait(74).to({regX:-5.5,regY:48.1,x:-5.5,y:3.6},0).to({regX:-5.4,scaleX:0.5,skewY:-24.9994,x:-234.95,y:38.55},15).to({_off:true},5).wait(201));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000110").s().p("Egb4AoCMAAAhQDMA3xAAAMAAABQDg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(295));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305,-258.1,610,565.8);


(lib.btnprv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCVIi7jvQgdglApgeQAngfAzAUIBzAuQAjAPAlgPIBxguQAzgUApAfQAoAegdAlIi7DvQgWAcgsAAQgrAAgWgcg");
	this.shape.setTransform(-0.2154,3.1778,0.3297,0.3297);

	this.instance = new lib.Path_1();
	this.instance.setTransform(0,0.05,0.3297,0.3297,0,0,0,56.9,39);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.8,37.3,25.5);


(lib.btnnxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCVIi7jvQgdglApgeQAngfAzAUIBzAuQAjAPAlgPIBxguQAzgUApAfQAoAegdAlIi7DvQgWAcgsAAQgrAAgWgcg");
	this.shape.setTransform(-0.1913,3.2064,0.3297,0.3297);

	this.instance = new lib.Path_1();
	this.instance.setTransform(0,0.05,0.3297,0.3297,0,0,0,56.9,39);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.8,37.3,25.5);


// stage content:
(lib.Marlboro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.loc_btn.loc_name.font = "bold 48px Roboto";
		this.loc_btn.loc_name.text = "Mencari Indomaret Terdekat...";
		this.jarak.text = "";
		
		// Daftar Indomaret (Jakarta) dengan koordinat (contoh 10 titik)
		const places = [
		  { name: "Indomaret Juanda", lat: -6.169438, lng: 106.841595 },
		  { name: "Indomaret Pecenongan", lat: -6.168837, lng: 106.835052 },
		  { name: "Indomaret Cikini Raya", lat: -6.194055, lng: 106.838865 },
		  { name: "Indomaret Kebon Sirih", lat: -6.183430, lng: 106.828819 },
		  { name: "Indomaret Mangga Dua", lat: -6.137600, lng: 106.821100 },
		  { name: "Indomaret Kuningan", lat: -6.222283, lng: 106.829637 },
		  { name: "Indomaret Fatmawati", lat: -6.284022, lng: 106.797890 },
		  { name: "Indomaret Senayan", lat: -6.227700, lng: 106.799400 },
		  { name: "Indomaret Pluit", lat: -6.125222, lng: 106.793889 },
		  { name: "Indomaret Kalibata", lat: -6.261290, lng: 106.846001 }
		];
		
		let closestFive = [];
		let currentIndex = 0;
		
		function getDistance(lat1, lon1, lat2, lon2) {
		  const R = 6371;
		  const dLat = (lat2 - lat1) * Math.PI / 180;
		  const dLon = (lon2 - lon1) * Math.PI / 180;
		  const a =
		    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		    Math.cos(lat1 * Math.PI / 180) *
		    Math.cos(lat2 * Math.PI / 180) *
		    Math.sin(dLon / 2) * Math.sin(dLon / 2);
		  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		  return R * c;
		}
		
		function updateDisplay() {
		  if (closestFive.length > 0) {
		    const place = closestFive[currentIndex];
		    this.loc_btn.loc_name.text = place.name;
		    this.jarak.text = `${place.distance.toFixed(2)} km`;
		    this.loc_btn.loc_name_btn.lat = place.lat;
		    this.loc_btn.loc_name_btn.lng = place.lng;
		    this.loc_btn.loc_name_btn.nameLabel = place.name;
		  }
		}
		
		function nextPlace() {
		  currentIndex = (currentIndex + 1) % closestFive.length;
		  updateDisplay.call(this);
		}
		
		function prevPlace() {
		  currentIndex = (currentIndex - 1 + closestFive.length) % closestFive.length;
		  updateDisplay.call(this);
		}
		
		navigator.geolocation.getCurrentPosition(
		  position => {
		    const userLat = position.coords.latitude;
		    const userLng = position.coords.longitude;
		
		    closestFive = places
		      .map(place => ({
		        ...place,
		        distance: getDistance(userLat, userLng, place.lat, place.lng)
		      }))
		      .sort((a, b) => a.distance - b.distance)
		      .slice(0, 5);
		
		    currentIndex = 0;
		    updateDisplay.call(this);
		
		    this.nxt.visible = true;
		    this.prv.visible = true;
		
		    this.nxt.buttonMode = true;
		    this.prv.buttonMode = true;
		  },
		  error => {
		    this.loc_btn.loc_name.text = "Location error";
		    this.jarak.text = "";
		  }
		);
		
		this.nxt.addEventListener("click", () => {
		  nextPlace.call(this);
		});
		
		this.prv.addEventListener("click", () => {
		  prevPlace.call(this);
		});
		
		this.loc_btn.buttonMode = true;
		this.loc_btn.mouseChildren = false;
		
		this.loc_btn.addEventListener("click", () => {
		  if (closestFive.length > 0) {
		    const place = closestFive[currentIndex];
		    const placeName = encodeURIComponent(place.name);
		    const url = `https://www.google.com/maps/search/?api=1&query=${placeName}`;
		    window.open(url, "_blank");
		  }
		});
		this.lp.alpha = 0.05;
		
		this.lp.addEventListener("click", function() {
				    window.open("https://marlboro.id/br/red-land/inspiration/automotive/iframe/redland-marlboro", "_blank");  // Replace with the desired URL
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34));

	// Layer_11
	this.prv = new lib.btnprv();
	this.prv.name = "prv";
	this.prv.setTransform(160.05,396.35,0.8037,0.8037,180,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.prv, 0, 1, 1);

	this.nxt = new lib.btnnxt();
	this.nxt.name = "nxt";
	this.nxt.setTransform(160.05,469.7,0.8037,0.8037);
	new cjs.ButtonHelper(this.nxt, 0, 1, 1);

	this.loc_btn = new lib.loc_btn();
	this.loc_btn.name = "loc_btn";
	this.loc_btn.setTransform(190.95,436.35);

	this.jarak = new cjs.Text("<1000 m", "bold 22px 'IQOS'", "#FFFFFF");
	this.jarak.name = "jarak";
	this.jarak.textAlign = "center";
	this.jarak.lineHeight = 38;
	this.jarak.parent = this;
	this.jarak.setTransform(47.9883,446.35,0.4284,0.4284);

	this.link_1 = new lib.loc1();
	this.link_1.name = "link_1";
	this.link_1.setTransform(160,433.3);
	new cjs.ButtonHelper(this.link_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.link_1},{t:this.jarak},{t:this.loc_btn},{t:this.nxt},{t:this.prv}]}).wait(34));

	// Layer_12
	this.lp = new lib.stageBtn();
	this.lp.name = "lp";
	this.lp.setTransform(160.45,191.65,0.9554,2.2099,0,0,0,0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.lp).wait(34));

	// Layer_2
	this.instance = new lib.logo();
	this.instance.setTransform(143,13);

	this.instance_1 = new lib.ghw();
	this.instance_1.setTransform(0,349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(34));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000110").s().p("A3EDNIAAmZMAuJAAAIAAGZg");
	this.shape.setTransform(168.625,434.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000110").s().p("A7GH0IAAvnMA2NAAAIAAPng");
	this.shape_1.setTransform(160,430);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(34));

	// Layer_9
	this.instance_2 = new lib.cube();
	this.instance_2.setTransform(338.5,496.1,1,1,0,0,0,178.5,256.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(141.6,223.9,196.9,272.29999999999995);
// library properties:
lib.properties = {
	id: 'EA7256A81535C74BA3D734AD18B7C482',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cta01.png", id:"cta01"},
		{src:"images/cta02.png", id:"cta02"},
		{src:"images/cta03.png", id:"cta03"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/Image01.png", id:"Image01"},
		{src:"images/image02.png", id:"image02"},
		{src:"images/image03.png", id:"image03"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/Temukan.png", id:"Temukan"},
		{src:"images/txt01.png", id:"txt01"},
		{src:"images/txt02.png", id:"txt02"},
		{src:"images/txt03.png", id:"txt03"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA7256A81535C74BA3D734AD18B7C482'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;