XML.load = function( route ) {
	var
		 xmlDoc = XML.newDocument();
	xmlDoc.async = false;
	xmlDoc.load( route );

	
};