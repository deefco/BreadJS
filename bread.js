/********************************
* Bread.JS                      *
* Baking has Never been easier! *
********************************/


function Bread(kind, baker) {
	this.kind = kind || "Rye";
	this.baker = baker || "BreadJS";

	var Bread =
		["_.----._",
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

 }