$(function(){
    'use strict';


    $(function() {

        $('.site__ban_flash').each(function () {
            new HomeFlash($(this));
        });



    });

    var HomeFlash = function(obj) {

        //private properties
        var _obj = obj,
            flashvars = {},
            params = {},
            attributes = {};;

        //private methods
        var _addEvents = function() {

            },
            _init = function() {
                _addEvents();
                swfobject.embedSWF('home.swf', "flash", "1525", "530", "10",false, flashvars, params, attributes);
            };

        //public properties

        //public methods

        _init();
    };
});