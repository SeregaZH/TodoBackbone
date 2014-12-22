/**
 * Created by Sergey on 22.12.2014.
 */
define('TodoCollection',['jquery','underscore', 'backbone', 'TodoModel'], function($,_,Backbone, TodoModel){
    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel
    });

    var todos = new TodoCollection([new TodoModel({title: 'one', complete: false})]);
    return todos;
});
