/* -------------------------------------- */
/* best practices for aptimus development */
/* originally authored by ryan chapel     */
/* january 18th, 2013                     */
/* last updated by ryan chapel            */
/* january 18th, 2013                     */
/* -------------------------------------- */

/*global window, $ */

( function() {
	'use strict';

	// when clicking on a side nav item...
	$( '.side-nav li a' ).on( 'click', function() {

		// check to see if the item is the active one
		if ( !$( this ).parent().hasClass( 'active' ) ) {

			// if it's not active remove the active class from the item that IS active.
			$( '.side-nav li.active' )
				.removeClass( 'active' );

			// Then add the active class to the item that was clicked.
			$( this )
				.parent()
				.addClass( 'active' );
		}
	});

}());