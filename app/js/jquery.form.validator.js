"use strict";
( function(){

    $( function () {

        $( '#eligibility' ).each( function () {
            new FormValidator ( $( this ) );
        } );

    } );

    var FormValidator = function (obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _fields = _obj.find( '[data-required]' ),
            _window = $(window),
            _btn = _obj.find( '.btn' );

        //private methods
        var _constructor = function () {
                _onEvents();
                obj[0].obj = self;
            },
            _addNotTouchedClass = function () {

                _fields.each( function() {

                    var curItem = $(this);

                    if( curItem.val() === '' ){

                        curItem.addClass( 'not-touched' );

                        _validateField( curItem );

                    }



                } );

            },
            _onEvents = function () {
                _obj.on({
                    submit: function () {
                        return false;
                    }
                });
                _window.on( {
                    load: function() {

                        //$( 'body' ).trigger( 'update_checkout' );

                    }
                } );
                _fields.on( {
                    focus: function() {

                        $( this ).removeClass( 'not-touched' );

                    },
                    keyup: function() {

                        var curItem = $(this);

                        if( curItem.parents('.checkout__info-billing').length ) {

                            if( curItem.parents('.checkout__info-billing').hasClass('visible') ) {

                                _validateField( $( this ) );

                            }

                        } else {

                            _validateField( $( this ) );

                        }

                    }
                } );
                _btn.on( {
                    click: function() {

                        //return false;

                        _addNotTouchedClass();

                        if( _fields.hasClass('not-touched') || _fields.hasClass('not-valid') ) {

                            _obj.find('.not-touched:first').focus();
                            _obj.find('.not-valid:first').focus();

                            return false;

                        }
                        else {

                            return false;

                        }

                    }
                } );
            },
            _makeNotValid = function ( field ) {
                field.addClass( 'not-valid' );
                field.removeClass( 'valid' );
            },
            _makeValid = function ( field ) {
                field.removeClass( 'not-valid' );
                field.addClass( 'valid' );
            },
            _validateEmail = function ( email ) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            _validateField = function ( field ) {
                var type = field.attr( 'type' );

                if( type === 'email' || type === 'text' ){

                    if( field.val() === '' ){
                        _makeNotValid( field );
                        return false;
                    }

                }

                if( type === 'email' ){
                    if( !_validateEmail( field.val() ) ){
                        _makeNotValid( field );
                        return false;
                    }
                }

                _makeValid( field );
            };

        //public properties

        //public methods
        _self.checkValid = function () {
            var valid = true;

            _fields.each( function () {
                $( this ).removeClass( 'not-touched' );
                if( $( this ).hasClass( 'not-valid' ) ){
                    valid = false;

                }
            } );

            return valid;
        };

        _constructor();
    };

} )();