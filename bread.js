/********************************
* Bread.JS                      *
* Baking has Never been easier! *
********************************/


function Bread(kind, baker, color) {
	this.kind = kind || "Rye";
	this.baker = baker || "BreadJS";
	this.color = color || '#b59a48';

	var Bread =
		["  _.----._",
		 ",'        `.",
		 "(  ,',;,`,  )",
		 "| ,.`,.``,.|",
		 "| '`,`',;',|",
		 "| ,';',,;',|",
		 "| ,';,`,',`|",
		 "|  `,`,'`, |",
		 "`----------'"];

    /***************************************************** 
    *	raw() gives you the Raw Ingredients of the Bread *
    *	which is the Array() containing every Individual *
    *	line of Ascii Art                                *
    *****************************************************/

	this.raw = function() {
		return Bread;
	}

    /***************************************************** 
    *	bake() gives you the Finished Bread. Which is a  *
    *	string consisting of every Array Element joined  *
    *	together by Newlines							 *
	*****************************************************/
	
	this.bake = function() { 
		return Bread.join("\n");
	}

	/***************************************************** 
    *	log() logs the baked Bread to the console to     *
    *	make hungry developers happy 	    			 *
    *								 					 *
	*****************************************************/

	this.log = function() {
		console.log('%c' + this.bake(), 'color:' + this.color);
	}

	/***************************************************** 
    *	print() bakes and displays the just baked Bread  *
    *	on the webpage. Bakes in the color defined by	 *
    *	the baker 										 *
	*****************************************************/

	this.print = function() {
		var bread = "<pre style='color: " + this.color + "'>" + this.bake() + "</pre>";
		document.write(bread);
	}
 }