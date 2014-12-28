/**
 * Created by Sergey on 22.12.2014.
 */
define('models/TodoModel',['jquery','underscore', 'backbone'], function($,_,Backbone){
   var TodoModel = Backbone.Model.extend({
       initialize: function(){
       },
       idAttribute: 'Id',
       defaults: {
           Name: '',
           Note: '',
           IsActive: true
       },
       toggle: function () {
           this.save({
               IsActive: !this.get('IsActive')
           });
       }
   });

    return TodoModel;
});
