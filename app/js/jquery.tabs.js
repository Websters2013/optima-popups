( function() {

    $( function() {

        $( '.tabs' ).each( function(){
            new Tabs( {
                obj: $( this ),
                showType: 0, // if "showType = 0" tabs will be without any animations
                activeIndex: function( index ){
                    console.log( index )
                 }
            } );
        } );

        $( '.dropdown' ).each( function(){
            new Dropdown( $( this ) );
        } );

        $.each( $( '.defaults__title' ), function() {
           
          new  Toggle ( $( this ) );
           
        } );

    } );

    var Tabs = function( params ) {

        //private properties
        var _self = this,
            _obj = params.obj,
            _showType = params.showType,
            _callbackActiveIndex = params.activeIndex,
            _window = $( window ),
            _tabsBtn = _obj.find( 'dt'),
            _tabsContent = _obj.find( 'dd'),
            _mobileScreen = true,
            _globalWidth = 0;

        //private methods
        var _addClassForAnimation = function() {

                if( _showType == 1 ){

                    _obj.addClass( 'tabs_animated1' );

                } else if( _showType == 2 ){

                    _obj.addClass( 'tabs_animated2' );

                }

            },
            _onEvents = function()  {

                _tabsBtn.on( {
                    click: function() {

                        if( _window.width() < 1024 ) {

                            _slideContent( $( this) );

                        } else {

                            _changeActiveTab( $( this) );
                            _setMinHeight( $( this) );

                        }

                    }
                } );

                _window.on( {
                    load: function () {

                        _globalWidth = _window.width();

                        if( _window.width() >= 1024 ) {

                            _setTopPos();
                            _setFirstActive();
                            _mobileScreen = false;

                        } else {

                            _mobileScreen = true

                        }

                    },
                    resize: function() {

                        if( _globalWidth != _window.width() ) {

                            setTimeout( function() {

                                _globalWidth = _window.width();

                            }, 100 );


                            if( _window.width() >= 1024 ) {

                                _setTopPos();
                                _setFirstActive();
                                _mobileScreen = false;

                            } else {

                                _resetStyle();
                                _mobileScreen = true

                            }


                        }

                    }
                } );

            },
            _addScroll = function() {

                _tabsContent.find('.tabs__content').perfectScrollbar({
                        suppressScrollX : 'true'
                    }
                );

            },
            _init = function() {

                _obj[ 0 ].obj = _self;
                _onEvents();
                _addClassForAnimation();
                _addScroll();

            },
            _setTopPos = function() {

                _tabsContent.css( {
                    top: _tabsBtn.eq( -1 ).position().top + _tabsBtn.eq( -1 ).outerHeight(true)
                } );

            },
            _changeActiveTab = function( elem ) {

                var curItem = elem,
                    nextContent = curItem.next(),
                    nextContentInner = nextContent.find( '.tabs__content' );

                if( !curItem.hasClass( 'active' ) ) {

                    _tabsBtn.removeClass( 'active' );
                    _tabsContent.height( 0 );
                    curItem.addClass( 'active' );
                    nextContent.innerHeight( nextContentInner.innerHeight() );
                }

                _callbackActiveIndex( curItem.index() / 2 );

            },
            _setFirstActive = function() {

                if( _mobileScreen ) {

                    _tabsBtn.eq( 0 ).addClass( 'active' );
                    _setMinHeight( _tabsBtn.eq( 0 ) );
                    _tabsBtn.eq( 0 ).next().height( _tabsBtn.eq( 0 ).next().find('.tabs__content').outerHeight(true) );

                }

            },
            _setMinHeight = function( elem ) {

                var nextElem = elem.next();

                _obj.css( {
                    'min-height': nextElem.outerHeight(true) + nextElem.position().top
                } );

            },
            _slideContent = function( elem ) {

                var curItem = elem,
                    nextContent = curItem.next(),
                    nextContentInner = nextContent.find( '.tabs__content' );

                if( !curItem.hasClass( 'active' ) ) {

                    _tabsBtn.removeClass( 'active' );
                    _tabsContent.removeAttr( 'style' );
                    curItem.addClass( 'active' );
                    nextContent.height( nextContentInner.outerHeight(true) );

                } else {

                    curItem.removeClass( 'active' );
                    nextContent.removeAttr( 'style' );
                }

            },
            _resetStyle = function() {

                _obj.removeAttr( 'style' );
                _tabsBtn.removeClass( 'active' );
                _tabsContent.removeAttr( 'style' );

            };

        _init();
    };

    var Dropdown = function( obj ){

        //private properties
        var _self = this,
            _obj = obj,
            _wrap = _obj.find( '> .dropdown__wrap' ),
            _title = _obj.find( '> .dropdown__title' ),
            _btnNext = _wrap.find( '.open-next' );

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

                _wrap.perfectScrollbar({
                        suppressScrollX : 'true'
                    }
                );

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
                            _hide( _title );
                            _open( curElem );
                        }
                        return false;
                    }
                } );

                _btnNext.on( {
                    click: function() {

                        var next = $( this).parents('.dropdown__wrap'),
                            curElem = next.find( '> .dropdown__title' ),
                            nextOpen = next.next(),
                            nextWrap = nextOpen.next(),
                            prevActive = next.prev();

                            _hide( _title );
                            _open( curElem );
                            console.log(prevActive, 2);
                            prevActive.addClass('active-img');

                            _open( nextOpen );

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

