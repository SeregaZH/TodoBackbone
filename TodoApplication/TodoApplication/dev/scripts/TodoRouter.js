/**
 * Created by Sergey on 28.12.2014.
 */
define('TodoRouter',['jquery','underscore', 'backbone', 'models/TodoCollection'], function($,_,Backbone, TodoCollection){
     var TodoRouter = Backbone.Router.extend({
         routes:{
            'filter/*type': 'setFilter'
         },

         setFilter : function(type){
             TodoCollection.setFilter(type);
             TodoCollection.filtrate();
         }
     });

    return TodoRouter;
 });
