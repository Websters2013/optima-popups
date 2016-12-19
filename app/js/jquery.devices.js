( function(){

    $( function(){

        $( '.device-single__extras' ).each(function(){

            new AddScroll($(this));

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
} )();

