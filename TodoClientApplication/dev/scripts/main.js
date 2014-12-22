/**
 * Created by Sergey on 15.12.2014.
 */
(function(){
    require.config({
        //baseUrl: 'dev/scripts',
        paths:{
            jquery : [
                '../../bower_components/jquery/dist/jquery'
            ],
            backbone: [
                '../../bower_components/backbone/backbone'
            ],
            underscore: [
                '../../bower_components/underscore/underscore'
            ]
        },
        shim : {
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            }
        }
    });

    require(['app'], function(App){
         App.initialize();
    });
})();