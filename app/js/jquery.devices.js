( function(){

    $( function(){

        $( '.device-single__extras' ).each(function(){

            new AddScroll($(this));

        });

        $( '.defaults' ).each(function(){

            new Toggle( $(this) );

        });

    });

    var AddScroll = function( obj ){

        //private properties
        var _self = this,
            _obj = obj;

        //private methods
        var _addScroll = function() {

                _obj.perfectScrollbar();

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _addScroll();
            };

        //public properties

        //public methods


        _init();
    };

    var Toggle = function ( obj ) {
    
      //private properties
      var _container = obj,
          _btn = $( '.defaults__title' ),
          _wrap1 = $( '.defaults__wrap-1' ),
          _wrap2 = $( '.defaults__wrap-2' );

      //private methods
      var _constructor = function () {

              _onEvents();
      
          },
      _onEvents = function () {
      
          _btn.on ( {
              click: function () {

               _toggleMenu();

              }
          } );  
      },
    
      _toggleMenu = function () {

        if ( _btn.hasClass( 'defaults__title-1' ) ) {

            _wrap1.slideToggle();

            _btn.toggleClass('defaults__title_open');

        } else if ( _btn.hasClass( 'defaults__title-2' ) ) {

            _wrap2.slideToggle();

        }

      };
    
      _constructor ();
    
    };


} )();

