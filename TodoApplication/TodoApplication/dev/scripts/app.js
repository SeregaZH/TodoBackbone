/**
 * Created by Sergey on 22.12.2014.
 */
define('app',['jquery','underscore', 'backbone','views/LayoutView'], function($,_,Backbone, LayoutView){
    return {
        initialize : function(){
            new LayoutView();
        }
    };
});