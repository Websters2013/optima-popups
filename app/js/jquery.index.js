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
             
             _toggleMenu();

            }
        } );
 
    },
  
    _toggleMenu = function () {
    	console.log(_password);

    	_password.attr('type') = 'text';
  	  	
    };
  
    _constructor ();
  
  }
 
} ) ();
