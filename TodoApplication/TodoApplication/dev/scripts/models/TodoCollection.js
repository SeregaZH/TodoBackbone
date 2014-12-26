/**
 * Created by Sergey on 22.12.2014.
 */
define('models/TodoCollection',['jquery','underscore', 'backbone', 'models/TodoModel'], function($,_,Backbone, TodoModel){
    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel,
        url: 'api/todo',
        active : function(){
            return this.where({ IsActive:true });
        },
        inactive : function(){
            return this.where({ IsActive:false });
        },
        comparator : 'Name'
    });

    var todos = new TodoCollection();
    todos.fetch();
    return todos;
});
