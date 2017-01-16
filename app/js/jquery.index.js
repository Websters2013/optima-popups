"use strict";
( function () {

  $( function() {

    $.each( $( '.show-psw' ), function() {
       
      new  Show ( $( this ) );
       
    } );

  } );

    
  var Show = function ( obj ) {
  
    //private properties
    var _checkbox = obj,
    		_password = $('.site__main-password');

    //private methods
    var _constructor = function () {

            _onEvents();
    
        },
    _onEvents = function () {
    
        _checkbox = obj.on ( {
            change: function () {
                var elem = $( this ).prev();

                if ( elem.attr( 'type' ) == 'password' ) {
                    elem.attr('type', 'text');
                } else {
                    elem.attr('type', 'password')
                }

            }
        } );
 
    };
  
    _constructor ();
  
  }
 
} ) ();
