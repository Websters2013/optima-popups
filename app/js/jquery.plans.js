( function(){

    $( function(){

        $( '.plans' ).each(function(){

            new Plans($(this));

        });

    });

    var Plans = function( obj ){

        //private properties
        var _self = this,
            _obj = obj,
            _wrap = _obj.find( '.plans__wrap' ),
            _title = _obj.find( '.plans__title' );

        //private methods
        var _constructor = function(){

                _obj[ 0 ].obj = _self;
                _onEvents();

                _addScroll();

            },
            _addScroll = function() {

                _wrap.perfectScrollbar();

            },
            _onEvents = function(){

                _title.on( {
                    'click': function () {
                        var curElem = $( this );

                        curElem.toggleClass( 'active' );

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
} )();

