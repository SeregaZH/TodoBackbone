/**
 * Created by Sergey on 26.12.2014.
 */
define('views/LayoutView',
    ['jquery','underscore', 'backbone', 'models/TodoCollection','views/TodoView', 'global'],
    function($,_,Backbone, TodoCollection, TodoView, global){

    function createTodo(){
        return {
            Name: this.$input.val().trim(),
            Note: '',
            IsActive: true
        }
    }

    var LayoutView = Backbone.View.extend({
        el: '#todoapp',
        footerTemplate : _.template($('#footerTemplate').html()),
        events: {
            'keypress #new-todo': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },
        initialize : function(){
            this.allCheckbox = _.first(this.$('#toggle-all'));
            this.$input = this.$('#new-todo');
            this.$footer = this.$('#footer');
            this.$main = this.$('#main');

            this.listenTo(TodoCollection, 'add', this.addOne);
            this.listenTo(TodoCollection, 'reset', this.addAll);

            // New
            this.listenTo(TodoCollection, 'change:IsActive', this.filterOne);
            this.listenTo(TodoCollection,'filter', this.filterAll);
            this.listenTo(TodoCollection, 'all', this.render);
        },
        filterOne: function(todo){
            todo.trigger('visible');
        },
        filterAll: function(){
            TodoCollection.each(this.filterOne, this);
        },
        render: function(){
            var active = TodoCollection.active().length;
            var inactive = TodoCollection.inactive().length;

            if ( TodoCollection.length ) {
                this.$main.show();
                this.$footer.show();

                this.$footer.html(this.footerTemplate({
                    active: active,
                    inactive: inactive
                }));

            } else {
                this.$main.hide();
                this.$footer.hide();
            }

            this.allCheckbox.checked = !active;
        },
        createOnEnter : function(event) {
            if (event.which != global.constants.ENTER_KEY || !this.$input.val().trim()) {
                return
            }

            TodoCollection.create(createTodo.call(this), {
                success: function(newItem, id){
                    newItem.set('Id', id);
                }
            })
            this.$input.val('');
        },
        clearCompleted: function(){
            _.invoke(TodoCollection.inactive(), 'destroy');
            return false;
        },
        toggleAllComplete: function() {
            var isActive = this.allCheckbox.checked;

            TodoCollection.each(function( todo ) {
                todo.save({
                    'IsActive': !isActive
                });
            });
        },
        addOne: function( todo ) {
            var view = new TodoView({ model: todo });
            $('#todo-list').append( view.render().el );
        },
        addAll: function() {
            this.$('#todo-list').html('');
            TodoCollection.each(this.addOne, this);
        }
    });

    return LayoutView;
});
