( function(){

    $( function(){

        $( '.perfect-scroll' ).each(function(){

            new AddScroll($(this));

        });
        $( '.perfect-scroll-horiz' ).each(function(){

            new AddHorizScroll($(this));

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

    var AddHorizScroll = function( obj ){

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

