/*************************************************************
 * My Treehouse Projects #8
 *
 * FSJS proj #1
 * 
 * Random Quote Generator
 ************************************************************/
(function(window, document) {
"use strict";

/************************************************************
 * MY MAIN VARIABLES
*************************************************************/
var body = document.getElementsByTagName("body");
var quote = document.getElementById("quote");
var source = document.getElementById("source");
var citation = document.getElementById("citation");
var year = document.getElementById("year");
var loadQuote = document.getElementById("loadQuote");
var playPauseBar = document.getElementsByClassName("playPauseBar");
var playPauseInstruction = document.getElementById("playPauseInstruction");
var playPause = document.getElementById("playPause");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");


/**************************************************************
 * RANDOM NUMBER GENERATOR
 *
 * PARAMETERS: ARRAY
 *
 * RETURNS: RANDOM NUMBER BETWEEN 0 AND THE LENGTH OF ARGUMENT
***************************************************************/
var ranIndy = function(arr) {
	return Math.ceil((Math.random() * arr.length) - 1);
};


/**************************************************************
 * PROPERTY RETRIEVAL - I'm getting a jshint warning here, but I don't undesrtand why
 *
 * PARAMETERS: OBJECT
 *
 * RETURNS: VALUE OF OBJECT'S FIRST PROPERTY
 ***************************************************************/
var firstObjVal = function(obj) {
	if (typeof obj == "object") {
		for (var kee in obj) {break;}
		return obj[kee];
	}
};


/**************************************************************
 * EQUALITY COMPARISON
 *
 * PARAMETERS: ARRAY
 * 			ELEMENT TO BE CHECKED AGAINST ARRAY INDECIES
 *
 * RETURNS:  IF MATCH: TRUE
 * 		   ELSE:     FALSE
 ***************************************************************/
var checkForMatch = function(arr, el) {
	if (arr.length > 0) {
		for (var i = 0; i < arr.length; i++) {
			if (firstObjVal(el) === firstObjVal(arr[i])) {
				return true;
			}
		}
	}
	return false;
};


/**************************************************************
 * CONDITIONAL PRINTER - getting another jshint warning I don't understand
 *
 * PARAMETERS: DOM ELEMENT
 * 			VALUE TO BE PASSED TO DOM ELEMENT
 *
 * RETURNS:  PRINT VALUE TO DOM ELEMENT
 ***************************************************************/ 
var handleIfEmpty = function(key, val) {
	if (val === "" || val === null) {
		return key.innerHTML = "";
	} else {
		return key.innerHTML = "\u00A0" + val;
	}
};


/**************************************************************
 * RANDOM COLOR PAINTER - CONDITIONALLY PRODUCES COLORS THAT
 * 					 ARE NEITHER TOO LIGHT NOR TOO DARK
 *
 * RETURNS:  ARRAY OF THREE FORMATTED RGB VALUES
 * 		   EACH SLIGHTLY LIGHTER IN COLOR THAT THE PREVIOUS
 ***************************************************************/ 
var paintRandom = function() {
	var r,g,b;
	var ranColVal = function(num) {
		return Math.ceil((Math.random() * num));
	};
	r = ranColVal(200);
	if (r > 150) {
		g = ranColVal(100);
	} else {
		g = ranColVal(200);
		if (r < 50) {
			g = ranColVal(50) + 100;
		}
	}
	if (r > 150 || g > 150) {
		b = ranColVal(100);
	} else {
		b = ranColVal(200);
		if (r < 50 || g < 50) {
			b = ranColVal(50) + 100;
		}
	}
	return ["rgb(" + r + "," + g + "," + b + ")", "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")", "rgb(" + (r + 75) + "," + (g + 75) + "," + (b + 75) + ")"];
}


/**************************************************************
 * RANDOM INDEX GENERATOR - USES RECURSION TO PREVENT DUPLICATES
 * 					   UNTIL ALL INDEXES HAVE BEEN USED
 * 					   THEN IT RESETS
 *
 * PARAMETERS: ARRAY
 *
 * RETURNS: RANDOM INDEX
 ***************************************************************/
var tempArr = [];
var randomQuote = function(arr) {
	var x = ranIndy(arr);
	var ranQuote = arr[x];
	if (tempArr.length === arr.length) {
		tempArr = [];
	}
	var testForEqual = checkForMatch(tempArr, ranQuote);
	if (!testForEqual) {
		tempArr.push(ranQuote);
		return ranQuote;	
	} else {
		return randomQuote(arr);
	}
};


/**************************************************************
 * PRINT QUOTE TO THE PAGE AND SET THE RANDOM COLORS FOR BG AND KEY ELEMENTS
 ***************************************************************/
var printQuote = function() {
	var newPaint = paintRandom();
	body[0].style.background = newPaint[0];
	loadQuote.style.color = newPaint[1];
	loadQuote.style.borderColor = newPaint[2];
	Array.prototype.map.call(playPauseBar, function(key) {
		key.style.background = newPaint[2];
		return;
	});
	var quo = randomQuote(quotes);
	quote.innerHTML = quo.quote;
	source.innerHTML = quo.source;
	handleIfEmpty(citation, quo.citation);
	handleIfEmpty(year, quo.year);
};
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/**************************************************************
 * ANIMATOR OBJECT - not sure if was good or bad to use a Constructor for this
 *
 * PARAMETERS: ELEMENT TO BE TARGETED
 * 			PROPERTY TO BE ANIMATED - ONLY WORKS FOR OPACITY AND TRANSFORM ROTATE FOR NOW
 * 			START VALUE OF PROPERTY
 * 			END VALUE OF PROPERTY
 * 			NUMBER VALUE PROPERTY IS TO BE INCREMENTED BY
 * 			MILISECONDS BETWEEN EACH INCREMENT
 *
 * RETURNS: NEW INSTANCE OF ANIMATOR OBJECT
 ***************************************************************/
var incrementor;
var Animator = function(el, prop, startValue, stopValue, increment, interval) {
	this.newValue = startValue;
	this.el = el;
	this.prop = prop;
	this.startValue = startValue;
	this.stopValue = stopValue;
	this.increment = increment;
	this.interval = interval;
	var that = this;
	this.metamorphosis = function() {	
		if (that.newValue !== that.stopValue) {
			var incrementor = setInterval(function() { 
				that.newValue = that.startValue += that.increment;
				if (that.prop === "transform") {
					that.el.style.webkitTransform = "rotate(" + that.newValue + "deg)";
					that.el.style.transform = "rotate(" + that.newValue + "deg)";	
				} else if (that.prop === "opacity") {
					that.el.style[that.prop] = that.newValue;
					if (that.newValue < 0 || that.newValue > 1) {
						clearInterval(incrementor);
					}
				}
				if (that.newValue === that.stopValue) {
					clearInterval(incrementor);
					return;
				}	
			}, interval);
		}
	};
};


/**************************************************************
 * AUTO QUOTER - TURN AUTO QUOTER ON/OFF
 * 			  ANIMATE PLAY/PAUSE BUTTON
 * 			  PRINT NEW QUOTE AND CHANGE RANDOM COLORS 
 ***************************************************************/
var playPauseToggle = true;
var quoteCycle;
var playQuote = function(e) {
	e.preventDefault();
	if (playPauseToggle) {
		printQuote();
		playPauseInstruction.innerHTML = "Pause auto refresh";
		quoteCycle = setInterval(printQuote, 21000);

		var opac = new Animator(bar2, "opacity", 1, 0, -0.025, 10);
		opac.metamorphosis();
		
		var topTurn = new Animator(bar1, "transform", 30, 0, -0.5, 10);
		topTurn.metamorphosis();
		
		var bottomTurn = new Animator(bar3, "transform", -30, 0, 0.5, 10);
		bottomTurn.metamorphosis();
		
		var playPausePhaseShift = new Animator(playPause, "transform", 0, 90, 1, 10);
		playPausePhaseShift.metamorphosis();

		playPauseToggle = false;
		return;	
	} else if (!playPauseToggle) {
		clearInterval(quoteCycle);
		
		var opac2 = new Animator(bar2, "opacity", 0, 1, 0.025, 10);
		opac2.metamorphosis();
		
		var topTurn2 = new Animator(bar1, "transform", 0, 30, 0.5, 10);
		topTurn2.metamorphosis();
		
		var bottomTurn2 = new Animator(bar3, "transform", 0, -30, -0.5, 10);
		bottomTurn2.metamorphosis();
		
		var playPausePhaseShift2 = new Animator(playPause, "transform", 90, 0, -1, 10);
		playPausePhaseShift2.metamorphosis();
		
		playPauseInstruction.innerHTML = "Refresh quote every 21 sec";
		playPauseToggle = true;
	}
};
playPause.addEventListener("click", playQuote, false);
})(window, document);