/**
 * Created by Sergey on 22.12.2014.
 */
define('app',['jquery','underscore', 'backbone','views/LayoutView', 'TodoRouter'], function($,_,Backbone, LayoutView, TodoRouter){
    return {
        initialize : function(){
            new LayoutView();
            new TodoRouter();
            Backbone.history.start();
        }
    };
});