( function() {

    $( function() {

        $( '.tabs' ).each( function(){
            new Tabs( {
                obj: $( this ),
                showType: 2, // if "showType = 0" tabs will be without any animations
                activeIndex: function( index ){
                    console.log( index )
                 }
            } );
        } );

        $( '.dropdown' ).each( function(){
            new Dropdown( $( this ) );
        } );

    } );

    var Dropdown = function( obj ){

        //private properties
        var _self = this,
            _obj = obj,
            _wrap = _obj.find( '.dropdown__wrap' ),
            _title = _obj.find( '.dropdown__title' );

        //private methods
        var _constructor = function(){

                _obj[ 0 ].obj = _self;
                _onEvents();

                _addScroll();

                _title.each( function () {
                    var curElem = $( this );

                    if ( curElem.hasClass( 'active' ) ) {
                        _open( curElem )
                    }
                } );

            },
            _addScroll = function() {

                _wrap.perfectScrollbar();

            },
            _open = function( elem ) {
                var nextElem = elem.next();

                elem.addClass( 'active' );

                if ( nextElem.length ) {
                    nextElem.slideDown();
                }

            },
            _hide = function( elem ) {
                var nextElem = elem.next();

                elem.removeClass( 'active' );

                if ( nextElem.length ) {
                    nextElem.slideUp();
                }

            },
            _onEvents = function(){

                _title.on( {
                    'click': function () {
                        var curElem = $( this );

                        if ( curElem.hasClass( 'active' ) ) {
                            _hide( curElem );
                        } else {
                            _open( curElem );
                        }
                        return false;
                    }
                } );

                $( window ).on( {
                    'resize': function () {
                        _wrap.perfectScrollbar( 'update' );
                    }
                } );

            };

        //public properties

        //public methods


        _constructor();
    };

    var Toggle = function ( obj ) {
    
      //private properties
      var  _title = obj;

      //private methods
      var _constructor = function () {
      
              _onEvents();
      
          },
      _onEvents = function () {
      
          _title.on ( {
              click: function () {
               
               _addStyles();

              }
          } );

      },
    
      _addStyles = function () {

        _title.toggleClass('defaults__title_open');

      };
    
      _constructor ();
    
    };

} )();

