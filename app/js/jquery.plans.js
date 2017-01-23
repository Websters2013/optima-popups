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
            _customize = _obj.find( '.plans__customize' ),
            _customizeWrap = _customize.find( '.plans__customize-wrap' ),
            _customizeTotal = _customize.find( '.plans__customize-total' ),
            _inputs = _customizeWrap.find( 'input' ),
            _points = $( '.plans__customize-points' ),
            _price = $( '.plans__customize-price' );

        //private methods
        var _addEvents = function() {

                _inputs.on( {
                    change: function() {

                        _calculate();
                    }
                } );

                $( window ).on( {
                    ready: function() {

                        _calculate();
                    }
                } );

            },
            _calculate = function() {
                var points = 0,
                    price = 0;

                $( '.plans__customize input' ).each( function () {
                    var curElem = $( this );

                    if ( curElem.is( ':checked' ) ) {
                        points += curElem.data( 'point' )*3;
                        price += curElem.data( 'point' )*5;
                    }

                } );

                _points.text( points );
                _price.text( price );

                console.log('points = ', points, 'price = ', price)

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _addEvents();
                _calculate();
            };

        //public properties

        //public methods


        _init();
    };

} )();

