/**
 * Created by Sergey on 22.12.2014.
 */
define('models/TodoCollection',['jquery','underscore', 'backbone', 'models/TodoModel'], function($,_,Backbone, TodoModel){

    var filterConditions = {
        'default': function(item){
            item.visible();
        },
        'completed': function(item){
            if(!item.get('IsActive')){
                item.visible()
            }
            else{
                item.hide();
            }
        },
        'active': function(item){
            if(!item.get('IsActive')){
                item.hide()
            }
            else{
                item.visible();
            }
        }
    }

    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel,
        url: 'api/todo',
        active : function(){
            return this.where({ IsActive:true });
        },
        inactive : function(){
            return this.where({ IsActive:false });
        },
        setFilter: function(type){
          this.filterType = type;
        },
        getFilter: function(){
            return this.filterType;
        },
        filtrate : function(){
            var me = this;
            this.each(function(item){
               me.filterOne(item);
          });
        },
        filterOne : function(item){
            var filter = filterConditions[this.filterType || 'default'];
            filter(item);
        },
        comparator : 'Name'
    });

    var todos = new TodoCollection();
    todos.fetch();
    return todos;
});
