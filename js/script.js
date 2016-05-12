/*****************************************
 * My Treehouse Projects #8
 *
 * FSJS proj #1
 * 
 * Random Quote Generator
 ******************************************/

"use strict";

// ARRAY OF QUOTE OBJECTS
var quotes = [
	{
		"quote": "People will forget what you said.  People will forget what you did.  But people will remember how you made them feel.",
		"source": "Maya Angelou, ",
		"citation": "As quoted in Worth Repeating: More Than 5,000 Classic and Contemporary Quotes (2003) by Bob Kelly, p. 263"
	},
	{
		"quote": "You run and you run to catch up with the sun, but it's sinking.<br>Racing around to come up behind you again.",
		"source": "Pink Floyd, ",
		"citation": "Dark side of the Moon, Time, ",
		"year": 1973
	},
	{
		"quote": "As the cool stream gushed over one hand she spelled into the other the word water, first slowly, then rapidly. I stood still, my whole attention fixed upon the motions of her fingers. Suddenly I felt a misty consciousness as of something forgotten — a thrill of returning thought; and somehow the mystery of language was revealed to me. I knew then that 'w-a-t-e-r' meant the wonderful cool something that was flowing over my hand. That living word awakened my soul, gave it light, hope, joy, set it free! There were barriers still, it is true, but barriers that could in time be swept away.",
		"source": "Helen Keller, ",
		"citation": "The Story of My Life, ",
		"year": 1903
	},
	{
		"quote": "Shut the f@ck up, Donny!",
		"source": "Walter Sobchak, played by John Goodman, ",
		"citation": "The Big Labowski, ",
		"year": 1998
	},
	{
		"quote": "And those who were seen dancing were thought to be insane by those who could not hear the music.",
		"source": "Friedrich Nietzsche"
	},
	{
		"quote": "The bad news is you’re falling through the air, nothing to hang on to, no parachute. The good news is there’s no ground.",
		"source": "Chögyam Trungpa Rinpoche"
	},
	{
		"quote": "Discovered by the Germans in 1904, they named it San Diego, which of course in German means 'a whale’s vagina.'",
		"source": "Rom Burgundy, played by Will Ferrell, ",
		"citation": "Anchorman, ",
		"year": 2004
	},
	{
		"quote": "There he goes. One of God's own prototypes. A high-powered mutant of some kind never even considered for mass production. Too weird to live, and too rare to die.",
		"source": "Hunter S. Thonmpson, ",
		"citation": "Fear and Loathing in Las Vegas, ",
		"year": 1971
	},
	{
		"quote": "The man in Black fled across the Desert, and the Gunslinger followed.",
		"source": "Stephen King, ",
		"citation": "The Gunslinger, ",
		"year": 1982
	},
	{
		"quote": "Ask them if it would be faster if we cut the baby's face off the penis and stuck it on the bunny. That is a weird sentence...",
		"source": "Ross Geller, played by David Schwimmer, ",
		"citation": "Friends, ",
		"year": 2003
	},
	{
		"quote": "O Me! O life!... of the questions of these recurring;<br>Of the endless trains of the faithless—of cities fill’d with the foolish;<br>Of myself forever reproaching myself, (for who more foolish than I, and who  more faithless?)<br>Of eyes that vainly crave the light—of the objects mean—of the struggle ever renew’d;<br>Of the poor results of all—of the plodding and sordid crowds I see around me;<br>Of the empty and useless years of the rest—with the rest me intertwined;<br>The question, O me! so sad, recurring—What good amid these, O me, O life?<br>Answer.<br>That you are here—that life exists, and identity;<br> That the powerful play goes on, and you will contribute a verse.",
		"source": "Walt Whitman, ",
		"citation": "Leaves of Grass, ",
		"year": 1867
	},
	{
		"quote": "So we beat on, boats against the current, borne back ceaselessly into the past.",
		"source": "F. Scott Fitzgerald, ",
		"citation": "The great final line of The Great Gatsby, ",
		"year": 1925
	},
	{
		"quote": "The human torch was denied a bank loan",
		"source": "Ron Burgundy, played by Will Ferrell, ",
		"citation": "Anchorman, ",
		"year": 2004
	},
	{
		"quote": "This is what you shall do; Love the earth and sun and the animals, despise riches, give alms to every one that asks, stand up for the stupid and crazy, devote your income and labor to others, hate tyrants, argue not concerning God, have patience and indulgence toward the people, take off your hat to nothing known or unknown or to any man or number of men, go freely with powerful uneducated persons and with the young and with the mothers of families, read these leaves in the open air every season of every year of your life, re-examine all you have been told at school or church or in any book, dismiss whatever insults your own soul, and your very flesh shall be a great poem and have the richest fluency not only in its words but in the silent lines of its lips and face and between the lashes of your eyes and in every motion and joint of your body.",
		"source": "Walt Whitman, ",
		"citation": "Leaves of Grass, ",
		"year": "Independence Day, July 4, 1855"
	},
	{
		"quote": "Only a life lived for others is a life worth living",
		"source": "Albert Einstein, ",
		"citation": "New York Times, ",
		"year": "June 20, 1932"
	},
	{
		"quote": "The smoker you drink, the player you get.",
		"source": "Joe Walsh, ",
		"citation": "Title of Joe Walsh's second studio album, ",
		"year": 1973
	},
	{
		"quote": "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms.",
		"source": "Henry David Thoreau, ",
		"citation": "Walden, ",
		"year": 1854
	},
	{
		"quote": "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
		"source": "Moses?, ",
		"citation": "Genesis 1:2, ",
		"year": "A few thousand years ago"
	},
	{
		"quote": "The arsonist had oddly shaped feet.",
		"source": "Ron Burgundy, played by Will Ferrell, ",
		"citation": "Anchorman, ",
		"year": 2004
	},
	{
		"quote": "The great kick of the mystic experience, the exultant, ecstatic hit, is the sudden relief from emotional pressure.",
		"source": "Timothy Leary, Ph.D., ",
		"citation": "Politics of Ecstacy, ",
		"year": 1980
	},
	{
		"quote": "But the man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less cocksure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable Mystery which it tries, forever vainly, to comprehend.",
		"source": "Aldous Huxley, ",
		"citation": "The Doors of Perception, ",
		"year": 1952
	},
	{
		"quote": "What do I need to talk for, ha? What, to blab to the neighbors about how George has a new fem-Jerry friend?  Or to tell everybody at the coffee shop how George is all mixed up in a perverse sexual amalgam of some girl and his best friend?  See now, I've done all that...  Now it's time for silence.",
		"source": "Cosmo Kramer, played by Michael Richards, ",
		"citation": "Seinfeld, ",
		"year": 1998
	},
	{
		"quote": "If the doors of perception were cleansed every thing would appear to man as it is, Infinite. For man has closed himself up, till he sees all things thro' narrow chinks of his cavern.",
		"source": "William Blake, ",
		"citation": "The Marriage of Heaven and Hell, ",
		"year": 1793
	},
	{
		"quote": "Gather ye rosebuds while ye may,<br>Old Time is still a-flying;<br>And this same flower that smiles today<br>Tomorrow will be dying.",
		"source": "Robert Herrick, ",
		"citation": "To the Virgins, to Make Much of Time, ",
		"year": "17th century"
	},
	{
		"quote": "Ok, first off, a lion…swimming in the ocean?  Lions don't even like water.  If you placed it near a river, or some sort of fresh water source, that'd make sense.  But you find yourself in the ocean, a 20 ft wave, I'm assuming its off the coast of South Africa, coming up against a full, grown, 800 lb tuna with his 20 or 30 friends.  You lose that battle. You lose that battle nine times out of ten.  And guess what, you wandered into our school of tuna and we now have a taste of blood! We’ve talked to ourselves. We’ve communicated and said, 'you know what? lion tastes good. Lets go get some more lion'. We've developed a system, to establish a beachhead and aggressively hunt you and your family. And we will corner your, your pride, your children, your offspring…",
		"source": "Alan 'Gator' Gamble, played by Will Ferrell, ",
		"citation": "The Other Guys, ",
		"year": 2010
	},
	{
		"quote": "The surest way to become Tense, Awkward, and Confused is to develop a mind that tries too hard - one that thinks too much.",
		"source": "Benjamin Hoff, ",
		"citation": "The Tao of Pooh, ",
		"year": 1982
	},
	{
		"quote": "I long to accomplish a great and noble task, but it is my chief duty to accomplish humble tasks as though they were great and noble. The world is moved along, not only by the mighty shoves of its heroes, but also by the aggregate of the tiny pushes of each honest worker.",
		"source": "Helen Keller"
	}
];

