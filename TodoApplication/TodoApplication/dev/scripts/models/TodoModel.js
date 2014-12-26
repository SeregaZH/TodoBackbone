/**
 * Created by Sergey on 22.12.2014.
 */
define('models/TodoModel',['jquery','underscore', 'backbone'], function($,_,Backbone){
   var TodoModel = Backbone.Model.extend({
       initialize: function(){
            this.set({'id': this.get('Id')});
       },
       defaults: {
           Id: '',
           Name: '',
           Note: '',
           IsActive: false,
           id: ''
       }
   });

    return TodoModel;
});
