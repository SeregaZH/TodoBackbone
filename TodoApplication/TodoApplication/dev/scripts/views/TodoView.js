/**
 * Created by Sergey on 26.12.2014.
 */
define('views/TodoView',['jquery','underscore', 'backbone', 'global'], function($,_,Backbone, global){
    var TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#todoTemplate').html()),
        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'click .destroy': 'clear',
            'blur .edit': 'close'
        },
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function() {
            this.$el.html( this.template( this.model.attributes ) );
            this.$input = this.$('.edit');
            return this;
        },
        close: function() {
            var value = this.$input.val().trim();

            if ( value ) {
                this.model.save({ Name: value });
            }

            this.$el.removeClass('editing');
        },
        updateOnEnter: function( e ) {
            if ( e.which === global.constants.ENTER_KEY ) {
                this.close();
            }
        },
        clear: function(){
            this.model.destroy();
        }
    });

    return TodoView
});