var width = window.innerWidth;

var body = document.getElementsByTagName("body");
var quoteMark = document.getElementsByClassName("quoteMark");
var quote = document.getElementsByClassName("quote");
var source = document.getElementsByClassName("source");
var citation = document.getElementsByClassName("citation");
var year = document.getElementsByClassName("year");
var loadQuote = document.getElementById("loadQuote");
var playPauseBar = document.getElementsByClassName("playPauseBar");

var quoteToggle = true;
var quoteIndex;

// GRAB AND RETURN RANDOM QUOTE FROM QUOTES ARRAY
var randomQuote = function() {
	var x = Math.ceil((Math.random() * quotes.length) - 1);
	return quotes[x];
};


// HELPER FUNCTION TO PRINT QUOTE PROPERTY OR OMIT PRINTING QUOTE PROPERTY IF NON-EXISTENT 
var handleIfEmpty = function(x, y) {
	if (y === "" || y === null) {
		x[0].innerHTML = "";
	} else {
		x[0].innerHTML = "\u00A0" + y;
	}
};


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function printQuote() {
	var r;
	var g;
	var b;
	
	// RANDOM RGB TO SET NEW COLOR WITH EACH NEW QUOTE
	r = Math.ceil((Math.random() * 200));
	if (r > 150) {
		g = Math.ceil((Math.random() * 100));
	} else {
		g = Math.ceil((Math.random() * 200));
		if (r < 50) {
			g = Math.ceil((Math.random() * 50) + 100);
		}
	}
	if (r > 150 || g > 150) {
		b = Math.ceil((Math.random() * 100));
	} else {
		b = Math.ceil((Math.random() * 200));
		if (r < 50 || g < 50) {
			b = Math.ceil((Math.random() * 50) + 100);
		}
	}
	var rgb = "rgb(" + r + "," + g + "," + b + ")";
	var rgb2 = "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")";
	var rgb3 = "rgb(" + (r + 75) + "," + (g + 75) + "," + (b + 75) + ")";
	
	body[0].style.background = rgb;
	loadQuote.style.color = rgb2;
	loadQuote.style.borderColor = rgb3;
	
	for (var i = 0; i < playPauseBar.length; i++) {
		playPauseBar[i].style.background = rgb3;
	}
	
	
	// CONDITIONALLY SELECT INDEX OF QUOTES ARRAY SO FIRST SELECTION IS RANDOM AND EACH QUOTE IN THE ARRAY IS DISPLAYED BEFORE REPEATING  
	if (quoteToggle) {
		var quo = randomQuote();
		quoteIndex = quotes.indexOf(quo);
		quoteToggle = false;
	} else if (!quoteToggle) {
		if (quoteIndex < quotes.length - 1) {	
			quoteIndex += 1;
		} else {
			quoteIndex = 0;
		}	
	}
	
	// PRINT TO THE SCREEN
	quote[0].innerHTML = quotes[quoteIndex].quote;
	source[0].innerHTML = quotes[quoteIndex].source;
	handleIfEmpty(citation, quotes[quoteIndex].citation);
	handleIfEmpty(year, quotes[quoteIndex].year);
	
	// SET FONT SIZE DEPENDING ON LENGTH OF QUOTE
	if (width > 749) {
		if (quotes[quoteIndex].quote.length < 125) {
			quote[0].style.fontSize = "4rem";
			quoteMark[0].style.fontSize = "6rem";
			quoteMark[1].style.fontSize = "6rem";
		} else if (quotes[quoteIndex].quote.length > 124 && quotes[quoteIndex].quote.length < 500) {
			quote[0].style.fontSize = "3rem";
			quoteMark[0].style.fontSize = "4.5rem";
			quoteMark[1].style.fontSize = "4.5rem";
		} else if (quotes[quoteIndex].quote.length > 499) {
			quote[0].style.fontSize = "2.5rem";
			quoteMark[0].style.fontSize = "3.25rem";
			quoteMark[1].style.fontSize = "3.25rem";
		}
	} else if (width < 750) {
		quote[0].style.fontSize = "1.5rem";
		quoteMark[0].style.fontSize = "1.5rem";
		quoteMark[1].style.fontSize = "1.5rem";
	}
};

