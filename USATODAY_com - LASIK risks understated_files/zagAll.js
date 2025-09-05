function baseZag () {
	/* Set the value of numPercentToShow to determine
	what percentage of page hits should bake the cookie.
	Example values:
	.01, means that 1% will be cookied
	*/

	var numPercentToCookie = 0;
	//var numPercentToCookie = 0.016666667;
	//var numPercentToCookie = .33;
  
	// generate a random number: if the random num is less
	// than the decimal, bake cookie.

	var rand = Math.random();

	if (usat.cookie.get("zagCookie") == null) {
   	if (rand < numPercentToCookie) {
   		usat.cookie.set("zagCookie", "2", new Date(2025, 11, 31), "/", ".usatoday.com");
   	} else {
   		//prepare the rest to be ZAGed
			if(usat.cookie.get("zagSession")==null){
				//set zagSession cookie
				usat.cookie.set("zagSession", "inSession", "", "/", ".usatoday.com");
			} //if
			usat.cookie.set("zagCookie", "0", new Date(2025, 11, 31), "/", ".usatoday.com");
		} //if		
   } //if
} //function baseZag ()

baseZag();
