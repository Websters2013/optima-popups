( function(){

    $( function(){

        $( '.popup' ).each(function(){

            new Popup($(this));

        });

    });

    var Popup = function( obj ){

        //private properties
        var _self = this,
            _popupPadding = 40,
            _btnShow =  $( '.popup__open' ),
            _obj = obj,
            _btnClose = _obj.find( '.popup__close, .popup__cancel' ),
            _wrap = _obj.find( '.popup__wrap' ),
            _contents = _obj.find( '.popup__content' ),
            _scrollConteiner = $( 'html' ),
            _window = $( window ),
            _timer = setTimeout( function(){}, 1 );

        //private methods
        var _centerWrap = function(){
                if ( _window.height() - ( _popupPadding * 2 ) - _wrap.height() > 0 ) {
                    _wrap.css( { top: ( ( _window.height() - ( _popupPadding * 2 ) ) - _wrap.height() ) / 2 } );
                } else {
                    _wrap.css( { top: 0 } );
                }
            },
            _getScrollWidth = function (){
                var scrollDiv = document.createElement( 'div'),
                    scrollBarWidth;

                scrollDiv.className = 'popup__scrollbar-measure';

                document.body.appendChild( scrollDiv );

                scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

                document.body.removeChild(scrollDiv);

                return scrollBarWidth;
            },
            _hide = function( elem ){
                elem.css( {
                    overflowY: 'hidden'
                } );

                elem.removeClass( 'popup_opened' );
                elem.addClass( 'popup_hide' );

                if( !($('.popup_opened').length)) {
                    _scrollConteiner.css( {
                        overflowY: 'auto',
                        paddingRight: 0
                    } );
                }

                _timer = setTimeout( function(){

                    elem.css ({
                        overflowY: 'auto'
                    });

                    elem.removeClass( 'popup_hide' );
                }, 300 );

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _onEvents();
            },
            _onEvents = function(){
                _window.on( {
                    resize: function(){
                        _centerWrap();
                    }
                } );
                _btnShow.on( {
                    click: function(){
                        _show( $( this ).attr( 'data-popup' ) );
                        return false;
                    }
                } );
                _wrap.on( {
                    click: function( e ){
                        e.stopPropagation();
                    }
                } );
                _obj.on( {
                    click: function(){
                        _hide( $(this) );
                        return false;
                    }
                } );
                _btnClose.on( {
                    click: function(){
                        _hide($(this).parents('.popup'));
                        return false;
                    }
                } );
            },
            _show = function( className ){

                var curContent = _contents.filter( '.popup__' + className),
                    parent = curContent.parents('.popup'),
                    otherContents = parent.find('.popup__content');

                otherContents.css( { display: 'none' } );
                curContent.css( { display: 'block' } );

                _scrollConteiner.css( {
                    overflowY: 'hidden',
                    paddingRight: _getScrollWidth()
                } );
                parent.addClass( 'popup_opened' );
                _centerWrap();
                _setTopPos();

            },
            _setTopPos = function(){

                if( $('.tabs').length ) {

                    $('.tabs').find('dd').css( {
                        top: $('.tabs').find('dt').eq( -1 ).position().top + $('.tabs').find('dt').eq( -1 ).outerHeight(true)
                    } );

                }


            };

        //public properties

        //public methods


        _init();
    };

} )();