var playPauseInstruction = document.getElementsByClassName("playPauseInstruction");
var playPause = document.getElementById("playPause");
var bar1 = document.getElementsByClassName("bar1");
var bar2 = document.getElementsByClassName("bar2");
var bar3 = document.getElementsByClassName("bar3");

var playPauseToggle = true;
var quoteCycle;

// HELPER FUNCTION TO HANDLE VENDOR PREFIXES ON TRANSFORM STYLE PROPERTRY 
var handleTransform = function(what, howMuch) {
	what.style.webkitTransform = "rotate(" + howMuch + "deg)";
	what.style.transform = "rotate(" + howMuch + "deg)";
};

// PLAY/PAUSE BUTTON TO START AND STOP AUTO REFRESH QUOTE EVERY 30 SECONS
playPause.addEventListener("click", playQuote, false);
function playQuote(e) {
	
	var opac;
	var topTurn;
	var bottomTurn;
	var playPauseOrientation;
	
	if (playPauseToggle) {
		// PREVENT LINK DEFAULT FUNCTION
		e.preventDefault;
		
		// CHANGE QUOTE ONCE IMMEDIATELY SO THE BUTTON DOESN'T APPEAR TO BE BROKEN
		printQuote();
		
		// NEW TOOL TIP
		playPauseInstruction[0].innerHTML = "Pause auto refresh";
		
		// CHANGE QUOTE EVERY 30 SECONDS
		quoteCycle = setInterval(printQuote, 30000);
		
		opac = 1;
		topTurn = 30;
		bottomTurn = -30;
		playPauseOrientation = 0;
		
		// ANIMATE TRANSITION BETWEEN BUTTON PLAY AND PAUSE STATE
		var convertToPause = setInterval(function() {
			opac -= .01;
			topTurn -= .5;
			bottomTurn += .5;
			playPauseOrientation += 1;
			if (opac > 0) {
				bar2[0].style.opacity = opac;
			}
			if (topTurn > -1) {
				handleTransform(bar1[0], topTurn);
			}
			if (bottomTurn < 1) {
				handleTransform(bar3[0], bottomTurn);
			}
			if (playPauseOrientation < 91) {
				handleTransform(playPause, playPauseOrientation);
			}
		}, 10);
		
		playPauseToggle = false;
	} else if (!playPauseToggle) {
		// PREVENT LINK DEFAULT FUNCTION
		e.preventDefault;
		
		// STOP NEW QUOTE AUTO REFRESH
		clearInterval(quoteCycle);
		
		// NEW TOOL TIP
		playPauseInstruction[0].innerHTML = "Refresh quote every 30 sec";
		
		opac = 0;
		topTurn = 0;
		bottomTurn = 0;
		playPauseOrientation = 90;
		
		// ANIMATE TRANSITION BETWEEN BUTTON PLAY AND PAUSE STATE
		var convertToPlay = setInterval(function() {
			opac += .01;
			topTurn += .5;
			bottomTurn -= .5;
			playPauseOrientation -= 1;
			
			if (opac < 1) {
				bar2[0].style.opacity = opac;
			}
			
			if (topTurn < 30) {
				handleTransform(bar1[0], topTurn);
			}
			if (bottomTurn > -30) {
				handleTransform(bar3[0], bottomTurn);
			}
			if (playPauseOrientation > -1) {
				handleTransform(playPause, playPauseOrientation);
			}
		}, 10);
		
		playPauseToggle = true;
	}
};