XML = {
	 _w : window
	,isNew : function() {
	 	return ( document.implementation && document.implementation.createDocument  ) && DOMParser;
	 }
	,createDocument : function( namespace, name, doctype ) {
		var
			 name = ( !name ) ? name : ''
			,namespace = ( !namespace ) ? namespace : ''
			,doctype = ( !doctype ) ? doctype : null;

		if ( this.isNew ) {
			this.createDocument = function( namespace, name, doctype ) {
				return document.implementation.createDocument( namespace, name );
			};
			return document.implementation.createDocument( namespace, name );
		} else {
			var
				doc = new ActiveXObject( "MSXML2.DOMDocument" );

			if ( name ) {
				var
					 prefix = ''
					,tagName = name
					,p = name.indexOf( ':' );

				if ( p != -1 ) {
					prefix = name.substring( 0, p );
					tagName = name( p + 1 );
				};

				if ( namespace ) {
					if ( !prefix ) {
						prefix = 'a0';
					} else {
						prefix = '';
					};

					var text =
						'<' + ( prefix ? ( prefix + ':' ) : '' ) + tagName
						+ ( namespace ? ( ' xmlns:' + prefix + '="' + namespace + '"' ) : '' )
						+ '/>';

					doc.loadXML( text );
				};

				return doc;
			};
		};
	 }
	,loadDocument : function( route ) {
		if ( this.isNew ) {
			console.log( this._w.DOMParser );
		}
	}
}