"use strict";
( function () {

  $( function() {

    $.each( $( '.show-psw' ), function() {
       
      new  Show ( $( this ) );
       
    } );

      $.each( $( '.menu-btn' ), function() {
          new Menu ( $( this ) );
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
  
  };

  var Menu = function( obj ) {

        //private properties
        var _obj = obj,
            _menu = $( '.menu' ),
            _window = $( window );


        //private methods
        var _initSlider = function() {

                _obj.on( {
                    'click': function() {

                        if ( _obj.hasClass( 'close' ) ) {

                            _obj.removeClass( 'close' );
                            _menu.removeClass( 'opened' );

                        } else {

                            _obj.addClass( 'close' );
                            _menu.addClass( 'opened' );

                            if ( _menu.height() - 10 > _window.height() ) {

                                $( _menu ).perfectScrollbar({
                                        suppressScrollX : 'true'
                                    }
                                );
                            } else {
                                $( _menu ).perfectScrollbar("destroy");
                            }

                        }
                        return false;
                    }
                } );
                _window.on( {
                    'resize': function() {

                        if ( _menu.height() - 10 > _window.height() && _obj.hasClass( 'menu-btn_close' ) ) {

                            $( _menu ).perfectScrollbar( 'update' );
                        }
                    }
                } );

            },
            _init = function() {
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };
 
} ) ();
