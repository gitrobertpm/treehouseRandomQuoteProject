/*************************************************************
 * My Treehouse Projects
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
	const body = document.getElementsByTagName("body")[0],
		quoteBox = document.getElementById("quote-box"),
		quote = document.getElementsByClassName("quote")[0],
		source = document.getElementsByClassName("source")[0],
		citation = document.getElementsByClassName("citation")[0],
		year = document.getElementsByClassName("year")[0],
		tags = document.getElementsByClassName("tags")[0],
		loadQuote = document.getElementById("loadQuote"),
		playPauseInstruction = document.getElementById("playPauseInstruction"),
		playPause = document.getElementById("playPause"),
		playPauseBar = document.getElementsByClassName("playPauseBar"),
		bar1 = document.getElementById("bar1"),
		bar2 = document.getElementById("bar2"),
		bar3 = document.getElementById("bar3"),
		triFill = document.getElementsByClassName("triFill")[0];
		
	let tempArry = quotes,
	    paint = "",
	    triOn = true;

	    
	/**************************************************************
	 * RANDOM NUMBER GENERATOR
	 *
	 * PARAMETERS: MAX IN RANGE
	 *
	 * RETURNS: RANDOM NUMBER BETWEEN 0 AND THE LENGTH OF ARGUMENT
	***************************************************************/
	function ranNum(maxo) {
		return Math.ceil((Math.random() * maxo) - 1);
	}


	/**************************************************************
	 * SUBTRAACT ELEMENT FROM ARRAY
	 *
	 * PARAMETERS: ARRAY, ELEMENT TO SUBTRACT
	 *
	 * RETURNS: NEW ARRAY - SUBTRACTED ELEMENT, OR IF EMPTY, NEW ARRAY = ORIGINAL ARRAY 
	***************************************************************/
	function newArry(arry, el) {
		// Remove seelcted element from array
		let na = arry.filter((vally, indy, arry) => {
			return el !== vally;
		});
		
		// Reset array if empty
		if (na.length === 0) {
			na = quotes;
		}
		
		// Return new array
		return na;
	}


	/**************************************************************
	 * GET A RANDOM QUOTE FROM ARRAY
	 *
	 * PARAMETERS: ARRAY
	 *
	 * RETURNS: RANDOM QUOTE OBJECT FROM QUOTES ARRAY
	***************************************************************/
	function getRandomQuote(arry) {
		let quoteObj = arry[ranNum(arry.length)];
		
		// Adjust tempprary working array
		tempArry = newArry(arry, quoteObj);
		
		// Return random quote without duplicates
		return quoteObj;
	}


	/**************************************************************
	 * PRINT QUOTE TO PAGE
	 *
	 * RETURNS: RANDOM QUOTE OBJECT FROM QUOTES ARRAY
	***************************************************************/
	function printQuote() {
		let quoteObj = getRandomQuote(tempArry);
		
		// Get text from quote object
		let quoteText = quoteObj.quote,
		    sourceText = quoteObj.source,
		    citationText = (quoteObj.citation !== undefined) ? quoteObj.citation : "",
		    yearText = (quoteObj.year !== undefined) ? quoteObj.year : "",
		    tagsText = quoteObj.tags;
		
		// Create chunks of HTML nodes with quote text
		let quoteNode = '<p class="quote">' + quoteText + '</p>',
		    sourceNode = '<p class="source">'  + sourceText,
		    citationNode = ' <span class="citation">' + citationText + ' </span>',
		    yearNode = '<span class="year">' + yearText + '</span> </p>',
		    tagsNode = '<p class="tags">' + tagsText + '</p>';
		
		// Assemble formatted quote data
		let template = quoteNode + sourceNode + citationNode + yearNode + tagsNode;
		
		quoteBox.innerHTML = template;	
		paintQuote();
	}


	/**************************************************************
	 * PAINT QUOTE - CHANGE THE COLORS OF THE PAGE
	***************************************************************/
	function paintQuote() {
		let newPaint = paintRandom();
		paint = newPaint;
		let triColor = (triOn) ? "transparent transparent transparent " + newPaint[3] : "transparent";
		body.style.background = newPaint[0];
		triFill.style.borderColor = triColor;
		loadQuote.style.background = newPaint[1];
		loadQuote.style.borderColor = newPaint[2];
		Array.prototype.map.call(playPauseBar, (vally, indy, arry) => {
			vally.style.background = newPaint[1];;
		});
	}

	
	/**************************************************************
	 * HELPER FUNCTION FOR TRANSFORM ROTATING DOM ELEMENT
	***************************************************************/
	function transformIt(el, val) {
		el.style.webkitTransform = "rotate(" + val + "deg)";
		el.style.transform = "rotate(" + val + "deg)";
	}


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
	function Animator(el, prop, startValue, stopValue, increment, interval) {
		this.el = el;
		this.prop = prop;
		this.startValue = startValue;
		this.stopValue = stopValue;
		this.increment = increment;
		this.interval = interval;
		
		// placeholders
		let that = this;
		let holdValue = startValue;
		let counter = 0;
		
		// Method for initial animation
		this.metamorphosisA = function() {	
			let incrementor = setInterval(() => { 
				
				if (that.prop === "transform") {
					if (that.el.id === "bar1") {
						that.startValue -= that.increment;
						transformIt(that.el, that.startValue);
						if (that.startValue <= that.stopValue) {
							clearInterval(incrementor);
						}
					} else {
						that.startValue += that.increment;
						transformIt(that.el, that.startValue);
						if (that.startValue >= that.stopValue) {
							clearInterval(incrementor);
						}
					}			
				} else if (that.prop === "opacity") {
					counter++;
					that.startValue -= that.increment;
					that.el.style.opacity = that.startValue;
					if (counter === 10) {
						that.startValue = that.stopValue;
						that.el.style.opacity = that.startValue;
						clearInterval(incrementor);
					}
				}
			}, interval);
		};
		
		// Method to animate back to original state
		this.metamorphosisB = function() {	
			let incrementorB = setInterval(() => { 
				if (that.prop === "transform") {
					if (that.el.id === "bar1") {
						that.startValue += that.increment;
						transformIt(that.el, that.startValue);
						if (that.startValue >= holdValue) {
							clearInterval(incrementorB);
						}
					} else {
						that.startValue -= that.increment;
						transformIt(that.el, that.startValue);
						if (that.startValue <= holdValue) {
							clearInterval(incrementorB);
						}
					}	
				} else if (that.prop === "opacity") {
					counter--;
					that.startValue += that.increment;
					that.el.style.opacity = that.startValue;
					if (counter === 0) {
						that.startValue = holdValue;
						that.el.style.opacity = that.startValue ;
						clearInterval(incrementorB);
					}
				}
			}, interval);
		};
	}


	/**************************************************************
	 * AUTO QUOTER - TURN AUTO QUOTER ON/OFF
	 * 			  ANIMATE PLAY/PAUSE BUTTON
	 * 			  PRINT NEW QUOTE AND CHANGE RANDOM COLORS 
	 ***************************************************************/
	let playPauseToggle = true;
	let quoteCycle;

	// Create animation objects
	let opac = new Animator(bar2, "opacity", 1, 0, 0.1, 100);
	let topTurn = new Animator(bar1, "transform", 30, 0, 0.5, 10);
	let bottomTurn = new Animator(bar3, "transform", -30, 0, 0.5, 10);
	let playPausePhaseShift = new Animator(playPause, "transform", 0, 90, 1, 10);

	// Activate quote auto player
	let playQuote = function(e) {
		e.preventDefault();
		
		// Play
		if (playPauseToggle) {
			printQuote();
			paintQuote();
			playPauseInstruction.innerHTML = "Pause auto refresh";
			quoteCycle = setInterval(printQuote, 21000);
			triFill.style.borderColor = "transparent";

			opac.metamorphosisA();
			topTurn.metamorphosisA();
			bottomTurn.metamorphosisA();
			playPausePhaseShift.metamorphosisA();

			playPauseToggle = false;
			triOn = false;
			return;

		// Pause
		} else if (!playPauseToggle) {
			clearInterval(quoteCycle);
			triFill.style.borderColor = "transparent transparent transparent " + paint[3];
			
			opac.metamorphosisB();
			topTurn.metamorphosisB();
			bottomTurn.metamorphosisB();
			playPausePhaseShift.metamorphosisB();
			
			playPauseInstruction.innerHTML = "Refresh quote every 21 sec";
			playPauseToggle = true;
			triOn = true;
			return;
		}
	};


	/**************************************************************
	 * PLAY/PAUSE BUTTON
	***************************************************************/
	playPause.addEventListener("click", playQuote);


	/**************************************************************
	 * NEW QUOTE BUTTON
	***************************************************************/
	loadQuote.addEventListener("click", printQuote);


	/**************************************************************
	 * RANDOM COLOR PAINTER - CONDITIONALLY PRODUCES COLORS THAT
	 * 					 ARE NEITHER TOO LIGHT NOR TOO DARK
	 *
	 * RETURNS:  ARRAY OF FOUR FORMATTED RGB VALUES
	 * 		   EACH SLIGHTLY LIGHTER IN COLOR THAT THE PREVIOUS
	 ***************************************************************/ 
	function paintRandom() {
		let r,g,b;
		let ranColVal = function(num) {
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
		
		let colorOne = "rgb(" + r + "," + g + "," + b + ")",
		    colorTwo = "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")",
		    colorThree = "rgb(" + (r + 75) + "," + (g + 75) + "," + (b + 75) + ")",
		    colorFour = "rgb(" + (r + 100) + "," + (g + 100) + "," + (b + 100) + ")";
		    
		return [colorOne, colorTwo, colorThree, colorFour];
	}
})(window, document);