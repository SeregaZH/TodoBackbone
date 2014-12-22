/**
 * Created by Sergey on 22.12.2014.
 */
define('TodoModel',['jquery','underscore', 'backbone'], function($,_,Backbone){
   var TodoModel = Backbone.Model.extend({
       initialize: function(){
           console.log(this.title);
       },
       defaults: {
           title: '',
           completed: false
       }
   });

    return TodoModel;
});
