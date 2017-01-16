( function(){

    $( function(){

        $( '.perfect-scroll' ).each(function(){

            new AddScroll($(this));

        });
        $( '.devices-set_2 .devices-set__product-expand' ).each(function(){

            new DevicePopup($(this));

        });

    });

    var AddScroll = function( obj ){

        //private properties
        var _self = this,
            _obj = obj;

        //private methods
        var _addScroll = function() {

                _obj.perfectScrollbar( {
                    wheelPropagation: true
                } );

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _addScroll();
            };

        //public properties

        //public methods


        _init();
    };

    var DevicePopup = function( obj ){

        //private properties
        var _self = this,
            _obj = obj,
            _close = $('.device-single__close');

        //private methods
        var _addEvents = function() {

                _obj.on( {
                    click: function() {

                        $('.device-single_2').addClass('opened');
                        _obj.parents('.devices-set_2').addClass('openedPopup');

                        return false;

                    }
                } );
                _close.on( {
                    click: function() {

                        $('.device-single_2').removeClass('opened');
                        _obj.parents('.devices-set_2').removeClass('openedPopup');

                        return false;

                    }
                } );

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _addEvents();
            };

        //public properties

        //public methods


        _init();
    };

} )();

