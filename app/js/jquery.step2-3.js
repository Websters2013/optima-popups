"use strict";

( function () {

  $( function() {

    $.each( $( '.btn_submit' ), function() {
       
      new  EneableButton ( $( this ) );
       
    } );

  } );

    
  var EneableButton = function ( obj ) {
  
    //private properties
    var _btn = obj,
        _field = $( '#zipcode' );

    //private methods
    var _constructor = function () {
  
            _onEvents();
    
        },
    _onEvents = function () {   

        _field.on ( {
            input: function () {
             
            	_eneable();

            }
        } ); 
 
    },
    _eneable = function () {

      if ( _field.val() != '' ) {

      	_btn.removeClass( 'btn_submit-gray' );

      } else {

      	_btn.addClass( 'btn_submit-gray' );

      }

    };
  
    _constructor ();
  
  }
 
} ) ();